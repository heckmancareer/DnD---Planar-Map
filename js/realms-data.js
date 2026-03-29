/**
 * realms-data.js — All realm definitions live here.
 *
 * Each realm has:
 *   id          – unique slug
 *   name        – display name
 *   arcana      – arcane designation
 *   icon        – path to SVG icon
 *   glowColor   – CSS colour used for the pulsing glow ring
 *   position    – { x, y } in percentage of viewport (0-100)
 *   size        – (optional) 'large' for double-size, 'ambient' for background-style
 *   description – array of paragraphs (strings)
 */

const REALMS = [
  {
    id: 'the-wilds',
    name: 'The Wilds',
    arcana: 'Feralis Mutabundis',
    icon: 'assets/icons/the-wilds.svg',
    glowColor: '#30e080',
    position: { x: 50, y: 50 },
    size: 'large',
    description: [
      'The Wilds are the realm that no one can pretend does not exist. From the marble halls of emperors to the mud-floored taverns of frontier towns, every soul in Terravus Primordia has grown up with the Wilds as a fact of life. As constant and undeniable as weather, as trade, as death itself. It is the great untamable neighbor, a plane of infinite and restless wilderness that presses against the skin of the Material Plane like something alive and breathing, leaking wonder and ruin through every crack.',

      'Feralis Mutabundis is a world in perpetual reinvention. Its landscapes do not hold still. Forests of crystalline trees give way overnight to vast salt deserts; mountain ranges fold into themselves and reemerge as flooded cavern networks stretching beyond sight. Entire ecosystems bloom, thrive, and dissolve in cycles that obey no calendar anyone has ever deciphered. The terrain is a living mosaic, whimsical, magical, and deeply dangerous, riddled with dungeons, each one filled with creatures, traps, and treasures that have no business existing and yet stubbornly do.',

      'What makes the Wilds inescapable is not merely their strangeness but their gravity. Gateways crack through at random intervals, and kingdoms have spilled blood trying to control them in the name of harvesting Ecto for commerce.',

      'The Wilds are a realm of hostility and beauty. To navigate, you must accept it will alwats have the upper hand. To explore, you must be willing to lose yourself. To survive, you must be ready to adapt to anything. Sometimes, all you can do is run.',
    ],
  },
  {
    id: 'prime-realm',
    name: 'Prime Realm',
    arcana: 'Terravus Primordia',
    icon: 'assets/icons/prime-realm.svg',
    glowColor: '#2aaa50',
    position: { x: 45, y: 45 },
    description: [
      'The Prime Realm is the anchor of all mortal existence. Neither purely spiritual nor wholly elemental, it occupies the central axis of the cosmic order, held in tension between the higher planes of divine radiance and the lower depths of entropy and shadow. It is the only realm where all forces converge without annihilating one another, creating the conditions for something unprecedented: mortal life capable of asking why.',

      'This is the habitat of the Prime Species, the thinking, striving, dreaming creatures whose defining trait is not power but hunger for purpose. Unlike celestials, who are born already knowing, or fiends, who are shaped entirely by impulse, the Prime Species arrive in Terravus Primordia empty-handed and uncertain. They must build meaning from raw experience: from tilling soil, burying the dead, naming the stars, and telling stories around fires that push back the dark. The realm itself seems designed for this labor. Seasons turn to teach impermanence, night follows day to teach faith, and the land is generous enough to sustain life but harsh enough to demand cooperation.',

      'A world that asks with both ferocity and tenderness, \' Who are you? What will you do? Why does it matter? \'',
    ],
  },
  {
    id: 'astral-realm',
    name: 'The Astral Realm',
    arcana: 'Astralis Infinitum',
    subtitle: 'The Cosmic Sea',
    icon: 'assets/icons/astral-realm.svg',
    glowColor: '#a090d0',
    position: { x: 8, y: 12 },
    size: 'ambient',
    description: [
      'The Astral Realm is not a place so much as it is the space between places. An endless, shimmering expanse of silvered void and drifting color that cradles every other realm in its boundless depths. Look up from any world, peer past the veil of any plane, and eventually you will find it: the Cosmic Sea, silent and vast beyond mortal reckoning, its currents woven from primordial residue.. There is no ground here, no sky, no horizon. Only an eternal luminous twilight streaked with ribbons of violet, gold, and deep indigo, where distant realms hang in nothing.',

      'Everything that exists floats within Astralis Infinitum. The great Majorus Realms: anchored worlds like Terravus Primordia drift through it like continents, massive and anchored to The Wilds, each generating their own laws of nature. The Outer Realms, enigmatic worlds of unknown purpose, function, and orbit. And scattered between them all, the countless Domain Realms, smaller pockets of shaped reality, personal kingdoms, pocket dimensions, and drifting fragments of forgotten creations.',

      'Traveling between realms, there is an endless void of nothingness, but it is not empty. The Astral Realm is a sea of raw potential, where the building blocks of reality swirl in chaotic eddies and the echoes of creation reverberate. It is a realm of paradoxes: timeless yet ever-changing, silent yet resonant, infinite yet intimate.',

      'The Cosmic Sea does not create. It does not destroy. It holds. It is the canvas on which all of existence is painted. To enter it is to stand at the threshold of everywhere and nowhere simultaneously and to understand, with terrifying clarity, just how small you are.',
    ],
  },
];
