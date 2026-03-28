# Tales of Echo — Planar Map

An interactive web-based planar map for a D&D campaign setting called "Tales of Echo." Users explore a cosmic starfield and click on glowing realm icons to read detailed lore about each plane of existence.

## Project Structure

```
DnD - Planar Map/
├── index.html                  # Entry point — loads all CSS/JS, contains the
│                               #   title overlay, realms container, and side tray markup
├── css/
│   └── main.css                # All styling: layout, title screen, realm icons
│                               #   (normal / large / ambient variants), side tray,
│                               #   animations (shimmer, pulse, breathe, fade)
├── js/
│   ├── starfield.js            # Canvas-rendered animated background (IIFE → `Starfield`)
│   │                           #   Layers: nebula clusters, distant stars, near stars,
│   │                           #   shooting stars. HiDPI-aware, repopulates on resize.
│   ├── realms-data.js          # `REALMS` array — all realm definitions live here.
│   │                           #   This is the ONLY file to edit when adding/changing realms.
│   ├── realms.js               # Realm icon rendering + side tray logic (IIFE → `Realms`)
│   └── main.js                 # App entry point — boots starfield, inits realms,
│                               #   handles title-screen dismiss → icon fade-in
└── assets/
    └── icons/                  # SVG icons for each realm
        ├── prime-realm.svg     # Celtic triquetra + sun (green/gold)
        ├── the-wilds.svg       # Thorny vines, crystals, portal (green)
        └── astral-realm.svg    # Nebula ribbons, orbiting dots (violet/gold)
```

## How It Works

1. Page loads → `starfield.js` renders an animated galactic canvas background.
2. Title screen ("Tales of Echo") fades in, with a "Click anywhere to enter" hint.
3. User clicks → title fades out → realm icons fade in over the starfield.
4. Clicking a realm icon opens a slide-in side tray (from the right) with the realm's name, arcana name, and full lore description.
5. Tray closes via the X button, clicking the backdrop, or pressing Escape.

## Adding a New Realm

Edit **`js/realms-data.js`** only. Add an object to the `REALMS` array:

```js
{
  id: 'my-realm',               // unique kebab-case slug
  name: 'My Realm',             // display name (shown on icon + tray header)
  arcana: 'Arcanus Nomen',      // arcane designation (shown below name in tray)
  subtitle: 'Optional Tagline', // (optional) shown below label on ambient icons
  icon: 'assets/icons/my-realm.svg',  // path to SVG icon
  glowColor: '#ff8800',         // CSS color for the pulsing glow effect
  position: { x: 30, y: 60 },  // placement as % of viewport (0–100)
  size: 'large',                // (optional) omit for normal, or:
                                //   'large'   → 2x size (used for The Wilds, center of map)
                                //   'ambient' → translucent/breathing (used for Astral Realm)
  description: [                // array of paragraph strings
    'First paragraph...',
    'Second paragraph...',
  ],
}
```

Then place the corresponding SVG icon in `assets/icons/`.

## Icon Size Variants

| `size` value | CSS class              | Purpose                               |
|-------------|------------------------|---------------------------------------|
| *(omitted)* | `.realm-icon`          | Standard icon (clamp 60–100px)        |
| `'large'`   | `.realm-icon--large`   | Double-size center icon (clamp 120–200px) |
| `'ambient'` | `.realm-icon--ambient` | Semi-transparent, breathing glow — visually represents "the background" (clamp 70–110px) |

## Current Realms

| Realm | ID | Position | Size | Glow Color |
|-------|----|----------|------|------------|
| The Wilds | `the-wilds` | 50, 50 (center) | `large` | `#30e080` (green) |
| Prime Realm | `prime-realm` | 45, 45 | normal | `#2aaa50` (green) |
| The Astral Realm | `astral-realm` | 8, 12 | `ambient` | `#a090d0` (violet) |

## Tech Stack

- Vanilla HTML / CSS / JS — no build tools, no frameworks
- Canvas 2D API for the starfield (with `devicePixelRatio` scaling)
- SVG icons with embedded animations (`animateTransform` for rotating elements)
- CSS `clamp()` for responsive sizing, `backdrop-filter` for tray blur
- All scripts are IIFEs exposing a single global: `Starfield`, `REALMS`, `Realms`

## Script Load Order (matters)

```html
<script src="js/starfield.js"></script>    <!-- defines Starfield -->
<script src="js/realms-data.js"></script>  <!-- defines REALMS array -->
<script src="js/realms.js"></script>       <!-- defines Realms, reads REALMS -->
<script src="js/main.js"></script>         <!-- boots everything -->
```

## Design Notes

- The starfield nebulae use composite blob clusters (not single radial gradients) so they look organic at any viewport size rather than appearing as obvious circles.
- Nebula blob sizes scale relative to `Math.min(viewportWidth, viewportHeight)` for consistent appearance across screen sizes.
- The title overlay dismissal works by setting `animation: none` on the `.dismissed` class — this is necessary because CSS `animation` with `fill-mode: forwards` takes precedence over normal property values and even `!important`.
- The side tray uses `pointer-events: none` when closed so it doesn't block clicks on realm icons behind it, toggling to `auto` when `.open` is added.
