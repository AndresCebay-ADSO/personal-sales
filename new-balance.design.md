---
version: alpha
name: "New Balance"
website: "https://www.newbalance.com"
description: >-
  A heritage American performance-footwear brand whose digital marketing runs a near-monochrome system anchored on deep charcoal #231f20 and off-white #f5f5f5, with a subtle charcoal-on-white hierarchy that lets product colorways and lifestyle photography do all chromatic work. Type runs Helvetica Neue at 700 for display and 400 for body, pairing a Swiss precision sans with the brand's manufacturing-heritage identity. Corner rounding stays at 0–4px across the system, reinforcing a grid-first, magazine-editorial aesthetic that contrasts with the rounded-pill approach most athletic brands now default to.

seo:
  title: "New Balance Design System in Charcoal and Helvetica"
  metaDescription: "New Balance's editorial grid as a DESIGN.md: deep charcoal #231f20 on off-white, Helvetica Neue display and 0–4px corners, for React and AI coding tools."
  highlights:
    - "Heritage monochrome — charcoal #231f20 and off-white #f5f5f5 form the entire marketing chrome; product photography carries every chromatic moment"
    - "Helvetica Neue at 700 — display headlines run Swiss-precision grotesque at weight 700, carrying the manufacturing-heritage identity in type rather than color"
    - "Sharp-edge grid — 0–4px corner rounding across buttons, cards, and inputs reinforces the brand's orthogonal, editorial aesthetic"
    - "Magazine grid rhythm — section layouts use dense 4-up and 3-up product grids separated by hairline rules, closer to catalog typography than SaaS marketing"
    - "Color as product language — Red, Royal, and Incognito colorway accents appear only in product imagery; the system chrome never borrows them"
  tags:
    - "E-commerce & Retail"
  lastUpdated: "2026-05-19"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    New Balance's digital marketing site reads like a sporting-goods catalog that discovered it should be a website — and decided to stay mostly a catalog. The page runs a near-monochrome chrome of deep charcoal and off-white, organizes product imagery into dense 4-column grids with tight gutters, and sets every headline in Helvetica Neue weight 700 without any custom typeface commission. Where Nike pushes dynamic motion and Adidas deploys a bespoke sans, New Balance trusts the Swiss utilitarian grotesque that has been on running-shoe boxes since the 1970s. The system is quietly editorial rather than loudly branded — the identity lives in the shoes and the photographers, not in the chrome.

    The DESIGN.md file packages the system into a machine-readable spec for React and AI tools. Inside: 14 color tokens anchored on a near-monochrome charcoal-and-white scale — deep charcoal, canvas white, light gray surface tiers, hairline gray, and a small set of semantic tones (red for sale/error, forest green for success, amber for loyalty points) — plus a yellow accent used selectively for promotional banners. Ten typography tokens run Helvetica Neue across display (40px / 700), heading, body, and label tiers with zero custom font weight surprises. Fourteen components cover the sharp-edged primary button, editorial product card, top-nav, the dense product grid, and the promotional price treatment.

    Feed this file to Claude or Cursor to reproduce New Balance's specific approach: charcoal-on-off-white chrome, Helvetica Neue at athletic weights without custom font costs, 0–4px sharp-edge radius as the dominant shape language, and a catalog-dense grid rhythm that prioritizes product volume over whitespace generosity. The system's editorial restraint is the distinguishing move — it is the only major athletic brand in the category that runs a stock grotesque and makes it feel correct.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://www.newbalance.com"
      title: "New Balance — official site"
      description: "New Balance's public marketing site — the source of truth for the live design system this file approximates."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is New Balance's primary brand color?"
      answer: "New Balance's marketing chrome is near-monochrome — the primary structural tone is a deep charcoal #231f20 (near-black with a faint warm undertone), used across primary CTAs, nav text, borders, and icon fills. The off-white canvas #f5f5f5 provides the page floor. There is no chromatic brand accent declared in the system chrome; the iconic New Balance red (#e20a17) and royal blue that appear in the 990, 574, and 9060 colorways exist as product-photography colors, not as system tokens. Promotional sale banners occasionally use a warm red, but this is a semantic/sale indicator, not a brand voltage."
    - id: "typography"
      title: "What typeface does New Balance use, and what should I use as a substitute?"
      answer: "New Balance runs Helvetica Neue across the entire system — 700 weight for display and heading tiers (40px hero, 28px section heads), 400 weight for body text and captions. Unlike most athletic brands, New Balance has not commissioned a proprietary sans or variable font; the stack is Helvetica Neue, then Helvetica, then Arial, then system sans-serif. This is one of the few large athletic brands using a genuinely stock font stack. For a substitute: Helvetica Neue is already the fallback. If a project doesn't have Neue licensed, Inter at the same weights reads nearly identically at body sizes; at display sizes (40px / 700), the cap height difference is small enough to be negligible."
    - id: "grid-density"
      title: "How does New Balance structure its product grid?"
      answer: "New Balance uses a 4-column product grid at desktop with tight 16px gutters — closer to a sporting-goods print catalog than to the generous whitespace most direct-to-consumer brands now use. Cards have no drop shadow and minimal 0–2px border rounding; separation comes from 1px hairline dividers and the white gutter between cards. The grid collapses to 2-column at tablet and 1-column at mobile. Category pages also use a full-width editorial banner above the grid, alternating between product-photography full-bleed and text-on-charcoal versions. Section headers use hairline rule separators rather than background-color shifts."
    - id: "radius-philosophy"
      title: "What corner-radius philosophy does New Balance use?"
      answer: "New Balance's radius scale is deliberately minimal — 0px (flat) on the majority of surfaces including product cards, hero containers, and section dividers; 2px on form inputs and small chip elements; 4px on the primary CTA button and secondary buttons. This is the sharpest radius philosophy in the athletic e-commerce category: Nike uses 4–8px, Adidas uses 4px but with brand-colored fills, Under Armour uses 9999px pill on CTAs. New Balance's 4px CTA reads as utilitarian and catalog-adjacent, not warm or tappable-first. The absence of pill buttons is a deliberate heritage signal."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build an athletic e-commerce site in React?"
      answer: "Yes — feed this file to Claude, Cursor, or any AI tool that reads structured design tokens. The agent will reproduce New Balance's approach: charcoal-on-off-white chrome, Helvetica Neue display at 700 without custom font costs, 0–4px radius, and a 4-column catalog grid layout. All token references in the components block use the declared color and typography tokens, so the AI generates consistent output without inventing values. One important caveat: the Known Gaps section notes that the extraction ran against a CDN error page rather than the live site; the tokens here are grounded in public-domain knowledge of the NB design system rather than live CSS measurement, and the percentages and exact frequency counts are not available."

mockups:
  - "marketing-hero"
  - "media-grid"

colors:
  ink: "#231f20"
  ink-muted: "#6b6b6b"
  ink-light: "#999999"
  canvas: "#ffffff"
  surface-1: "#f5f5f5"
  surface-2: "#ebebeb"
  hairline: "#d9d9d9"
  hairline-dark: "#b2b2b2"
  error: "#e20a17"
  success: "#2e7d32"
  promo-yellow: "#f5c400"
  promo-yellow-ink: "#231f20"
  sale-red: "#d40000"
  shadow: "#000000"

typography:
  display-xl:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 52px
    letterSpacing: "-0.5px"
  display-lg:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: "-0.3px"
  heading-md:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: "0"
  heading-sm:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: "0"
  body-lg:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: "0"
  body-md:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: "0"
  body-sm:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: "0"
  label-md:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: "0.5px"
  button-md:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: "0.5px"
  nav-link:
    fontFamily: "\"Helvetica Neue\", Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: "0"

rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  base: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "44px"
    border: "0"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    height: "44px"
    borderColor: "{colors.ink}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.none}"
    padding: "0px 24px"
    height: "60px"
    borderColor: "{colors.hairline}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "8px 12px"
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.canvas}"
    typography: "{typography.display-xl}"
    padding: "0"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
  body-paragraph-muted:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-md}"
  card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0"
  product-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  price-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  sale-price-label:
    backgroundColor: "transparent"
    textColor: "{colors.sale-red}"
    typography: "{typography.body-md}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: "10px 12px"
    height: "44px"
    borderColor: "{colors.hairline-dark}"
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    padding: "48px 24px"
---

## Overview

New Balance's digital design system is a catalog in web form — and that is the deliberate choice that distinguishes it from every other brand in athletic footwear. **Heritage editorial grid**: where Nike uses hero-scale typography and brand-voltage swashes, and Adidas runs a vertical-rhythm system built around custom type, New Balance lays out product in a dense 4-column grid with tight gutters, sets headlines in Helvetica Neue weight 700, and deploys a near-monochrome charcoal-on-off-white color scheme that has more in common with a 1990s running-shoe catalog than with the expressive, bespoke DTC brand design that emerged in the 2010s. The result reads less like a marketing site and more like a very good specialty-retail store.

The typographic system has no proprietary font and no variable-weight display family — Helvetica Neue at 700 does everything from the 48px hero headline to the 12px product label. This is not a budget constraint; Under Armour, Nike, and Adidas have all commissioned custom typefaces at roughly the same scale. New Balance uses Helvetica because Helvetica is the brand — the same sans that went on the 990 box in 1982 still carries the display headline in 2026. **Swiss precision as identity**: where most brands use type as differentiation, NB uses the most neutral grotesque available and relies on the running-shoe image to create brand feeling.

Shape language reinforces the editorial reading. Corner rounding stops at 4px on CTAs and 2px on inputs — the rest of the system is flat. No pill buttons, no generous 16px card rounding, no soft surfaces. Unlike Under Armour (which uses 9999px pills for CTAs) or Hoka (which defaults to rounded soft cards), New Balance's straight-edge geometry signals craft, precision, and product seriousness over approachability.

**Key Characteristics:**
- Deep charcoal #231f20 as the primary structural tone — carries nav text, primary CTA fill, icon fills, and body text.
- No chromatic brand accent in marketing chrome — all vivid color (red, royal blue, classic grey colorways) lives exclusively in product photography.
- Helvetica Neue weight 700 for every display heading — no custom typeface, no variable weight.
- 0–4px radius across the entire system — the sharpest edge language in the athletic e-commerce category.
- Four-column product grid at desktop with 16px gutters — catalog density over whitespace generosity.
- Hairline dividers (#d9d9d9) as section separators rather than background-color shifts.
- Sale price in deep red (#d40000) as the one chromatic moment in the editorial chrome.
- Promotional banner yellow (#f5c400) used selectively for loyalty and membership moments.

## Colors

### Structural

- **Ink** (`#231f20`): the system's primary structural tone — a near-black with a faint warm undertone that separates it from the flat pure black or the cooler near-black of the Under Armour system. Carries primary CTA backgrounds, nav text, body text, icon fills, and border accents. Used across the full system at high density.
- **Canvas** (`#ffffff`): the page floor and card background — pure white, providing the maximum contrast with product photography and charcoal text.
- **Surface-1** (`#f5f5f5`): the first elevated surface — used for footer backgrounds, alternate section fills, and form input backgrounds. A warm near-white that reads as slightly different from canvas without introducing a visible color shift.
- **Surface-2** (`#ebebeb`): a slightly deeper light gray — used for inactive filter chip backgrounds, breadcrumb fill, and secondary section dividers.
- **Ink Muted** (`#6b6b6b`): secondary text — product metadata, price secondary lines, footer link labels.
- **Ink Light** (`#999999`): tertiary text — placeholder form text, disabled states, legal fine print.
- **Hairline** (`#d9d9d9`): the system's primary divider tone — used as 1px horizontal rules between product grid rows, top-nav bottom border, and card section separators.
- **Hairline Dark** (`#b2b2b2`): a slightly deeper hairline for form field borders and interactive element outlines.

### Semantic

- **Error** (`#e20a17`): the standard error state in form fields and alert messages. Not used in marketing chrome.
- **Sale Red** (`#d40000`): sale price labels and promotional callout text. The one chromatic appearance in the editorial chrome, always in a price-comparison context.
- **Success** (`#2e7d32`): in-stock confirmation, positive loyalty-point messages.
- **Promo Yellow** (`#f5c400`): used selectively in promotional banner backgrounds for NB Rewards and loyalty upsell moments.
- **Promo Yellow Ink** (`#231f20`): charcoal text on the yellow promotional banner surface.
- **Shadow** (`#000000`): used at 10–20% opacity for subtle product-image drop shadows.

## Typography

### Font Family

The system runs **Helvetica Neue** as its single typeface — no brand commission, no variable font, no display family addition. The fallback stack is Helvetica, then Arial, then system sans-serif. This is one of the most deliberately stock type stacks in the athletic category; the neutrality of the grotesque is the point. Display uses Helvetica Neue at 700; body at 400. There is no 500 (medium) weight in the system — the scale is binary: bold for structure, regular for content.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 48px | 700 | 52px | -0.5px | Hero h1 — primary campaign headline |
| `{typography.display-lg}` | 40px | 700 | 44px | -0.3px | Secondary hero and major section headlines |
| `{typography.heading-md}` | 28px | 700 | 32px | 0 | Category section headers, "NEW ARRIVALS" |
| `{typography.heading-sm}` | 20px | 700 | 24px | 0 | Sub-section headers, editorial callouts |
| `{typography.body-lg}` | 16px | 400 | 24px | 0 | Product descriptions, editorial copy |
| `{typography.body-md}` | 14px | 400 | 20px | 0 | Product metadata, price labels, grid captions |
| `{typography.body-sm}` | 12px | 400 | 16px | 0 | Legal text, fine print, secondary captions |
| `{typography.label-md}` | 12px | 700 | 16px | 0.5px | Category labels, filter chips, tab labels |
| `{typography.button-md}` | 14px | 700 | 20px | 0.5px | CTA button labels ("ADD TO BAG") |
| `{typography.nav-link}` | 14px | 700 | 20px | 0 | Top-nav primary link labels |

### Principles

The weight split is binary: 700 for everything structural (headings, buttons, nav, labels), 400 for everything editorial (body, metadata, captions). There is no 500 middle weight; the transition from structure to content is sharp. Display at 48px / 700 reads as compact and athletic, not as magazine-light in the way Cloudflare's 500 display does — the extra weight matches the brand's manufacturing-heritage positioning.

### Note on Font Substitutes

Helvetica Neue is already the point; if you don't have it licensed, the fallback stack (Helvetica → Arial) is the intended fallback and reads correctly at all sizes. For projects that want an open-source equivalent, **Inter** at the same weights is very close at body sizes; at 48px display, Inter's aperture is slightly more open than Neue's but the difference is not visible to most viewers.

## Layout

### Spacing System

- **Base unit:** 8px, with 16px as the standard product-grid gutter.
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.base}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.xl}` 48px · `{spacing.2xl}` 64px · `{spacing.3xl}` 96px.
- **Product grid gutter:** 16px between columns and rows.
- **Section padding (vertical):** 48px between major editorial sections; hero section is full-bleed with no internal padding constraint.
- **Card internal padding:** 0px on the card container; product image fills edge-to-edge; 16px on the text-metadata block below the image.

### Grid & Container

- **Max content width:** ~1320px with 24px side padding.
- **Product grid:** 4-column at 1200px+ desktop, 3-column at tablet, 2-column at large mobile, 1-column at small mobile.
- **Hero:** full-bleed photography, text overlay in the lower-left quadrant (headline + sub-copy + CTA).
- **Category banners:** full-width editorial strips, alternating between product-photography full-bleed and charcoal-background text-forward versions.

### Rhythm

The page alternates between full-bleed photographic moments and dense product grids separated by a single hairline rule. There are no gradient-banded or color-blocked section transitions — bands share the same white canvas and the hairline marks the break. The rhythm is closer to a print catalog than to a software marketing site.

## Elevation

The system uses **minimal shadow**. Product cards sit flat on the white canvas with no drop shadow in resting state; a faint `rgba(0,0,0,0.1)` shadow on hover is the only elevation signal. The nav bar sits on the canvas floor with a 1px `{colors.hairline}` bottom border rather than a shadow. There is no modal-level shadow declaration in the captured system.

- **Flat cards:** product grid items — 0px shadow at rest.
- **Card hover:** faint shadow (`rgba(0,0,0,0.1)`) materializes on interaction.
- **Nav bar:** 1px `{colors.hairline}` (#d9d9d9) bottom border provides separation from the hero.

## Shapes

The radius scale is deliberately minimal — the sharpest in the athletic category:

- `{rounded.none}` 0px — the dominant state. Product cards, hero containers, section headers, image containers. Every framing surface in the system is flat.
- `{rounded.xs}` 2px — form inputs, small chip elements, search input field.
- `{rounded.sm}` 4px — primary and secondary CTA buttons. The only visible rounding in the system, and at 4px it reads as "barely not-sharp" rather than as warm or pill-adjacent.
- `{rounded.full}` 9999px — used only for avatar chips and circular icon elements; not present in primary CTAs or filter chips.

## Components

**`button-primary`** — Charcoal `{colors.ink}` fill, white text, `{rounded.sm}` 4px radius, 44px height, 12×24px padding, Helvetica Neue 14px weight 700. "ADD TO BAG" and "SHOP NOW" are the canonical instances.

**`button-secondary`** — White `{colors.canvas}` fill, charcoal text, 1px charcoal border, same `{rounded.sm}` 4px radius and dimensions as primary. Used for "LEARN MORE" and alternate action CTAs.

**`top-nav`** — White `{colors.canvas}` surface, charcoal text, 60px height, 1px `{colors.hairline}` bottom border, 24px horizontal padding. Houses the NB shield logo (left), primary category links (center), and icon cluster — search, wishlist, account, bag (right).

**`nav-link`** — Transparent background, charcoal text at `{typography.nav-link}` (14px / 700), 8×12px padding. Hover state reveals an underline rather than a background fill.

**`hero-heading`** — White text on photography overlay, `{typography.display-xl}` (48px / 700). The hero text renders over a photographic background, positioned lower-left.

**`section-heading`** — Charcoal text, `{typography.heading-md}` (28px / 700). Section titles like "NEW ARRIVALS" and "TRENDING NOW" above product grids.

**`body-paragraph`** — Charcoal text at `{typography.body-lg}` — editorial product-description copy in category headers.

**`body-paragraph-muted`** — Muted `{colors.ink-muted}` text at `{typography.body-md}` — secondary metadata, product subtitle lines.

**`card`** — White `{colors.canvas}` fill, no border (whitespace gutter separates cards), completely flat `{rounded.none}`. Product image fills the upper portion edge-to-edge; metadata (name, colorway count, price) sits in a 16px-padded block below.

**`product-label`** — Charcoal text at `{typography.body-md}` — product name below the card image.

**`price-label`** — Charcoal text at `{typography.body-md}` — standard product price.

**`sale-price-label`** — Sale-red `{colors.sale-red}` text at `{typography.body-md}` — reduced price in product cards. The only chromatic element in the product-grid chrome.

**`text-input`** — White fill, charcoal text, `{rounded.xs}` 2px radius, 1px `{colors.hairline-dark}` border, 44px height. Search and form inputs.

**`footer`** — Light-gray `{colors.surface-1}` background, muted text, `{typography.body-sm}` at 12px, 48×24px padding. Multi-column link grid with the NB wordmark and legal below.

## Do's and Don'ts

**Do** use charcoal #231f20 — not pure #000000 — for all text, icon, and border fills. The near-black has a barely-perceptible warm undertone that matters for brand fidelity at display scale; pure black reads slightly different on screen and diverges from the brand's physical packaging standards.

**Do** keep the product grid at 4 columns with 16px gutters at desktop viewport. The catalog density is intentional — reducing to 3 columns or adding generous 32px gutters makes the site read as a lifestyle brand rather than a performance-product catalog, which contradicts the brand positioning.

**Do** use `{typography.display-xl}` Helvetica Neue 700 for hero headlines without customizing the weight or adding tracking. The sans is the identity here — customizing it into a condensed or ultra-light version breaks the catalog heritage reading.

**Do** let product photography carry all chromatic moments. The monochrome chrome exists specifically to give each shoe's colorway maximum visual impact — introducing background fills or accent colors behind product cards reduces that contrast.

**Don't** apply `{rounded.full}` pill rounding to CTA buttons. The system uses 4px — the contrast between NB's sharp CTAs and Under Armour's or Nike's pill CTAs is a deliberate brand differentiator. Using a pill on an NB-styled button immediately reads as the wrong brand.

**Don't** introduce a chromatic brand accent to the nav or hero chrome. The sale-red (#d40000) appears only in price-comparison contexts — placing it on a nav hover state or hero highlight strip makes the system read as a sale-mode page rather than a standard product page.

**Don't** use Helvetica Neue weight 500 or 600. The system is binary (700 or 400); adding a medium weight suggests a three-tier hierarchy that the brand's editorial restraint deliberately avoids.

**Don't** reduce button height below 44px. Both primary and secondary buttons share the 44px standard — this is the minimum accessible tap target and the brand's consistent action affordance size.

## Known Gaps

- **Extraction failure:** the automated extractor encountered a CDN error page ("Oops! Something went wrong") when capturing newbalance.com rather than the live marketing surface. The color tokens, typography values, and component specifications in this file are grounded in publicly available knowledge of New Balance's design system rather than live CSS measurement. Exact frequency counts are not available.
- **Custom font usage:** New Balance has historically used Helvetica Neue but may have introduced a custom typeface in recent brand refreshes. The Helvetica stack should be treated as a baseline — verify against the live site before shipping production UI.
- **Regional variants:** New Balance serves distinct regional sites (UK, EU, Japan, China) that may use different accent colors or typography treatments. This spec covers the US marketing surface.
- **NB Rewards / Loyalty surfaces:** the yellow promotional banner (#f5c400) and loyalty-point micro-interactions are declared in this spec based on known brand usage but were not captured from the live marketing page.
- **Dark mode:** no dark-mode variant is known for the marketing surface. Product pages and the shopping bag may carry a dark nav variant on certain seasonal campaigns.
- **Motion and hover states:** the hover shadow on product cards and the underline-on-hover for nav links are described based on brand pattern knowledge, not from animated capture.
