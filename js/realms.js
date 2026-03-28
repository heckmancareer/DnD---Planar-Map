/**
 * realms.js — Renders realm icons and manages the info side-tray.
 *
 * Depends on: REALMS array from realms-data.js
 */

const Realms = (() => {

  let container;   // #realms-container
  let tray;        // #realm-tray
  let trayName;
  let trayArcana;
  let trayBody;
  let trayClose;
  let activeRealm = null;

  /* ---------- Build DOM for each realm icon ---------- */
  function createIcon(realm) {
    const el = document.createElement('button');
    el.className = 'realm-icon';
    el.setAttribute('aria-label', realm.name);
    el.dataset.realmId = realm.id;
    el.style.left = realm.position.x + '%';
    el.style.top  = realm.position.y + '%';
    el.style.setProperty('--glow-color', realm.glowColor);

    if (realm.size === 'large') {
      el.classList.add('realm-icon--large');
    } else if (realm.size === 'ambient') {
      el.classList.add('realm-icon--ambient');
    }

    // Icon image
    const img = document.createElement('img');
    img.src = realm.icon;
    img.alt = realm.name;
    img.draggable = false;
    el.appendChild(img);

    // Label underneath
    const label = document.createElement('span');
    label.className = 'realm-icon-label';
    label.textContent = realm.name;
    el.appendChild(label);

    // Subtitle line (for ambient icons that need extra context)
    if (realm.subtitle && realm.size === 'ambient') {
      const sub = document.createElement('span');
      sub.className = 'realm-icon-subtitle';
      sub.textContent = realm.subtitle;
      el.appendChild(sub);
    }

    el.addEventListener('click', () => openTray(realm));

    container.appendChild(el);
  }

  /* ---------- Side tray ---------- */
  function openTray(realm) {
    if (activeRealm === realm.id) return;
    activeRealm = realm.id;

    trayName.textContent   = realm.name;
    trayArcana.textContent = realm.arcana;
    trayBody.innerHTML     = '';

    for (const para of realm.description) {
      const p = document.createElement('p');
      p.textContent = para;
      trayBody.appendChild(p);
    }

    tray.classList.add('open');
  }

  function closeTray() {
    tray.classList.remove('open');
    activeRealm = null;
  }

  /* ---------- Fade-in all icons ---------- */
  function showIcons() {
    container.classList.add('visible');
  }

  /* ---------- Init ---------- */
  function init() {
    container  = document.getElementById('realms-container');
    tray       = document.getElementById('realm-tray');
    trayName   = document.getElementById('tray-name');
    trayArcana = document.getElementById('tray-arcana');
    trayBody   = document.getElementById('tray-body');
    trayClose  = document.getElementById('tray-close');

    trayClose.addEventListener('click', closeTray);

    // Close tray when clicking the backdrop (outside tray)
    tray.addEventListener('click', (e) => {
      if (e.target === tray) closeTray();
    });

    // Escape key closes tray
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeTray();
    });

    // Create icons from data
    for (const realm of REALMS) {
      createIcon(realm);
    }
  }

  return { init, showIcons, closeTray };

})();
