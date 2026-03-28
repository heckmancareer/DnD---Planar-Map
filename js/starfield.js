/**
 * starfield.js — Animated deep-space background
 *
 * Renders visual layers on a single <canvas>:
 *   1. Nebula clouds (many small overlapping blobs for organic shapes)
 *   2. Distant twinkling stars (small, many, some tinted)
 *   3. Nearby brighter stars with coloured glow
 *   4. Occasional shooting stars
 */

const Starfield = (() => {

  /* ---------- Configuration ---------- */
  const CONFIG = {
    distantStarCount: 600,
    nearStarCount:     90,
    shootingStarChance: 0.001,

    // Each nebula is a cluster of many tiny blobs
    nebulaClusterCount: 6,
    blobsPerCluster:   40,     // sub-blobs that compose one cloud

    // Vivid cosmic palette
    nebulaPalettes: [
      { r: 140, g: 60,  b: 220 },   // vibrant purple
      { r: 60,  g: 100, b: 220 },   // bright blue
      { r: 40,  g: 160, b: 180 },   // vivid teal
      { r: 180, g: 50,  b: 140 },   // hot magenta
      { r: 30,  g: 80,  b: 180 },   // deep blue
      { r: 200, g: 80,  b: 100 },   // crimson rose
      { r: 100, g: 180, b: 80  },   // emerald wisp
      { r: 220, g: 140, b: 60  },   // amber glow
    ],

    // Some distant stars get tinted for extra colour
    starTintChance: 0.15,
    starTints: [
      { r: 180, g: 140, b: 255 },  // lavender
      { r: 140, g: 200, b: 255 },  // ice blue
      { r: 255, g: 200, b: 140 },  // warm gold
      { r: 255, g: 140, b: 160 },  // soft rose
      { r: 140, g: 255, b: 200 },  // mint
    ],
  };

  /* ---------- State ---------- */
  let canvas, ctx, w, h;
  let distantStars  = [];
  let nearStars     = [];
  let nebulaClusters = [];
  let shootingStars  = [];
  let time = 0;

  /* ---------- Helpers ---------- */
  function rand(min, max) { return Math.random() * (max - min) + min; }

  /* ---------- Star factories ---------- */
  function createDistantStar() {
    // Optionally tint some stars
    let r = 220, g = 220, b = 240;
    if (Math.random() < CONFIG.starTintChance) {
      const tint = CONFIG.starTints[Math.floor(Math.random() * CONFIG.starTints.length)];
      r = tint.r; g = tint.g; b = tint.b;
    }
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      radius: rand(0.3, 1.2),
      baseAlpha: rand(0.3, 0.8),
      twinkleSpeed: rand(0.005, 0.03),
      twinkleOffset: rand(0, Math.PI * 2),
      r, g, b,
    };
  }

  function createNearStar() {
    const temp = Math.random();
    let r, g, b;
    if (temp < 0.15) {         // warm amber
      r = 255; g = 200; b = 140;
    } else if (temp < 0.3) {   // rose
      r = 255; g = 170; b = 180;
    } else if (temp < 0.5) {   // white
      r = 240; g = 240; b = 255;
    } else if (temp < 0.7) {   // cool blue
      r = 160; g = 190; b = 255;
    } else if (temp < 0.85) {  // lavender
      r = 200; g = 170; b = 255;
    } else {                   // teal
      r = 140; g = 230; b = 220;
    }
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      radius: rand(1.2, 2.5),
      glowRadius: rand(10, 25),
      baseAlpha: rand(0.6, 1),
      twinkleSpeed: rand(0.008, 0.025),
      twinkleOffset: rand(0, Math.PI * 2),
      r, g, b,
    };
  }

  /* ---------- Nebula cluster factory ---------- */
  // Each cluster = many small offset blobs sharing a colour,
  // scattered around a centre point. This produces organic,
  // irregular cloud shapes instead of perfect circles.
  function createNebulaCluster() {
    const palette = CONFIG.nebulaPalettes[Math.floor(Math.random() * CONFIG.nebulaPalettes.length)];
    const cx = rand(0, w);
    const cy = rand(0, h);
    // Spread radius scales with the smaller viewport dimension
    // so clouds stay proportionate on any screen size
    const minDim = Math.min(w, h);
    const spread = rand(minDim * 0.12, minDim * 0.3);

    const blobs = [];
    for (let i = 0; i < CONFIG.blobsPerCluster; i++) {
      // Gaussian-ish distribution around centre (sum of randoms)
      const angle = rand(0, Math.PI * 2);
      const dist  = (Math.random() + Math.random() + Math.random()) / 3 * spread;
      blobs.push({
        ox: Math.cos(angle) * dist,   // offset from cluster centre
        oy: Math.sin(angle) * dist,
        radius: rand(minDim * 0.02, minDim * 0.09),
        alpha: rand(0.02, 0.07),
      });
    }

    return {
      cx, cy,
      driftX: rand(-0.04, 0.04),
      driftY: rand(-0.02, 0.02),
      r: palette.r, g: palette.g, b: palette.b,
      blobs,
      spread, // keep for wrapping
    };
  }

  /* ---------- Shooting star ---------- */
  function createShootingStar() {
    const angle = rand(-Math.PI / 6, -Math.PI / 3);
    const speed = rand(8, 16);
    return {
      x: rand(0, w),
      y: rand(0, h * 0.5),
      vx: Math.cos(angle) * speed,
      vy: -Math.sin(angle) * speed,
      life: 1,
      decay: rand(0.015, 0.03),
      length: rand(40, 100),
    };
  }

  /* ---------- Initialisation ---------- */
  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    loop();
  }

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width  = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    populate();
  }

  function populate() {
    distantStars   = Array.from({ length: CONFIG.distantStarCount },   createDistantStar);
    nearStars      = Array.from({ length: CONFIG.nearStarCount },      createNearStar);
    nebulaClusters = Array.from({ length: CONFIG.nebulaClusterCount }, createNebulaCluster);
    shootingStars  = [];
  }

  /* ---------- Drawing ---------- */
  function drawNebulae() {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    for (const cluster of nebulaClusters) {
      for (const blob of cluster.blobs) {
        const bx = cluster.cx + blob.ox;
        const by = cluster.cy + blob.oy;
        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, blob.radius);
        grad.addColorStop(0,   `rgba(${cluster.r}, ${cluster.g}, ${cluster.b}, ${blob.alpha})`);
        grad.addColorStop(0.5, `rgba(${cluster.r}, ${cluster.g}, ${cluster.b}, ${blob.alpha * 0.4})`);
        grad.addColorStop(1,   `rgba(${cluster.r}, ${cluster.g}, ${cluster.b}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, by, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // drift the whole cluster
      cluster.cx += cluster.driftX;
      cluster.cy += cluster.driftY;

      // wrap around edges
      const margin = cluster.spread * 1.5;
      if (cluster.cx < -margin) cluster.cx = w + margin * 0.5;
      if (cluster.cx > w + margin) cluster.cx = -margin * 0.5;
      if (cluster.cy < -margin) cluster.cy = h + margin * 0.5;
      if (cluster.cy > h + margin) cluster.cy = -margin * 0.5;
    }

    ctx.restore();
  }

  function drawDistantStars() {
    for (const s of distantStars) {
      const alpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.3;
      const a = Math.max(0, alpha);
      ctx.fillStyle = `rgba(${s.r}, ${s.g}, ${s.b}, ${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawNearStars() {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (const s of nearStars) {
      const alpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.25;
      const a = Math.max(0, alpha);

      // glow halo
      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.glowRadius);
      grad.addColorStop(0,   `rgba(${s.r}, ${s.g}, ${s.b}, ${a * 0.35})`);
      grad.addColorStop(0.3, `rgba(${s.r}, ${s.g}, ${s.b}, ${a * 0.1})`);
      grad.addColorStop(1,   `rgba(${s.r}, ${s.g}, ${s.b}, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // bright core
      ctx.fillStyle = `rgba(${s.r}, ${s.g}, ${s.b}, ${a})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  function drawShootingStars() {
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      ctx.save();
      ctx.globalAlpha = s.life;
      ctx.strokeStyle = 'rgba(220, 230, 255, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * (s.length / 10), s.y - s.vy * (s.length / 10));
      ctx.stroke();
      ctx.restore();

      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;

      if (s.life <= 0 || s.x < -100 || s.x > w + 100 || s.y < -100 || s.y > h + 100) {
        shootingStars.splice(i, 1);
      }
    }
  }

  /* ---------- Animation loop ---------- */
  function loop() {
    time++;

    // Deep-space gradient background
    const bgGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.8);
    bgGrad.addColorStop(0,   '#0a0a1a');
    bgGrad.addColorStop(0.5, '#060612');
    bgGrad.addColorStop(1,   '#020208');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    drawNebulae();
    drawDistantStars();
    drawNearStars();

    if (Math.random() < CONFIG.shootingStarChance) {
      shootingStars.push(createShootingStar());
    }
    drawShootingStars();

    requestAnimationFrame(loop);
  }

  /* ---------- Public API ---------- */
  return { init, CONFIG };

})();
