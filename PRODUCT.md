# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS in a single `index.html` with assets under `/assets`, deployed on Vercel (`vercel.json` holds the `/join` rewrite and the `/:name/:code` store redirects). No build step. `.claude` and `.impeccable` are kept out of deploys via `.vercelignore`.

## Users

Merchants in Saudi Arabia (Jeddah area first) who sell online, on social media and chat, or from a physical store, and need their orders delivered without hiring drivers or managing couriers. Most are small businesses and many are not tech-savvy. They read the page in Arabic or English and usually on a phone.

## Product Purpose

EZY is a delivery aggregator. A merchant submits a delivery request once; EZY assigns a contracted delivery vendor, sends the customer a payment link (or handles cash on delivery), sends tracking links to merchant and customer, and credits the merchant's net earnings to the EZY wallet, which can be withdrawn to a bank account. The physical delivery is done by EZY's contracted vendor partners.

Success for this page: a merchant understands what EZY does and downloads the app from the App Store or Google Play.

## Positioning

EZY is a technology layer between the merchant and delivery vendors: one request covers vendor assignment, payment link, tracking, collection and settlement. Merchants see one delivery price set by EZY.

EZY is not a marketplace. A merchant's customers can chat and order directly from that merchant inside the app, through the merchant's own link, and only ever see that merchant's store. EZY never approaches or markets to merchants' customers. The customer options in the app ("Track a parcel", "Chat & Order") exist so a merchant's customer knows what to do when they open the app.

## Operating Context

- Merchant registers in the EZY app (iOS and Android, same app also used by drivers).
- Orders come from the merchant's website (auto-generated via integration/API), from the in-app product catalogue, or from the merchant's customers via chat & order.
- Payment: cash on delivery or online payment link via a third-party gateway.
- Each order has a pickup code for the merchant and a delivery code for the customer, handed to the driver.
- Collections land in the merchant's EZY wallet; withdrawals go to the merchant's bank account.

## Capabilities and Constraints

- App Store: https://apps.apple.com/app/id6747339321
- Google Play: https://play.google.com/store/apps/details?id=com.mmc.waslii
- Page is bilingual (English LTR, Arabic RTL) with a language toggle; both must stay complete and equal.
- Merchant-facing app term is "Service fee" (not "Platform fee").
- Referral and sales links go through `/join` and `/:name/:code`; the landing page must not break those routes.
- No pricing is published on the page.

## Brand Commitments

- Name: EZY (wordmark "ezy"; Arabic "إيزي").
- Logo: rounded app-icon square in a light-cyan-to-blue gradient with white lettering, English and Arabic versions (`/assets/brand/`).
- Colour: the light cyan to blue gradient is the EZY colour. A darker blue was rejected as "not ezy color".
- Tagline in use: "Delivery Simplified" / "Delivery requested. Execution handled."
- Fonts in use: Plus Jakarta Sans (Latin), Tajawal (Arabic).

## Evidence on Hand

- Real app screenshots: welcome screen EN and AR (`/assets/app/ezy-welcome-en.webp`, `/assets/app/ezy-welcome-ar.webp`).
- Hero illustration: `/assets/hero/ezy-hero-plain.png`.
- No merchant testimonials, logos, delivery counts, coverage numbers or ratings exist yet. Do not invent any.

## Product Principles

1. The merchant is the audience. Every section answers what EZY does for the merchant.
2. One request, everything handled: show the whole journey from sale to money in the bank.
3. Simple enough for a non-technical shop owner to follow on a phone.
4. The merchant's customers stay the merchant's. Never suggest a marketplace.
5. Arabic and English are equal citizens.

## Accessibility & Inclusion

Full RTL support for Arabic. Motion must respect `prefers-reduced-motion`. Text contrast readable on phones outdoors.
