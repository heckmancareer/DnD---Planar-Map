/**
 * campaigns.js — Renders campaign cards and manages grid ↔ detail transitions.
 *
 * Depends on: CAMPAIGNS array from campaigns-data.js
 *
 * States:
 *   Grid view  — all cards visible, centered
 *   Detail view — one campaign expanded (emblem + description), others hidden
 */

const Campaigns = (() => {

  let container;
  let grid;
  let detail;
  let detailImg, detailTitle, detailSubtitle, detailDescription;

  /* ---------- Build DOM for each grid card ---------- */
  function createCard(campaign) {
    const card = document.createElement('button');
    card.className = 'campaign-card';
    card.dataset.campaignId = campaign.id;
    card.style.setProperty('--glow-color', campaign.glowColor);

    const icon = document.createElement('div');
    icon.className = 'campaign-card-icon';
    const img = document.createElement('img');
    img.src = campaign.icon;
    img.alt = campaign.name;
    img.draggable = false;
    icon.appendChild(img);

    const text = document.createElement('div');
    text.className = 'campaign-card-text';

    const title = document.createElement('h3');
    title.className = 'campaign-card-title';
    title.textContent = campaign.name;

    const subtitle = document.createElement('p');
    subtitle.className = 'campaign-card-subtitle';
    subtitle.textContent = campaign.subtitle;

    text.appendChild(title);
    text.appendChild(subtitle);
    card.appendChild(icon);
    card.appendChild(text);

    card.addEventListener('click', () => openDetail(campaign));

    grid.appendChild(card);
  }

  /* ---------- Open detail view ---------- */
  function openDetail(campaign) {
    // Populate detail panel with this campaign's data
    detail.style.setProperty('--glow-color', campaign.glowColor);
    detailImg.src = campaign.icon;
    detailImg.alt = campaign.name;
    detailTitle.textContent = campaign.name;
    detailSubtitle.textContent = campaign.subtitle;

    detailDescription.innerHTML = '';
    for (const para of campaign.description) {
      const p = document.createElement('p');
      p.textContent = para;
      detailDescription.appendChild(p);
    }

    grid.classList.add('campaigns-grid--hidden');
    detail.classList.add('campaigns-detail--visible');
    detail.removeAttribute('aria-hidden');
  }

  /* ---------- Close detail view ---------- */
  function closeDetail() {
    grid.classList.remove('campaigns-grid--hidden');
    detail.classList.remove('campaigns-detail--visible');
    detail.setAttribute('aria-hidden', 'true');
  }

  /* ---------- Build detail panel DOM (once) ---------- */
  function buildDetail() {
    detail = document.createElement('div');
    detail.className = 'campaigns-detail';
    detail.setAttribute('aria-hidden', 'true');

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'campaigns-back';
    backBtn.innerHTML = '&#8592; Back';
    backBtn.addEventListener('click', closeDetail);

    // Wrapper constrains max-width and centers the block
    const wrapper = document.createElement('div');
    wrapper.className = 'campaigns-detail-wrapper';

    // Side-by-side inner layout
    const inner = document.createElement('div');
    inner.className = 'campaigns-detail-inner';

    // Left: large emblem
    const emblemDiv = document.createElement('div');
    emblemDiv.className = 'campaigns-detail-emblem';
    detailImg = document.createElement('img');
    detailImg.draggable = false;
    emblemDiv.appendChild(detailImg);

    // Right: text content
    const content = document.createElement('div');
    content.className = 'campaigns-detail-content';

    detailTitle = document.createElement('h2');
    detailTitle.className = 'campaigns-detail-title';

    detailSubtitle = document.createElement('p');
    detailSubtitle.className = 'campaigns-detail-subtitle';

    const divider = document.createElement('hr');
    divider.className = 'campaigns-detail-divider';

    detailDescription = document.createElement('div');
    detailDescription.className = 'campaigns-detail-description';

    content.appendChild(detailTitle);
    content.appendChild(detailSubtitle);
    content.appendChild(divider);
    content.appendChild(detailDescription);

    inner.appendChild(emblemDiv);
    inner.appendChild(content);

    wrapper.appendChild(backBtn);
    wrapper.appendChild(inner);
    detail.appendChild(wrapper);
  }

  /* ---------- Init ---------- */
  function init() {
    container = document.getElementById('campaigns-container');

    grid = document.createElement('div');
    grid.className = 'campaigns-grid';

    buildDetail();

    for (const campaign of CAMPAIGNS) {
      createCard(campaign);
    }

    container.appendChild(grid);
    container.appendChild(detail);
  }

  return { init };

})();
