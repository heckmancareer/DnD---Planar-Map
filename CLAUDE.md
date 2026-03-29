# Tales of Echo — D&D Companion Site

An interactive web-based companion site for a D&D campaign setting called "Tales of Echo." Built with a persistent animated cosmic starfield background, a title landing screen, a bottom navigation bar for switching between sections, and per-section content that cross-fades on navigation.

## Project Structure

```
DnD - Planar Map/
├── index.html                    # Entry point — loads all CSS/JS, markup for all sections,
│                                 #   title overlay, realm tray, and nav bar
├── css/
│   └── main.css                  # All styling: layout, title screen, realm icons
│                                 #   (normal / large / ambient variants), campaign cards,
│                                 #   side tray, nav bar, animations
├── js/
│   ├── starfield.js              # Canvas-rendered animated background (IIFE → `Starfield`)
│   │                             #   Layers: nebula clusters, distant stars, near stars,
│   │                             #   shooting stars. HiDPI-aware, repopulates on resize.
│   ├── realms-data.js            # `REALMS` array — all realm definitions live here.
│   │                             #   This is the ONLY file to edit when adding/changing realms.
│   ├── realms.js                 # Realm icon rendering + side tray logic (IIFE → `Realms`)
│   ├── campaigns-data.js         # `CAMPAIGNS` array — all campaign definitions live here.
│   │                             #   This is the ONLY file to edit when adding/changing campaigns.
│   ├── campaigns.js              # Campaign card rendering (IIFE → `Campaigns`)
│   ├── nav.js                    # Section switching + nav bar logic (IIFE → `Nav`)
│   └── main.js                   # App entry point — boots all modules, handles title dismiss
└── assets/
    └── icons/                    # SVG icons for realms and campaigns
        ├── prime-realm.svg       # Celtic triquetra + sun (green/gold)
        ├── the-wilds.svg         # Thorny vines, crystals, portal (green)
        ├── astral-realm.svg      # Nebula ribbons, orbiting dots (violet/gold)
        ├── spark-saga.svg        # Arcane book + lightning bolt (red)
        └── celstate-saga.svg     # Dragon-crested shield with wings (blue)
```

## How It Works

1. Page loads → `starfield.js` renders an animated galactic canvas background (always visible).
2. Title screen ("Tales of Echo") fades in in Cinzel Decorative font, glowing gold.
3. User clicks → title fades out → bottom nav slides up → initial section (Realm Map) fades in.
4. Nav buttons cross-fade between sections (exit 0.4s, enter 0.7s overlap).
5. In Realm Map: clicking a realm icon opens a slide-in side tray with lore.
6. Tray closes via the X button, clicking the backdrop, or pressing Escape.

## Sections

| Section | ID | Nav Label | Nav Icon |
|---------|----|-----------|----------|
| Realm Map | `realm-map` | Realm Map | ✦ |
| Campaigns | `campaigns` | Campaigns | ⚔ |

### Adding a New Section
1. Add a `<section id="section-{id}" class="site-section" data-section="{id}">` inside `#sections-host` in `index.html`.
2. Add a `<button class="nav-btn" data-target="{id}">` inside `.nav-list` in `index.html`.
3. Add the section's script tags to `index.html` (before `nav.js`).
4. Create data and module JS files following the existing IIFE pattern.
5. Add section-specific CSS to `main.css`.

## Realm Map Section

### Adding a New Realm

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

### Icon Size Variants

| `size` value | CSS class              | Purpose                               |
|-------------|------------------------|---------------------------------------|
| *(omitted)* | `.realm-icon`          | Standard icon (clamp 60–100px)        |
| `'large'`   | `.realm-icon--large`   | Double-size center icon (clamp 120–200px) |
| `'ambient'` | `.realm-icon--ambient` | Semi-transparent, breathing glow (clamp 70–110px) |

### Current Realms

| Realm | ID | Position | Size | Glow Color |
|-------|----|----------|------|------------|
| The Wilds | `the-wilds` | 50, 50 (center) | `large` | `#30e080` (green) |
| Prime Realm | `prime-realm` | 45, 45 | normal | `#2aaa50` (green) |
| The Astral Realm | `astral-realm` | 8, 12 | `ambient` | `#a090d0` (violet) |

## Campaigns Section

### Adding a New Campaign

Edit **`js/campaigns-data.js`** only. Add an object to the `CAMPAIGNS` array:

```js
{
  id: 'my-campaign',            // unique kebab-case slug
  name: 'My Campaign',          // display name (shown on card title)
  subtitle: 'Tagline here',     // shown below title on the card
  icon: 'assets/icons/my-campaign.svg',  // path to SVG icon
  glowColor: '#ff8800',         // CSS color for the pulsing glow effect
}
```

Then place the corresponding SVG icon in `assets/icons/`.

### Current Campaigns

| Campaign | ID | Glow Color |
|----------|----|------------|
| The Spark Saga | `spark-saga` | `#e04030` (red) |
| The Celstate Saga | `celstate-saga` | `#4080e0` (blue) |

## Navigation System

`js/nav.js` exposes `Nav` with:
- `Nav.init()` — registers nav button click handlers
- `Nav.showNav()` — slides the nav bar up (called on overlay dismiss)
- `Nav.activateInitialSection(id)` — fades in the first section without a transition lock
- `Nav.switchSection(id)` — cross-fades between sections with a transition lock (700ms)

Section transitions: outgoing gets `.section-exiting` (0.4s fade-out), incoming gets `.section-active` (0.7s fade-in) simultaneously — they overlap so there is always visible content.

## Tech Stack

- Vanilla HTML / CSS / JS — no build tools, no frameworks
- Canvas 2D API for the starfield (with `devicePixelRatio` scaling)
- SVG icons with embedded animations (`animateTransform` for rotating elements)
- CSS `clamp()` for responsive sizing, `backdrop-filter` for glassmorphism effects
- Google Fonts: Cinzel Decorative (title only)
- All scripts are IIFEs exposing a single global: `Starfield`, `REALMS`, `Realms`, `CAMPAIGNS`, `Campaigns`, `Nav`

## Script Load Order (matters)

```html
<script src="js/starfield.js"></script>       <!-- defines Starfield -->
<script src="js/realms-data.js"></script>     <!-- defines REALMS array -->
<script src="js/realms.js"></script>          <!-- defines Realms, reads REALMS -->
<script src="js/campaigns-data.js"></script>  <!-- defines CAMPAIGNS array -->
<script src="js/campaigns.js"></script>       <!-- defines Campaigns, reads CAMPAIGNS -->
<script src="js/nav.js"></script>             <!-- defines Nav -->
<script src="js/main.js"></script>            <!-- boots everything -->
```

## Z-Index Layering

```
z-index   Element
────────  ──────────────────────────────────────────────
  0       #starfield (canvas)
  2       #sections-host → .site-section → section content
  5       #site-nav
 10       #overlay
 20       #realm-tray (body-level, outside #sections-host)
```

`#realm-tray` lives outside `#sections-host` to avoid CSS stacking context issues: elements with `opacity < 1` during a transition create a new stacking context, which would scope the tray's `z-index: 20` to its section rather than the document.

## Design Notes

- The starfield nebulae use composite blob clusters so they look organic at any viewport size.
- Nebula blob sizes scale relative to `Math.min(viewportWidth, viewportHeight)`.
- The title overlay dismissal uses `animation: none` on `.dismissed` — necessary because CSS `animation` with `fill-mode: forwards` takes precedence over normal property values.
- The nav bar starts off-screen (`translateY(100%)` + `opacity: 0`) and slides up only after the overlay is dismissed, so it never shows during the title screen.
- Campaign cards use `color-mix(in srgb, var(--glow-color) 20%, transparent)` for the hover box-shadow, giving each card a unique colored aura on hover.
