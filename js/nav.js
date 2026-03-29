/**
 * nav.js — Bottom navigation bar and section switching.
 *
 * Manages:
 *   - Section active/inactive state via CSS classes
 *   - Cross-fade transition between sections (exit 0.4s, enter 0.7s)
 *   - Nav bar show/hide
 *   - Active nav button state
 */

const Nav = (() => {

  let nav;
  let navButtons;
  let currentSection = null;
  let transitioning = false;

  function showNav() {
    nav.classList.add('nav-visible');
  }

  function switchSection(targetId) {
    if (transitioning) return;
    if (currentSection && currentSection.dataset.section === targetId) return;

    transitioning = true;

    const incoming = document.querySelector(`.site-section[data-section="${targetId}"]`);
    if (!incoming) { transitioning = false; return; }

    // Update nav button states
    navButtons.forEach(btn => {
      const isTarget = btn.dataset.target === targetId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-current', isTarget ? 'page' : 'false');
    });

    // Fade out the current section (faster exit)
    if (currentSection) {
      const outgoing = currentSection;
      outgoing.classList.add('section-exiting');
      outgoing.classList.remove('section-active');
      setTimeout(() => outgoing.classList.remove('section-exiting'), 400);
    }

    // Fade in the incoming section (overlaps with exit)
    incoming.classList.add('section-active');
    currentSection = incoming;

    // Release transition lock after the slower fade-in completes
    setTimeout(() => { transitioning = false; }, 700);
  }

  function activateInitialSection(sectionId) {
    const initial = document.querySelector(`.site-section[data-section="${sectionId}"]`);
    if (!initial) return;
    currentSection = initial;
    initial.classList.add('section-active');

    navButtons.forEach(btn => {
      const isTarget = btn.dataset.target === sectionId;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-current', isTarget ? 'page' : 'false');
    });
  }

  function init() {
    nav = document.getElementById('site-nav');
    navButtons = Array.from(document.querySelectorAll('.nav-btn'));

    navButtons.forEach(btn =>
      btn.addEventListener('click', () => switchSection(btn.dataset.target))
    );
  }

  return { init, showNav, switchSection, activateInitialSection };

})();
