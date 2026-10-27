---
name: EZY
description: Delivery, simplified. Bilingual EN/AR landing page for Saudi merchants, built in the EZY app's own visual language.
colors:
  sky: "#08BAF6"
  field-mid: "#0594EE"
  ocean: "#0470E8"
  ink: "#0B1F35"
  ink-soft: "#3A536C"
  mist: "#F1F7FD"
  mist-deep: "#E3EFFB"
  white: "#FFFFFF"
  settled-green: "#0E9F6E"
  hairline-blue: "rgba(4,112,232,.14)"
  hairline-ink: "rgba(11,31,53,.08)"
  ink-tint: "rgba(11,31,53,.24)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.2vw, 74px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.4vw, 54px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(28px, 3vw, 40px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.5vw, 20px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 700
    lineHeight: 1.35
  arabic:
    fontFamily: "Tajawal, Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    lineHeight: 1.25
    letterSpacing: "0em"
rounded:
  control: "10px"
  tag: "12px"
  card: "14px"
  button: "16px"
  panel: "22px"
  surface: "28px"
  sheet: "36px"
  device: "50px"
  pill: "999px"
spacing:
  gutter: "24px"
  gutter-mobile: "16px"
  stack: "10px"
  group: "40px"
  column: "56px"
  section: "112px"
  section-mobile: "76px"
  container: "1200px"
components:
  sheet:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "44px 40px 40px"
  button-store:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "9px 20px 9px 16px"
    height: "58px"
  nav-get:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ocean}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  nav-get-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  lang-toggle-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ocean}"
    rounded: "{rounded.pill}"
    padding: "9px 12px"
  lang-toggle-active-solid:
    backgroundColor: "{colors.ocean}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "9px 12px"
  board:
    backgroundColor: "{colors.ink-tint}"
    textColor: "{colors.white}"
    rounded: "30px"
    padding: "18px"
  lane-header:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tag}"
    padding: "8px 7px"
  order-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "11px 11px 12px"
  tracking-bar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.panel}"
    padding: "16px 22px"
  tracking-dot-on:
    backgroundColor: "{colors.ocean}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    size: "34px"
  art-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "26px"
  chip:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "11px 15px"
  kind-pill:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  door:
    backgroundColor: "rgba(11,31,53,.22)"
    textColor: "{colors.white}"
    rounded: "{rounded.surface}"
    padding: "28px"
  door-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "28px"
  phone:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.device}"
    padding: "11px"
    width: "330px"
---

# Design System: EZY

## Overview

**Creative North Star: "White Sheets on EZY Sky"**

The page speaks the EZY app's own grammar. A full-bleed field runs from light cyan to bright blue, the same gradient as the app icon, and everything a merchant has to read sits on large white sheets laid over it. Depth comes from those sheets floating on soft, blue-tinted shadows, never from borders or boxes drawn on the field. The result is bright, open and calm: one dominant brand colour, ink text, a lot of white.

The system is built to show one order moving from sale to money in the wallet. Its signature pieces are working models of that journey: a live delivery board where example orders slide lane to lane, a sticky tracking bar that fills as the reader scrolls through five steps, and a phone stage that spotlights each entry on the real app welcome screen. These are product demonstrations, so every one of them is labelled as an example.

Arabic and English are equal. Every component mirrors under RTL through logical properties, Arabic text switches to Tajawal with relaxed line height, and the brand mark, screenshots and legal links swap per language. The owner rejected a darker blue as "not ezy color", so the brand field never drops below the ocean end of the gradient.

**Key Characteristics:**
- Light cyan to blue gradient field as the only brand ground
- Large white sheets with generous radii (28 to 36px) carrying all reading content
- Ink (not black) for text and for the store buttons
- Drawn single-stroke icons at 1.75px stroke, coloured ocean blue
- Product demonstrations as signature components, each labelled as an example
- Full RTL parity

## Colors

One brand hue family, from sky cyan to ocean blue, set against white, two pale mist tints and a deep navy ink.

### Primary
- **EZY Sky** (#08BAF6): Start of the brand gradient and the theme colour. Used in the field, in gradient strokes (chain line, tracking fill) and as the phone screen backdrop. Too light to carry white text on its own.
- **Field Midpoint** (#0594EE): The 48% stop of the field gradient. Exists only inside the gradient.
- **EZY Ocean** (#0470E8): End of the gradient and the working accent. Used for icon strokes, the H1 emphasis word, the "See how it works" link, active tracking dots, the active language button on the solid nav, and as the flat ground of the app and CTA sections. It is the darkest blue the brand allows.

### Neutral
- **Ink** (#0B1F35): All headings and primary text on white, the store buttons, the phone body, the footer ground and the focus ring.
- **Ink Soft** (#3A536C): Ledes, descriptions, captions and inactive tracking labels.
- **Mist** (#F1F7FD): Ground for the "How it works" and "Commerce models" sections, chip and message backgrounds, nav link hover.
- **Mist Deep** (#E3EFFB): Unfilled tracking rail, inactive dot borders, the language toggle track on the solid nav.
- **White** (#FFFFFF): Sheets, cards, lane headers, order cards.
- **Hairline Blue** (rgba(4,112,232,.14)): Borders on chain nodes and commerce pills.
- **Hairline Ink** (rgba(11,31,53,.08)): Row dividers in lists and the art panel border.
- **Ink Tint** (rgba(11,31,53,.24)): Translucent dark layer that lets white text sit on the field (the delivery board). The door cards use the same ink at 22%.

### Tertiary
- **Settled Green** (#0E9F6E): Status colour for an order that has reached "Paid to wallet". Used only as a completion state, never as decoration.

### Named Rules
**The EZY Colour Rule.** The brand field is the gradient from #08BAF6 to #0470E8 at 168deg (270deg or 90deg when used as a horizontal stroke, mirrored for RTL). Nothing darker than ocean is used as a brand ground.

**The Sheet or Tint Rule.** Text never sits bare on the gradient. It sits on a white sheet in ink, or in white on an ink tint dark enough to reach 4.5:1 against the lightest part of the field behind it.

## Typography

**Display Font:** Plus Jakarta Sans (with ui-sans-serif, system-ui fallback)
**Body Font:** Plus Jakarta Sans
**Arabic Font:** Tajawal (with Plus Jakarta Sans fallback for Latin runs)

**Character:** One brand family at heavy weights for headings and regular weight for reading. Tajawal carries the same weight steps in Arabic. Both faces are the existing EZY brand fonts and are kept on purpose.

### Hierarchy
- **Display** (800, clamp(44px, 5.2vw, 74px), 1.08): The hero H1 only. One word may take ocean colour as emphasis.
- **Headline** (800, clamp(32px, 4.4vw, 54px), 1.08): Section headings, balanced with text-wrap.
- **Title** (800, clamp(28px, 3vw, 40px), 1.08): Step headings in "How it works". Door titles use clamp(24px, 2.4vw, 32px); feature group heads use 22px over a 2px ink rule.
- **Lede** (400, clamp(17px, 1.5vw, 20px), 1.6): Section intros in ink soft, capped at 62ch.
- **Body** (400, 17px, 1.6; 16px under 760px): Running text. Descriptions cap at 46ch.
- **Label** (700, 12.5 to 13.5px): Lane headers, order cards, tracking labels, captions. Sentence case, no tracking.

### Named Rules
**The Arabic Line Rule.** Under RTL, headings drop negative letter spacing to 0 and open line height to 1.25. Tajawal replaces Plus Jakarta Sans everywhere except the store button labels, which stay Latin.

**The Tabular Numbers Rule.** Order references, amounts, wallet balances and step numbers use tabular figures.

## Layout

Content sits in a 1200px container with 24px side gutters (16px under 760px). Sections are separated by 112px of vertical padding (76px on mobile) and by alternating grounds: gradient hero, white, mist, white, mist, then ocean for the app stage and CTA, then an ink footer.

The hero is a two-column grid: a fixed 440px copy sheet and a fluid delivery board. "How it works" is a stack of two-column steps (copy left, demo panel right, 56px gap, each at least 34vh tall) under a sticky tracking bar. Features run in three columns of list rows. The app stage pairs a sticky phone (5 parts) with a tall column of door cards (6 parts) that the reader scrolls past.

Two breakpoints drive the responsive changes:
- **1080px:** nav links hide, the hero stacks, features drop to two columns, the commerce grid stacks.
- **760px:** board lanes become horizontal rows (lane header at 42% width, card beside it), the chain becomes a vertical timeline, tracking labels collapse to numbered dots with the current step name printed below, steps go single column, the phone stops being sticky and the doors become a 2x2 tab grid above it with the description in a live region.

## Elevation & Depth

Depth is ambient and blue-tinted. White sheets float over the field on large, soft shadows coloured with ocean or ink at low alpha; nothing uses hard offsets or dark grey. Inside white sections, panels use lighter ink shadows plus a hairline border. Hover lifts are small (1 to 2px translate) and paired with a slightly stronger shadow.

### Shadow Vocabulary
- **Sheet float** (`box-shadow: 0 30px 60px rgba(3,60,140,.22)`): White sheets on the gradient (hero copy, CTA).
- **Device float** (`box-shadow: 0 40px 80px rgba(3,40,100,.35)`): The phone frame only.
- **Active card** (`box-shadow: 0 24px 50px rgba(3,40,100,.25)`): The selected door card on the ocean ground.
- **Order card** (`box-shadow: 0 8px 20px rgba(3,60,140,.2)`): Order cards in the board lanes.
- **Store button** (`box-shadow: 0 10px 24px rgba(11,31,53,.22)`, hover `0 14px 30px rgba(11,31,53,.28)`): Store buttons.
- **Panel soft** (`box-shadow: 0 18px 40px rgba(11,31,53,.08)`): Demo panels on mist; the tracking bar uses `0 12px 30px rgba(11,31,53,.08)`.
- **Nav solid** (`box-shadow: 0 6px 24px rgba(11,31,53,.08)`): Nav after 30px of scroll.
- **Spotlight dim** (`box-shadow: 0 0 0 9999px rgba(11,31,53,.22)`): Dims the phone screen around the spotlight frame.

### Named Rules
**The Blue Shadow Rule.** Shadows over the field or ocean are tinted blue (rgb 3,40-60,100-140). Shadows inside white or mist sections are ink at 8%.

## Shapes

Everything is rounded and friendly, matching the app. Radii scale with the size of the surface: 10 to 12px for nav links, lane headers and small tags; 14 to 16px for order cards, chips, messages and buttons; 22px for lanes, the tracking bar and the wallet; 28px for demo panels and door cards; 36px for sheets (28px on mobile); 50px for the phone frame with a 40px screen. Pills (999px) are reserved for the language toggle, the "Get the app" button, the commerce kinds, the board's example tag and the wallet withdraw pill. Borders are rare and thin: 1 to 1.5px hairlines, or 1px white at 20% on translucent lanes.

## Components

### Buttons
Confident and dark, the store buttons are the page's one call to action.
- **Shape:** Rounded rectangle (16px), at least 58px tall.
- **Store (primary):** Ink background, white text, App Store first and Google Play second, always as a pair. Small line "Download on the" at 12px over the store name at 18px bold. Apple glyph in white, Play glyph in its four brand colours. Padding mirrors under RTL. On mobile each button grows to fill (flex 1 1 200px).
- **Hover / Focus:** Lift 2px with the stronger store shadow, eased with cubic-bezier(.16,1,.3,1) over .25s. Focus is a 3px ink outline at 3px offset.
- **Get the app (nav):** White pill with ocean text over the field; switches to an ink pill with white text once the nav turns solid.
- **Text link:** "See how it works" in ocean, 700 weight, with a down arrow that drops 3px on hover.

### Chips
- **Style:** Mist background, ink text at 15px 700, 14px radius, ocean icon at 20px.
- **Commerce kinds:** Larger white pills with a hairline blue border, 800 weight at clamp(17px, 1.7vw, 22px).

### Cards / Containers
- **Sheet:** White, 36px radius, sheet float shadow, 44px 40px padding in the hero.
- **Demo panel:** White, 28px radius, 26px padding, hairline ink border, panel soft shadow. Holds a static mock of each step and an "Example" caption where data is shown.
- **Wallet:** The field gradient inside a 22px card with a 36px 800 balance and a white withdraw pill.

### Navigation
- Fixed 68px bar (62px mobile). Transparent over the hero with white wordmark and links; after 30px of scroll it becomes 97% white with ink text and the nav solid shadow.
- Links are 15px 600 with a 10px-radius hover wash (white at 18% over the field, mist when solid). They hide under 1080px.
- Language toggle: a pill track holding EN and عربي. The active language is a white pill with ocean text, or an ocean pill with white text on the solid nav. Each button is at least 44px wide.

### Delivery Board (signature)
A translucent ink panel (24%, 30px radius) on the hero field holding five lanes: Requested, Driver assigned, Picked up, Delivered, Paid to wallet. Each lane is white at 12% with a 1px white-20% border and a white header carrying an ocean icon. White order cards (reference, area, state) step one lane every 2.4s with an 820ms FLIP slide; the card leaving the last lane fades and scales to .92. Completed cards show the amount and turn their state settled green. The board carries an "Example orders" pill and pauses when off screen, when the tab is hidden, or under reduced motion.

### Tracking Bar (signature)
A white 22px-radius bar that sticks 10px under the nav while the reader scrolls the five steps. Numbered 34px dots sit on a 4px mist-deep rail; a sky-to-ocean fill grows to the current step over .6s, filled dots turn ocean, and the current dot scales to 1.18. Each dot is a button that scrolls to its step. On mobile the labels hide and the current step's name prints under the bar.

### Phone Stage (signature)
An ink phone frame (50px radius, 11px bezel, 330px wide) showing the real app welcome screen in the active language. A 16px-radius ink-bordered spotlight moves between the four entries (Merchant, Driver, Track a parcel, Chat & Order) over .55s while the rest of the screen dims. Door cards beside it are ink-tint panels with white text; the current one turns white with ink text and scales to 1.02. On desktop the doors drive the spotlight by scroll; on mobile they are tapped.

### Chain
Four nodes (You, EZY, Delivery partners, Your customer) joined by a 2px sky-to-ocean line. Nodes are 64px rounded squares (20px radius), white with an ocean icon; the EZY node is the app icon itself. Under 760px the chain turns into a vertical timeline.

### Icons
A single inline SVG sprite of drawn line icons: 24px box, no fill, 1.75px round-capped stroke in currentColor, usually ocean. The only filled marks are the Apple and Google Play glyphs.

## Do's and Don'ts

### Do:
- **Do** use the gradient from #08BAF6 to #0470E8 for every brand field, and flip its direction for RTL when it runs horizontally.
- **Do** put reading content on white sheets with 28 to 36px radii, or on an ink tint that holds 4.5:1 for white text when it stays on the field.
- **Do** label every illustrative order, balance or form as an example ("Example orders", "Example order", "Example balance").
- **Do** build with logical properties (inset-inline, margin-inline-start, padding-inline) so components mirror under RTL without extra rules.
- **Do** switch Arabic headings to Tajawal with letter-spacing 0 and line height 1.25.
- **Do** use the 1.75px single-stroke icon sprite for every icon.
- **Do** stop the board and collapse transitions to .01ms under prefers-reduced-motion.
- **Do** keep store buttons ink-dark, paired, and at least 58px tall.

### Don't:
- **Don't** use a blue darker than #0470E8 as a brand ground; the owner rejected it as "not ezy color".
- **Don't** replace Plus Jakarta Sans or Tajawal.
- **Don't** set text directly on the gradient without a sheet or tint.
- **Don't** use emoji or icon fonts.
- **Don't** use flat grey or hard offset shadows; shadows are soft and tinted.
- **Don't** use settled green for anything other than a completed order.
