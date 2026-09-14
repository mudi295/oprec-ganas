---
name: Midnight Apex
colors:
  surface: '#031521'
  surface-dim: '#031521'
  surface-bright: '#2a3b48'
  surface-container-lowest: '#00101b'
  surface-container-low: '#0c1d29'
  surface-container: '#10212d'
  surface-container-high: '#1b2c38'
  surface-container-highest: '#263743'
  on-surface: '#d3e5f6'
  on-surface-variant: '#c5c6ce'
  inverse-surface: '#d3e5f6'
  inverse-on-surface: '#21323f'
  outline: '#8e9098'
  outline-variant: '#44474d'
  surface-tint: '#b6c7e8'
  primary: '#b6c7e8'
  on-primary: '#20314b'
  primary-container: '#071a33'
  on-primary-container: '#7383a1'
  inverse-primary: '#4e5f7b'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#3de273'
  on-tertiary: '#003915'
  tertiary-container: '#001f08'
  on-tertiary-container: '#009644'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b6c7e8'
  on-primary-fixed: '#091c35'
  on-primary-fixed-variant: '#374762'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#66ff8e'
  tertiary-fixed-dim: '#3de273'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005322'
  background: '#031521'
  on-background: '#d3e5f6'
  surface-variant: '#263743'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system delivers an elite, cinematic, and institutional digital presence engineered for the GANAS Nusa Putra Open Recruitment 2026–2027 cycle. Designed to attract high-caliber student leaders and innovators, the identity merges academic prestige with progressive, high-tech modernity.

The visual style synthesizes **Modern High-Contrast Architecture** with **Subtle Luminous Glassmorphism**. Dark navy canvas layers create deep atmospheric presence, punctuated by high-clarity ice-white text, ultra-precise hairline borders (1px tinted at low opacities), and controlled cyan/bright blue radial highlights. The resulting experience feels monumental, exclusive, and rigorous—inducing pride and ambition in prospective applicants.

## Colors
The palette is rooted in an oceanic hierarchy of midnight blue tones, providing cinematic depth and high visual contrast.

- **Deep Navy Blue (`#071A33`)**: The absolute background foundation. Imparts gravity, stability, and high-end executive authority.
- **Dark Blue (`#0B2D5C`)**: Surface layer 1. Used for primary elevated cards, hero backdrop panels, and header navigation blocks.
- **Royal Blue (`#164E86`)**: Surface layer 2 and interactive structural borders. Establishes depth for form fields, active cards, and framing dividers.
- **Bright Blue (`#3B82F6`)**: Primary accent and brand kinetic energy. Deployed for primary UI actions, interactive focus rings, active step trackers, and ambient luminescence.
- **Light Blue (`#DCEEFF`)**: Secondary text, supporting labels, icons, and subtle badge backgrounds. Softens eye fatigue while preserving contrast against deep backdrops.
- **Ice White (`#FFFFFF`)**: Primary headline text, critical data readouts, and contrast-critical icons.
- **Form Light Backdrop (`#F5FAFF`)**: Dedicated inverted utility surface for high-legibility application sheets, printable summaries, and administrative breakout modals.
- **WhatsApp Green (`#25D366`)**: A strictly quarantined functional accent used exclusively for the final recruitment milestone CTA (submission confirmation to official recruitment coordinator channels). It must never be applied to general buttons or decorative elements.

## Typography
The system employs a dual-typeface strategy pairing the contemporary authority of **Plus Jakarta Sans** for headlines, stat callouts, and interactive labels with the precision and balance of **Inter** for long-form explanatory copy and data entry forms.

- All display and headline tracking is tightened systematically (`-0.01em` to `-0.03em`) to deliver a sharp, editorial stance.
- Uppercase tracking (`label-caps`) is intentionally expanded (`0.1em`) to frame recruitment stages, dates, cohort tags, and metadata headers.
- Font rendering utilizes subpixel anti-aliasing on dark canvases to preserve absolute glyph crispness.

## Layout & Spacing
The layout relies on a disciplined 12-column responsive fluid grid pinned to a maximum content width of `1280px`.

- **Desktop (>= 1024px)**: 12 columns with `1.5rem` gutters and `3rem` canvas margins. Structural side rails frame multi-step recruitment progress.
- **Tablet (768px – 1023px)**: 8 columns with `1.25rem` gutters and `2rem` margins. Complex dual-pane recruitment forms fold into stacked linear modules.
- **Mobile (< 768px)**: 4 columns with `1rem` gutters and `1.25rem` screen margins. Full-width touch targets with sticky bottom action clusters.

The vertical rhythm adheres strictly to an 8-point structural system, maintaining generous macro-whitespace around major campaign statements while keeping form field clusters compact and focused.

## Elevation & Depth
Depth is constructed through ambient luminescence, crisp surface boundaries, and tonal layering instead of traditional fuzzy drop shadows.

- **Surface Level 0 (Base)**: `#071A33` solid ground.
- **Surface Level 1 (Card/Container)**: `#0B2D5C` at 85% opacity with `backdrop-filter: blur(16px)` and a 1px border of `rgba(220, 238, 255, 0.12)`.
- **Surface Level 2 (Floating/Modal/Popover)**: `#164E86` at 90% opacity with `backdrop-filter: blur(24px)`, a 1px border of `rgba(59, 130, 246, 0.4)`, and a sharp directional shadow: `0 12px 32px -4px rgba(7, 26, 51, 0.85), 0 0 0 1px rgba(59, 130, 246, 0.2)`.
- **Atmospheric Glows**: Radial lighting accents (`radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 70%)`) subtly illuminate card corners and the primary page header to generate a cinematic, stage-lit presence.

## Shapes
The system applies a disciplined `Soft` (`0.25rem` / `4px` baseline) corner philosophy to communicate institutional structure, architectural rigor, and engineering-level precision.

- Form fields, badges, and small control elements sit at `0.25rem` (4px).
- Content cards, dashboard panels, and modal shells utilize `rounded-lg` (`0.5rem` / `8px`).
- Hero banners and full-width highlight wrappers cap at `rounded-xl` (`0.75rem` / `12px`).
- Complete pill borders (`9999px`) are prohibited except for standalone numerical milestone indicators and micro status tags.

## Components

### Buttons
- **Primary Action**: Background of `#3B82F6`, text in `#FFFFFF`, with 1px border in `rgba(255, 255, 255, 0.2)`. On hover, color transitions to a luminous `#2563EB` paired with an outer glow: `0 0 20px rgba(59, 130, 246, 0.45)`.
- **Secondary Action**: Background of `rgba(11, 45, 92, 0.6)`, text in `#DCEEFF`, with a crisp 1px border in `#164E86`.
- **WhatsApp Final Step CTA**: Reserved strictly for final confirmation routing. Background `#25D366`, text `#071A33` (bold), featuring a subtle ambient pulse glow `0 0 16px rgba(37, 211, 102, 0.35)`.

### Input Fields & Controls
- Form controls rest on a dark fill (`#0B2D5C`) framed by a 1px border in `#164E86`. Text inputs use `#FFFFFF` for entry and `#DCEEFF` at 60% opacity for placeholder copy.
- Active/Focus State: 1px border changes to `#3B82F6` accompanied by an immediate `0 0 0 3px rgba(59, 130, 246, 0.25)` focus ring.
- Checkboxes and Radio buttons share the `#0B2D5C` base; selected states snap to `#3B82F6` with sharp, high-contrast check indicators in `#FFFFFF`.

### Cards & Division Lists
- Cards feature 1px perimeter framing in `rgba(220, 238, 255, 0.1)`. Interactive cards lift 2px along the Y-axis on hover, shifting their border highlight to `#3B82F6`.
- Division selection list items incorporate an integrated left accent border (3px solid `#3B82F6`) when active, signaling applicant department selection with crystalline clarity.

### Step Indicators & Badges
- Recruitment process bars use segmented hairline tracks. Completed nodes illuminate in `#3B82F6`, active nodes pulse with a concentric dual ring, and upcoming steps rest in muted `#164E86`.
- Cohort and track badges (`label-caps`) utilize a dark blue base with `#DCEEFF` text and a precise `#164E86` border.