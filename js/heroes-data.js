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
    id: 'lyra-ashveil',
    name: 'Lyra Ashveil',
    class: 'Wizard',
    level: 5,
    species: 'Half-Elf',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lyra came to the Spark-Oath Academy after a wandering childhood spent in the border towns, where she first felt the Spark crackle through her fingers during a thunderstorm at the age of nine. She has spent every year since trying to understand what it means.',
      'Disciplined and curious in equal measure, she keeps meticulous notes on every anomaly she encounters — and the sealed wing beneath the Academy has filled three notebooks already.',
    ],
  },
  {
    id: 'brennan-coldforge',
    name: 'Brennan Coldforge',
    class: 'Artificer',
    level: 5,
    species: 'Dwarf',
    campaign: 'spark-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brennan enrolled at Spark-Oath not to study magic, but to study the machines that magic builds. His workshop is a hazard to the surrounding dormitories and he has been formally reprimanded four times for "unscheduled structural experiments."',
      'Beneath the gruffness is a genuine warmth for those who earn his trust, and an almost religious reverence for well-made things — whether that means a finely balanced crossbow or a well-constructed argument.',
    ],
  },
  {
    id: 'seraphine-vol',
    name: 'Seraphine Vol',
    class: 'Paladin',
    level: 6,
    species: 'Human',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seraphine comes from a long line of Rider families — her grandmother flew in the last great war, her father trained the generation after. The bond she formed with the copper dragon Vethara was described by the Academy instructors as "unusual in its speed and depth."',
      'She leads from the front and asks nothing of her companions that she would not do herself. The mountain passes have tested that principle repeatedly.',
    ],
  },
  {
    id: 'orin-duskmantle',
    name: 'Orin Duskmantle',
    class: 'Rogue',
    level: 6,
    species: 'Tiefling',
    campaign: 'celstate-saga',
    portrait: null,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nobody is entirely sure how Orin ended up as a Rider. The official story involves a clerical error and a very fast dragon. The real story, which Orin refuses to confirm or deny, is more interesting.',
      'What is certain is that his bond with the shadow-scaled dragon Nyx is genuine, and that his talent for finding information in places that should not have any has proved invaluable behind enemy lines.',
    ],
  },
];
