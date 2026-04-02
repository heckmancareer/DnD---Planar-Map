/**
 * journals.js — Journals of Echo section
 *
 * Exposes a single global: Journals
 * Called from main.js via Journals.init()
 *
 * Two views, toggled by CSS classes:
 *   Grid    — .journals-grid (default visible)
 *   Detail  — .journals-detail (hidden by default)
 *
 * Story body content is fetched on demand from .md files and rendered
 * via the marked.js library (loaded from CDN in index.html).
 */

const Journals = (() => {

  /* ---- Closure state ---- */
  let container = null;
  let grid      = null;
  let detail    = null;

  let fetchController = null;   // AbortController for the current in-flight fetch

  // Detail panel nodes populated per-open
  let detailNumber       = null;
  let detailTitle        = null;
  let detailDate         = null;
  let detailLocation     = null;
  let detailQuoteText    = null;
  let detailQuoteSpeaker = null;
  let detailBody         = null;

  /* ---- Card builder ---- */
  function createCard(j) {
    const card = document.createElement('button');
    card.className = 'journal-card';
    card.style.setProperty('--glow-color', j.glowColor);
    card.setAttribute('data-journal-id', j.id);
    card.setAttribute('type', 'button');

    card.innerHTML = `
      <span class="journal-card-number">#${j.number}</span>
      <span class="journal-card-title">${j.title}</span>
      <span class="journal-card-meta">
        <span class="journal-card-date">${j.date}</span>
        <span class="journal-card-location">${j.location}</span>
      </span>
      <span class="journal-card-snippet">${j.centralQuote}</span>
    `;

    card.addEventListener('click', () => openDetail(j));
    return card;
  }

  /* ---- Detail panel builder (called once) ---- */
  function buildDetail() {
    detail = document.createElement('div');
    detail.className = 'journals-detail';
    detail.setAttribute('aria-hidden', 'true');

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'journals-back-btn';
    backBtn.setAttribute('type', 'button');
    backBtn.setAttribute('aria-label', 'Back to journals');
    backBtn.innerHTML = `<span class="journals-back-arrow" aria-hidden="true">←</span> Back`;
    backBtn.addEventListener('click', closeDetail);

    // Wrapper (max-width container)
    const wrapper = document.createElement('div');
    wrapper.className = 'journals-detail-wrapper';

    // Header card
    const header = document.createElement('div');
    header.className = 'journals-detail-header';

    detailNumber   = document.createElement('p');
    detailNumber.className = 'journals-detail-number';

    detailTitle    = document.createElement('h2');
    detailTitle.className = 'journals-detail-title';

    detailDate     = document.createElement('p');
    detailDate.className = 'journals-detail-date';

    detailLocation = document.createElement('p');
    detailLocation.className = 'journals-detail-location';

    // Central quote block
    const quoteBlock = document.createElement('blockquote');
    quoteBlock.className = 'journals-central-quote';

    detailQuoteText    = document.createElement('p');
    detailQuoteText.className = 'journals-central-quote-text';

    detailQuoteSpeaker = document.createElement('cite');
    detailQuoteSpeaker.className = 'journals-central-quote-speaker';

    quoteBlock.appendChild(detailQuoteText);
    quoteBlock.appendChild(detailQuoteSpeaker);

    header.appendChild(detailNumber);
    header.appendChild(detailTitle);
    header.appendChild(detailDate);
    header.appendChild(detailLocation);
    header.appendChild(quoteBlock);

    // Story body card
    detailBody = document.createElement('div');
    detailBody.className = 'journals-story-body';

    wrapper.appendChild(header);
    wrapper.appendChild(detailBody);

    detail.appendChild(backBtn);
    detail.appendChild(wrapper);
  }

  /* ---- Open detail view ---- */
  function openDetail(j) {
    // Set per-journal glow color on the detail panel
    detail.style.setProperty('--glow-color', j.glowColor);

    // Populate static metadata immediately (no fetch needed)
    detailNumber.textContent       = `#${j.number}`;
    detailTitle.textContent        = j.title;
    detailDate.textContent         = j.date;
    detailLocation.textContent     = j.location;
    detailQuoteText.textContent    = j.centralQuote;
    detailQuoteSpeaker.textContent = `— ${j.centralQuoteSpeaker}`;

    // Show loading state in story body
    detailBody.innerHTML = '<p class="journals-loading">Loading story\u2026</p>';

    // Switch views
    grid.classList.add('journals-grid--hidden');
    detail.classList.add('journals-detail--visible');
    detail.removeAttribute('aria-hidden');

    // Fetch and render the story markdown
    fetchStory(j);
  }

  /* ---- Fetch and render story markdown ---- */
  async function fetchStory(j) {
    // Cancel any previous in-flight fetch
    if (fetchController) {
      fetchController.abort();
    }
    fetchController = new AbortController();

    try {
      const res = await fetch(j.file, { signal: fetchController.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const md = await res.text();

      if (typeof marked === 'undefined') {
        detailBody.innerHTML = '<p class="journals-error">Markdown library unavailable. Please check your internet connection.</p>';
        return;
      }

      detailBody.innerHTML = marked.parse(md);

    } catch (err) {
      if (err.name === 'AbortError') return;   // User navigated back — ignore silently
      console.error('[Journals] Failed to load story:', j.file, err);
      detailBody.innerHTML = '<p class="journals-error">Story could not be loaded.</p>';
    } finally {
      fetchController = null;
    }
  }

  /* ---- Close detail view / return to grid ---- */
  function closeDetail() {
    if (fetchController) {
      fetchController.abort();
      fetchController = null;
    }
    detail.scrollTop = 0;   // Reset scroll so re-opens start from the top
    grid.classList.remove('journals-grid--hidden');
    detail.classList.remove('journals-detail--visible');
    detail.setAttribute('aria-hidden', 'true');
  }

  /* ---- Public init ---- */
  function init() {
    container = document.getElementById('journals-container');
    if (!container) return;

    // Configure marked once
    if (typeof marked !== 'undefined') {
      marked.use({
        gfm: true,
        breaks: false,
        headerIds: false,
      });
    }

    // Build grid
    grid = document.createElement('div');
    grid.className = 'journals-grid';

    JOURNALS.forEach(j => grid.appendChild(createCard(j)));

    // Build detail panel (DOM built once, reused for all journals)
    buildDetail();

    container.appendChild(grid);
    container.appendChild(detail);

    // Reset to grid view whenever user navigates away from this section
    const section = document.getElementById('section-journals');
    if (section) {
      section.addEventListener('sectionleave', closeDetail);
    }
  }

  return { init };

})();
