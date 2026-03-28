/**
 * main.js — Application entry point
 *
 * Flow:
 *   1. Boot starfield
 *   2. Show title overlay (auto-fades in via CSS)
 *   3. First click anywhere dismisses the title
 *   4. Realm icons fade in
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Starfield ---- */
  const canvas = document.getElementById('starfield');
  if (!canvas) { console.error('Starfield canvas not found'); return; }
  Starfield.init(canvas);

  /* ---- Realms setup (icons created but hidden) ---- */
  Realms.init();

  /* ---- Title dismiss ---- */
  const overlay = document.getElementById('overlay');

  overlay.addEventListener('click', () => {
    if (overlay.classList.contains('dismissed')) return;
    overlay.classList.add('dismissed');

    // After the title fades out, show the realm icons
    setTimeout(() => {
      Realms.showIcons();
    }, 600);
  });

});
