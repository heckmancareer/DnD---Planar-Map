/**
 * main.js — Application entry point
 *
 * Flow:
 *   1. Boot starfield
 *   2. Init nav (registers click handlers)
 *   3. Init realms (creates icons, hidden)
 *   4. Title overlay auto-fades in via CSS
 *   5. First click → overlay fades out → nav slides up → realm-map section
 *      fades in → icons become interactive
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Starfield ---- */
  const canvas = document.getElementById('starfield');
  if (!canvas) { console.error('Starfield canvas not found'); return; }
  Starfield.init(canvas);

  /* ---- Module setup ---- */
  Nav.init();
  Realms.init();
  Campaigns.init();
  Heroes.init();

  /* ---- Title dismiss ---- */
  const overlay = document.getElementById('overlay');

  overlay.addEventListener('click', () => {
    if (overlay.classList.contains('dismissed')) return;
    overlay.classList.add('dismissed');

    Nav.showNav();                                                    // t=0:    nav slides up from bottom

    setTimeout(() => Nav.activateInitialSection('realm-map'), 300);  // t=300ms: section begins fading in
    setTimeout(() => Realms.showIcons(), 700);                        // t=700ms: icons become interactive
  });

});
