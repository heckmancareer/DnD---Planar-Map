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
      'The Wilds are the realm that no one can pretend does not exist. From the marble halls of emperors to the mud-floored taverns of frontier towns, every soul in Terravus Primordia has grown up with the Wilds as a fact of life \u2014 as constant and undeniable as weather, as trade, as death itself. It is the great untamable neighbor, a plane of infinite and restless wilderness that presses against the skin of the Material Plane like something alive and breathing, leaking wonder and ruin through every crack.',

      'Feralis Mutabundis is a world in perpetual reinvention. Its landscapes do not hold still. Forests of crystalline trees give way overnight to vast salt deserts; mountain ranges fold into themselves and reemerge as flooded cavern networks stretching beyond sight. Entire ecosystems bloom, thrive, and dissolve in cycles that obey no calendar anyone has ever deciphered. The terrain is a living mosaic \u2014 whimsical, magical, and deeply dangerous \u2014 riddled with dungeons that seem to grow like coral from the bones of the land itself, each one filled with creatures, traps, and treasures that have no business existing and yet stubbornly do.',

      'What makes the Wilds inescapable is not merely their strangeness but their gravity. Gateways between the Wilds and the Prime Realm are scattered across the world \u2014 hidden in ancient groves, sealed beneath fortress foundations, whispered about in dockside rumors. Some are guarded by armies, others by riddles, others by nothing at all. Each one is a door to possible fortune or probable death, and the economies of entire nations have been built on what comes back through them: rare alchemical reagents, enchanted materials, relics of lost civilizations that flourished and vanished within the Wilds\u2019 churning geography. Wars have been fought over a single gateway. Dynasties have risen on the profits of Wilds-trade and collapsed when their gateway shifted or sealed.',

      'No one conquers Feralis Mutabundis. It has been explored for millennia and remains as unknown as the day the first mortal stumbled through a gateway and returned wide-eyed, clutching something impossible. It is the great gamble, the evergreen frontier \u2014 and every adventurer who has ever lived has heard its call.',
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
      'The Prime Realm is the anchor of all existence \u2014 the dense, luminous middle-world where matter and meaning are woven into a single fabric. Neither purely spiritual nor wholly elemental, it occupies the central axis of the cosmic order, held in tension between the higher planes of divine radiance and the lower depths of entropy and shadow. It is the only realm where all forces converge without annihilating one another, creating the conditions for something unprecedented: mortal life capable of asking why.',

      'This is the habitat of the Prime Species \u2014 the thinking, striving, dreaming creatures whose defining trait is not power but hunger for purpose. Unlike celestials, who are born already knowing, or fiends, who are shaped entirely by impulse, the Prime Species arrive in Terravus Primordia empty-handed and uncertain. They must build meaning from raw experience: from tilling soil, burying the dead, naming the stars, and telling stories around fires that push back the dark. The realm itself seems designed for this labor \u2014 seasons turn to teach impermanence, night follows day to teach faith, and the land is generous enough to sustain life but harsh enough to demand cooperation.',

      'Scholars of the planes sometimes call Terravus Primordia \u201cthe Crucible,\u201d because it is not a paradise or a punishment \u2014 it is a test. Every great hero, every world-shaking prophecy, every campaign of consequence begins here, in the dirt and daylight, where fragile beings choose what matters and then fight for it.',
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
      'The Astral Realm is not a place so much as it is the space between places \u2014 an endless, shimmering expanse of silvered void and drifting color that cradles every other realm in its boundless depths. Look up from any world, peer past the veil of any plane, and eventually you will find it: the Cosmic Sea, silent and vast beyond mortal reckoning, its currents woven from raw thought, memory, and the residue of divine will. There is no ground here, no sky, no horizon \u2014 only an eternal luminous twilight streaked with ribbons of violet, gold, and deep indigo, where distant realms hang like lanterns suspended in an ocean of nothing.',

      'Everything that exists floats within Astralis Infinitum. The great Majorus Realms \u2014 anchored worlds like Terravus Primordia \u2014 drift through it like continents in a depthless sea, massive and gravitationally sovereign, each generating their own laws of nature. The Outer Realms, domains of gods, ideals, and cosmic forces, orbit at incomprehensible distances like archipelagos of pure concept given form. And scattered between them all, the countless Domain Realms \u2014 smaller pockets of shaped reality, personal kingdoms, pocket dimensions, and drifting fragments of forgotten creations \u2014 tumble slowly through the silver tide like seeds carried on an infinite wind.',

      'Travel here is governed not by distance but by intention. A traveler moves through the Cosmic Sea by thinking of their destination, their speed determined by the clarity and force of their will. This makes the Astral Realm both the most accessible and the most dangerous of all the planes \u2014 for a mind that wanders may drift forever, and the void between realms is populated by things older than gods: psychic predators, ancient constructs left behind by dead civilizations, and the petrified husks of deities whose worshippers forgot them, their stone corpses tumbling silently through eternity.',

      'The Cosmic Sea does not create. It does not destroy. It holds. It is the canvas on which all of existence is painted, the silence between every spoken word of creation. To enter it is to stand at the threshold of everywhere and nowhere simultaneously \u2014 and to understand, with terrifying clarity, just how small even the mightiest realm truly is.',
    ],
  },
];
