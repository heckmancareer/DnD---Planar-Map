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
 *   portrait          — path to portrait image, or null to use the placeholder
 *   portraitArtist    — (optional) artist name shown beneath the portrait
 *   portraitArtistUrl — (optional) URL to hyperlink the artist credit
 *   coreQuote         — (optional) a defining quote shown above the backstory
 *   description       — array of paragraph strings shown in the detail view
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
    portrait: 'assets/portraits/vornakir.jpg',
    campaign: 'spark-saga',
    portraitArtist: '@d4ybreaker',
    portraitArtistUrl: 'https://x.com/d4ybreaker?s=21&t=Qv4C_10OSA0kNBI6DUim8w',
    coreQuote: 'If I’m the Sin of Pride, then that must mean you’re all the Sin of Envy.',
    description: [
      'Vornakir Vanori, a prodigy of many titles and even more talents, is a Drow Sorcerer born to the Vanori Clan of the Obsidian Barricade - an ancient clan renowned for their founding Ancestor being one of the four Elders who created the city of Ebonspire.',
      'Though his bloodline is one of great prestige, perhaps what makes him even more prominent among his kind is the extremely rare blood mutation that manifests as golden draconic scales adorning his body. The legacy of Draconic Blood that’s blessed his and many other Clans of Ebonspire for centuries may result in the Birth of a ‘Scaleborn’ - those destined for greatness and Sovereignty in his culture. The duality of that prestige comes with the haunting knowledge that only one may live and the others must die in order to follow tradition.',
      'One of Three Scaleborn this generation, Vornakir enrolled in Spark Oath to hone his abilities beyond comparison so that he may stand to wear the burden of the heavy crown destined to one of the three Scaleborn but instead he found himself at a crossroad he never anticipated…',
      'To eliminate his completion to further prestige the Vanori Bloodline as a servant of tradition and a puppet of the Elders who came before or to break the centuries of chains binding the wings of those destined to fly free as a harbinger of hope for the Scaleborn who come after.',
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
      'With a radiant personality wrapped in starlight and silk, Sol is equal parts illusionist, designer, empath, and unapologetic diva. As the creative heart of the group, every spell he casts feels curated and elegant. On the battlefield, Sol turns chaos into a show, bending perception, charming minds, and leaving enemies unsure whether they’re fighting him or each other.',
      'Behind his dazzling spectacle is the emotional center of the team. Sol is the one people go to when they need a shoulder to cry on, as he somehow always knows exactly what to say. His empathy lets him feel the emotions people try to hide, and he meets them halfway with warmth, honesty, and just the right amount of teasing.',
      'Sol feels deeply, and when someone he loves is threatened, his playful spark becomes a protective blaze. Fiercely loyal and just a little hot-headed, he never hesitates to deliver a perfectly worded verbal smackdown to anyone bold enough to cross his companions.',
      'Outside of battle, Sol’s ambitions shine just as brightly. He’s a visionary designer in the making, and dreams of becoming renowned for crafting pieces that enhance the hidden truths people hide beneath the surface: confidence waiting to bloom, strength buried under doubt, love unspoken. Fashion is just another form of magic to Sol, and like everything he does, it’s meant to transform the world in dazzling ways.'
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
      'Raised among the soaring cliffs and skybridges of the Ouranian Domain, a kingdom shaped by the ever-shifting breath of the sky, Aurelio was born into House Falconcrest. This royal line values freedom, empathy, and harmony with the natural world. Aurelio carries himself with a quiet steadiness that feels as constant as the wind. He has less of a commanding presence than his elder sister Sersphina or his twin brother Alwyn, but he’s grounded, someone who listens before he acts and understands before he speaks.',
      'In the field, Aurelio is precision personified. As a former Skyguard ranger, a branch of the Domain’s military, he moves with fluid efficiency, reading the terrain and enemy motion as easily as some read a map. Alongside his partner, peregrine falcon Pollux, and his blink dog Castor, he fights like a force of nature, outmaneuvering his opponents and striking them from angles they would never anticipate before disappearing just as quickly.',
      'Beneath his controlled exterior is a compassionate nature. Aurelio is quietly understanding and creates a sense of safety by actively listening to others rather than strictly voicing his opinion. He uses this to his advantage as a Skybond Mentor by guiding others in forming deep, trusting relationships with their animal companions.',
      'His journey hasn’t been without fear; the trauma he carries lingering in the rush of wings and the memory of the sky turning against him. Yet, he continues forward because he refuses to let his fears define him.',
      'Now traveling beyond his homeland, Aurelio seeks to understand the bonds between people, animals, and the environments they share. He believes freedom is something to be protected, and that true strength lies in coexistence. Whether mentoring others in their companion bonds or stepping into conflict when balance is threatened, Aurelio acts with conviction and unwavering care. ',
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
