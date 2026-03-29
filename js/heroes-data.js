/**
 * heroes-data.js — Player Character definitions.
 *
 * This is the ONLY file to edit when adding/changing heroes.
 *
 * Fields:
 *   id         — unique kebab-case slug
 *   name       — character name
 *   class      — character class (e.g. 'Wizard', 'Fighter')
 *   level      — current level (number)
 *   species    — character species/race
 *   campaign   — campaign id this hero belongs to (must match a CAMPAIGNS id)
 *   portrait   — path to portrait image, or null to use the placeholder
 *   description — array of paragraph strings shown in the detail view
 */

const HEROES = [
  {
    id: 'caspian-veilbright',
    name: 'Caspian Veilbright',
    class: 'Fighter - Eldricht Knight',
    level: 7,
    species: 'Human',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'auriette-ashfall',
    name: 'Auriette Ashfall',
    class: 'Wizard - Bladesinger',
    level: 7,
    species: 'Tiefling',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'redd-ravenshire',
    name: 'Redd Ravenshire',
    class: 'Druid - Circle of the Moon',
    level: 7,
    species: 'Tiefling',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'vornakir-vanori',
    name: 'Vornakir Vanori',
    class: 'Sorcerer - Draconic',
    level: 7,
    species: 'Elf - Drow',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'sunni',
    name: `Sol'Régem Sunniva-Aelia`,
    class: 'Bard - College of Glamour',
    level: 7,
    species: 'Aasamir',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'alden-ashdawn',
    name: 'Alden Ashdawn',
    class: 'Cleric - Life Domain',
    level: 5,
    species: 'Human',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'talys-crowe',
    name: 'Talys Crowe',
    class: 'Wizard - Diviner',
    level: 5,
    species: 'Tiefling',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'calarel-stonevein',
    name: 'Calarel Stonevein',
    class: 'Paladin - Oath of Vengeance',
    level: 5,
    species: 'Orc',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'aurelio-falconcrest',
    name: 'Aurelio Falconcrest',
    class: 'Ranger - Beast Master',
    level: 5,
    species: 'Elf - Wood',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    id: 'Laenor',
    name: 'Laenor',
    class: 'Fighter - Battle Master',
    level: 5,
    species: 'Goliath',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
];
