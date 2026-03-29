/**
 * heroes.js — Renders hero cards and manages grid ↔ detail transitions.
 *
 * Depends on: HEROES array from heroes-data.js
 *             CAMPAIGNS array from campaigns-data.js (for campaign name + glow color lookups)
 *
 * States:
 *   Grid view   — all hero cards visible in a scrollable grid
 *   Detail view — one hero expanded (portrait left, info + description right)
 */

const Heroes = (() => {

  const PLACEHOLDER = 'assets/icons/hero-placeholder.svg';

  let container;
  let grid;
  let detail;
  let detailPortrait, detailName, detailMeta, detailCampaignTag, detailDescription;

  /* ---------- Helper: look up campaign by id ---------- */
  function getCampaign(id) {
    return CAMPAIGNS.find(c => c.id === id) || null;
  }

  /* ---------- Build a grid card ---------- */
  function createCard(hero) {
    const campaign = getCampaign(hero.campaign);

    const card = document.createElement('button');
    card.className = 'hero-card';
    card.dataset.heroId = hero.id;
    if (campaign) card.style.setProperty('--glow-color', campaign.glowColor);

    // Portrait (fills top of card)
    const portraitDiv = document.createElement('div');
    portraitDiv.className = 'hero-card-portrait';
    const img = document.createElement('img');
    img.src = hero.portrait || PLACEHOLDER;
    img.alt = hero.name;
    img.draggable = false;
    portraitDiv.appendChild(img);

    // Body
    const body = document.createElement('div');
    body.className = 'hero-card-body';

    const name = document.createElement('h3');
    name.className = 'hero-card-name';
    name.textContent = hero.name;

    const meta = document.createElement('p');
    meta.className = 'hero-card-meta';
    meta.textContent = `${hero.species}  ·  ${hero.class}  ·  Lvl ${hero.level}`;

    const tag = document.createElement('span');
    tag.className = 'hero-card-tag';
    if (campaign) {
      tag.textContent = campaign.name;
      tag.style.setProperty('--tag-color', campaign.glowColor);
    }

    body.appendChild(name);
    body.appendChild(meta);
    body.appendChild(tag);

    card.appendChild(portraitDiv);
    card.appendChild(body);

    card.addEventListener('click', () => openDetail(hero));

    grid.appendChild(card);
  }

  /* ---------- Open detail view ---------- */
  function openDetail(hero) {
    const campaign = getCampaign(hero.campaign);

    detail.style.setProperty('--glow-color', campaign ? campaign.glowColor : '#a090d0');

    detailPortrait.src = hero.portrait || PLACEHOLDER;
    detailPortrait.alt = hero.name;

    detailName.textContent = hero.name;
    detailMeta.textContent = `${hero.species}  ·  ${hero.class}  ·  Level ${hero.level}`;

    if (campaign) {
      detailCampaignTag.textContent = campaign.name;
      detailCampaignTag.style.setProperty('--tag-color', campaign.glowColor);
      detailCampaignTag.hidden = false;
    } else {
      detailCampaignTag.hidden = true;
    }

    detailDescription.innerHTML = '';
    for (const para of hero.description) {
      const p = document.createElement('p');
      p.textContent = para;
      detailDescription.appendChild(p);
    }

    grid.classList.add('heroes-grid--hidden');
    detail.classList.add('heroes-detail--visible');
    detail.removeAttribute('aria-hidden');
  }

  /* ---------- Close detail view ---------- */
  function closeDetail() {
    grid.classList.remove('heroes-grid--hidden');
    detail.classList.remove('heroes-detail--visible');
    detail.setAttribute('aria-hidden', 'true');
  }

  /* ---------- Build detail panel DOM (once) ---------- */
  function buildDetail() {
    detail = document.createElement('div');
    detail.className = 'heroes-detail';
    detail.setAttribute('aria-hidden', 'true');

    const backBtn = document.createElement('button');
    backBtn.className = 'campaigns-back'; // reuse campaign back-button styles
    backBtn.innerHTML = '&#8592; Back';
    backBtn.addEventListener('click', closeDetail);

    const wrapper = document.createElement('div');
    wrapper.className = 'heroes-detail-wrapper';

    const inner = document.createElement('div');
    inner.className = 'heroes-detail-inner';

    // Left: portrait
    const portraitDiv = document.createElement('div');
    portraitDiv.className = 'heroes-detail-portrait';
    detailPortrait = document.createElement('img');
    detailPortrait.draggable = false;
    portraitDiv.appendChild(detailPortrait);

    // Right: info + description
    const content = document.createElement('div');
    content.className = 'heroes-detail-content';

    detailName = document.createElement('h2');
    detailName.className = 'heroes-detail-name';

    detailMeta = document.createElement('p');
    detailMeta.className = 'heroes-detail-meta';

    detailCampaignTag = document.createElement('span');
    detailCampaignTag.className = 'hero-card-tag heroes-detail-tag';

    const divider = document.createElement('hr');
    divider.className = 'campaigns-detail-divider'; // reuse campaign divider styles

    detailDescription = document.createElement('div');
    detailDescription.className = 'campaigns-detail-description'; // reuse campaign description styles

    content.appendChild(detailName);
    content.appendChild(detailMeta);
    content.appendChild(detailCampaignTag);
    content.appendChild(divider);
    content.appendChild(detailDescription);

    inner.appendChild(portraitDiv);
    inner.appendChild(content);

    wrapper.appendChild(backBtn);
    wrapper.appendChild(inner);
    detail.appendChild(wrapper);
  }

  /* ---------- Init ---------- */
  function init() {
    container = document.getElementById('heroes-container');

    grid = document.createElement('div');
    grid.className = 'heroes-grid';

    buildDetail();

    for (const hero of HEROES) {
      createCard(hero);
    }

    container.appendChild(grid);
    container.appendChild(detail);
  }

  return { init };

})();
