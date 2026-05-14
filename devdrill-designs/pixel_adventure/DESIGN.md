---
name: Pixel Adventure
colors:
  surface: '#19101c'
  surface-dim: '#19101c'
  surface-bright: '#403643'
  surface-container-lowest: '#130b16'
  surface-container-low: '#211824'
  surface-container: '#261c28'
  surface-container-high: '#302733'
  surface-container-highest: '#3c313e'
  on-surface: '#eeddee'
  on-surface-variant: '#d4c0d7'
  inverse-surface: '#eeddee'
  inverse-on-surface: '#372d3a'
  outline: '#9d8ba0'
  outline-variant: '#514255'
  surface-tint: '#ecb2ff'
  primary: '#ecb2ff'
  on-primary: '#520071'
  primary-container: '#bd00ff'
  on-primary-container: '#ffffff'
  inverse-primary: '#9900cf'
  secondary: '#ecffe3'
  on-secondary: '#003907'
  secondary-container: '#13ff43'
  on-secondary-container: '#007117'
  tertiary: '#ffb1c8'
  on-tertiary: '#650033'
  tertiary-container: '#e5007b'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#ecb2ff'
  on-primary-fixed: '#320047'
  on-primary-fixed-variant: '#74009f'
  secondary-fixed: '#72ff70'
  secondary-fixed-dim: '#00e639'
  on-secondary-fixed: '#002203'
  on-secondary-fixed-variant: '#00530e'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c8'
  on-tertiary-fixed: '#3e001d'
  on-tertiary-fixed-variant: '#8e004a'
  background: '#19101c'
  on-background: '#eeddee'
  surface-variant: '#3c313e'
typography:
  display-hero:
    fontFamily: Anybody
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  stat-value:
    fontFamily: Space Mono
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  container-max: 1200px
---

## Brand & Style

The design system is built on a "Pixel Adventure" narrative, blending the charm of 8-bit arcade aesthetics with the precision of modern developer tools. It targets developers who grew up with game consoles or appreciate the lo-fi aesthetic of a terminal, but demand the usability of modern SaaS.

The visual style is a hybrid of **Retro-Vaporwave** and **Brutalism**. It utilizes high-contrast interfaces, hard-edged shadows, and vibrant neon accents against deep violet backdrops. The goal is to make every quiz feel like a dungeon crawl and every bug fix feel like a boss battle. The emotional response should be one of "gamified flow"—where technical mastery is rewarded with visual dopamine.

## Colors

The color palette is dominated by "Void Purple" backgrounds to reduce eye strain during late-night coding sessions. 

- **Primary & Secondary:** A high-vibration purple serves as the brand anchor, while "Terminal Green" is reserved strictly for success states, code syntax highlights, and player stats.
- **Action Colors:** Primary CTAs use a "Power-Up Gradient" (Pink to Orange) to stand out against the dark UI.
- **Semantic Logic:** Use Terminal Green for "Level Up" or "Correct" states. Use Error Red for "Syntax Error" or "Game Over" states. 
- **Dashboard Mode:** Dashboards should utilize a slightly darker "Deep Space" variant (#120621) for the main canvas to allow cards and stats to pop using the standard surface purple.

## Typography

The typography strategy leverages **Anybody** for headlines—a variable font that mimics the blocky, expansive feel of retro game titles while maintaining modern readability. 

**JetBrains Mono** is the workhorse for all body text and quiz questions, providing a familiar environment for developers. **Space Mono** is used for metadata, "HUD" (Heads-Up Display) elements, and labels to reinforce the technical/terminal aesthetic. 

- **Styling Note:** Headings should occasionally use a "glitch" text effect or a subtle 2px offset drop shadow in a contrasting neon color for high-level "Boss" screens.

## Layout & Spacing

This design system uses a strict **8px grid system** to mirror the 8-bit theme. All margins and paddings must be multiples of 8 to ensure visual alignment that feels "pixel-perfect."

- **Desktop:** 12-column fluid grid with 24px gutters. Content is housed in "Block Containers."
- **Mobile:** 4-column grid with 16px margins.
- **Spacing Rhythm:** Use tight spacing (8-16px) within components to mimic dense game HUDs, but generous outer spacing (48px+) between major sections to maintain modern clarity.

## Elevation & Depth

Depth is not communicated through realistic blur-shadows, but through **Hard Block Shadows** and **Offset Strokes**.

- **Z-Index 1 (Surface):** The base background.
- **Z-Index 2 (Cards/Tiles):** Surface color with a 1px solid border (Purple-Light) and a 4px or 8px solid black or dark purple block shadow offset to the bottom-right.
- **Z-Index 3 (Active Elements):** Buttons and active cards feature a "Flicker Highlight"—a dual-border effect using a neon green or pink stroke that appears to pulse via a subtle CSS animation.
- **Interactive Depth:** When a button is pressed, the block shadow disappears, and the element translates (moves) 4px down and 4px right to simulate a physical mechanical switch.

## Shapes

The shape language is "Softly Pixelated." While a true 8-bit style uses sharp corners, this design system uses **Rounded Level 2 (0.5rem)** for containers to ensure the UI feels premium and modern. 

- **Buttons:** Rectangular with small corner radii to mimic 90s console controllers.
- **Icons:** Must be strictly pixel-art style, set within square containers.
- **Progress Bars:** Flat, non-rounded ends with visible "segment blocks" to show progress in discrete steps rather than a smooth fill.

## Components

- **3D Pixel Buttons:** Primary buttons use the Pink-to-Orange gradient. They must have a 2px solid border and a heavy 6px block shadow. On hover, the shadow glows; on click, the button "depresses" by shifting its position.
- **Terminal Stat Cards:** Rounded cards with a dark background and a flickering Terminal Green border. These display user XP, streaks, and rank.
- **Quiz Input Fields:** Monospaced input with a "Command Line" prefix (e.g., `> `). The cursor should be a blinking block.
- **Avatar Sprites:** User profiles are displayed as 64x64 pixel-art characters. Frames for these avatars change color based on the user's "Level" (Bronze, Silver, Gold, Neon).
- **Medal Sprites:** Achievement icons are blocky, 8-bit style sprites with a high-gloss pixel highlight.
- **Notification Toasts:** Designed to look like "Achievement Unlocked" banners from classic consoles, sliding in from the top-center with a 2-tone "pixel" border.