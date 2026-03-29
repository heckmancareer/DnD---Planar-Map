/**
 * campaigns.js — Renders campaign cards into the campaigns section.
 *
 * Depends on: CAMPAIGNS array from campaigns-data.js
 */

const Campaigns = (() => {

  let container;

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

    container.appendChild(card);
  }

  function init() {
    container = document.getElementById('campaigns-container');

    for (const campaign of CAMPAIGNS) {
      createCard(campaign);
    }
  }

  return { init };

})();
