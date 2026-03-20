# Hands of Sympathy — Implementation Guide

> Awwwards-level Next.js website with claret color system, 3-page SPA routing, ambient audio, and call request drawer.

---

## Quick Start

```bash
# 1. Unzip the project
unzip handsofsympathy-nextjs.zip && cd handsofsympathy

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build && npm start
```

---

## Project Structure

```
handsofsympathy/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout — fonts, metadata
│   │   ├── globals.css                 # ALL design tokens + shared styles
│   │   ├── page.tsx                    # Home page (/)
│   │   ├── about/
│   │   │   ├── page.tsx                # Route export
│   │   │   └── AboutPage.tsx           # About page component
│   │   └── why-it-works/
│   │       ├── page.tsx                # Route export
│   │       └── WhyPage.tsx             # Why It Works component
│   ├── components/
│   │   ├── CustomCursor.tsx            # Claret dot + lagging ring cursor
│   │   ├── Loader.tsx                  # Intro loader with count-up
│   │   ├── Nav.tsx                     # Sticky nav with pill switcher
│   │   ├── AudioButton.tsx             # Web Audio API ambient sound
│   │   ├── CallDrawer.tsx              # FAB + slide-in form drawer
│   │   ├── Marquee.tsx                 # Scrolling ticker band
│   │   ├── Footer.tsx                  # Shared footer (claret-dark)
│   │   └── home/
│   │       ├── HomeHero.tsx            # Hero section
│   │       ├── StatsStrip.tsx          # Claret stats bar with count-up
│   │       ├── ServicesPreview.tsx     # 6-card services grid
│   │       └── HomeExtras.tsx          # Philosophy strip + Methods
│   └── hooks/
│       └── useLenis.ts                 # Lenis smooth scroll + GSAP ticker
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

---

## Color System

All colors are defined as CSS custom properties in `globals.css` and mapped in `tailwind.config.js`.

| Token               | Hex         | Usage |
|---------------------|-------------|-------|
| `--claret`          | `#7f1734`   | Primary brand, cursor, buttons, accents |
| `--claret-dark`     | `#5a1025`   | Footer bg, CTA sections, button hover |
| `--claret-light`    | `#9b2e4f`   | ACT modality, secondary accents |
| `--claret-mist`     | `rgba(127,23,52,0.08)` | Card hover bg, form notice, credential bg |
| `--cream`           | `#e8d8c5`   | FAB pulse dot, warm mid-tone |
| `--cream-dark`      | `#d4c4b1`   | Subtle warm dark |
| `--cream-light`     | `#f5ede3`   | Method section bg, hover states |
| `--bg`              | `#fafaf8`   | Global page background |
| `--fg`              | `#1a1a1a`   | Primary text |
| `--muted`           | `#6b6b6b`   | Body copy, labels |
| `--border`          | `rgba(0,0,0,0.08)` | Dividers, card borders |

### Tailwind Usage

```tsx
// Via CSS var (inline)
style={{ color: 'var(--claret)' }}

// Via Tailwind tokens
className="text-claret bg-cream-light border-claret-dark"
```

---

## Typography

| Font                  | Variable           | Usage |
|-----------------------|--------------------|-------|
| Cormorant Garamond    | `--font-cormorant` | Headlines, display text, quotes |
| DM Sans               | `--font-dm`        | Body, nav, labels, buttons |

### Display Classes

```css
.text-display-xl  /* clamp(4rem, 11vw, 12rem) — hero headline */
.text-display-lg  /* clamp(2.8rem, 6vw, 7rem) — section titles */
```

---

## Pages

### `/` — Home

Sections in render order:
1. **HomeHero** — Full-screen with three-line headline reveal, deco rings, scroll hint
2. **StatsStrip** — Claret background, count-up numbers (14+, 24hr, 3)
3. **Marquee** — Scrolling ticker (light variant)
4. **ServicesPreview** — 3-column grid of 5 service cards + CTA card
5. **PhilosophyStrip** — Dark claret, drifting parallax text, italic quote
6. **Marquee** — Scrolling ticker (dark variant)
7. **MethodsIntro** — Cream light bg, CBT / ACT / CFT with large italic letters

### `/about` — About

Sections:
1. **Hero** — "Who / we are" with large bg `14` number ornament
2. **Felix Section** — 2-col grid: portrait + bio with credential pills
3. **Values** — 3 cards: Personalized, Cultural, Evidence-Based
4. **CTA** — Claret bg with drifting "Together" text

### `/why-it-works` — Why It Works

Sections:
1. **Hero** — "Why it / works" with diagonal gradient deco
2. **Marquee**
3. **Modalities** — Alternating left/right layout for CBT, ACT, CFT with visual boxes
4. **Evidence** — Dark claret, 4 stat cards
5. **Process** — 4-step timeline on cream-light bg
6. **CTA** — Radial gradient orb, call-to-action

---

## Key Components

### CustomCursor

Claret dot that follows mouse precisely. Lagging ring that has 8% lerp follow speed. On hover of any `a`, `button`, or `[data-hover]` element the ring grows to 64px.

```tsx
// Hover detection is automatic via MutationObserver
// To trigger hover on custom elements:
<div data-hover>Custom hoverable element</div>
```

### Loader

Appears on first visit only. Shows wordmark + progress bar + large counter. Slides up with `clip-path: inset(0 0 100% 0)` transition, revealing the page below.

```tsx
// In page.tsx
const [ready, setReady] = useState(false)
{!ready && <Loader onComplete={() => setReady(true)} />}
```

### AudioButton

Web Audio API ambient soundscape — no audio files required. 6 sine oscillators (root, fifth, octave, major third, sub-bass, shimmer) with LFO tremolo breathing. Delay-based reverb. Fades in over 3 seconds, out over 2.

```tsx
// Located in Nav — the ♪ button top-right
// State is self-contained in the component
```

### CallDrawer (FAB + Form)

The floating red pill button and the slide-in drawer are combined in one component. The drawer exposes a global function so other components can open it:

```tsx
// In any component:
onClick={() => (window as any).__openCallDrawer?.()}

// The drawer is already mounted at the page level:
<CallDrawer />

// Form state management is internal
// On submit: switches to success state
```

### Nav

Reads `usePathname()` to highlight the active pill. Becomes frosted glass on scroll via `ScrollTrigger`. Links use Next.js `router.push()` for client-side navigation.

```tsx
// Active state is automatic based on current route
// Pills: Home → / | About → /about | Why It Works → /why-it-works
```

### useLenis

Connects Lenis to GSAP's ticker so `ScrollTrigger` stays in sync.

```tsx
// Call once at the top level of each page:
useLenis()
```

---

## Animation Architecture

### Page Load Sequence

```
Loader mounts (claret-dark bg)
  → Progress bar 0→100% (2.2s, power2.inOut)
  → Count-up number 0→100
  → clip-path slide up (1.1s, power4.inOut)
    → Nav slides down (1s, power3.out)
    → FAB slides up (0.8s, power3.out)
    → Hero headline lines reveal (1.3s, power4.out, 0.13s stagger)
    → Sub text + CTAs fade in (0.9s, power3.out)
```

### Scroll-Triggered Reveals

All `.reveal-line .rl-inner` elements start at `translateY(110%)` and animate to `0` when the parent enters `80%` of the viewport.

```css
/* Already in globals.css */
.reveal-line { overflow: hidden; }
.reveal-line .rl-inner { transform: translateY(110%); }

/* GSAP animates .rl-inner to y:0 on scroll */
```

### Service Card Hover

```css
.service-card::after {
  /* Claret underline sweeps left to right */
  width: 0 → 100% on hover (0.6s, expo easing)
}
```

### Page Transitions

Handled by Next.js App Router. Each page re-runs its entrance animations on mount. For a custom overlay transition, install `next-view-transitions` or implement a shared context.

---

## Adding a Real Portrait Photo

Replace the abstract placeholder in `AboutPage.tsx`:

```tsx
// In the portrait-box div, replace the inner div with:
import Image from 'next/image'

<Image
  src="/felix.jpg"  // Place in /public/felix.jpg
  alt="Felix — Cognitive Behavioural Therapist"
  fill
  className="object-cover object-top"
/>
```

---

## Environment Setup (Production)

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel deploy

# Production deploy
vercel --prod
```

### Other Platforms (Netlify, Railway, etc.)

```bash
npm run build

# Output is in .next/
# Set environment: Node.js 18+
# Build command: npm run build
# Start command: npm start
```

---

## SEO & Metadata

Update `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Hands of Sympathy — Mental Health Support',
  description: 'Your description...',
  openGraph: {
    title: '...',
    description: '...',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}
```

Add `public/og-image.jpg` (1200×630px) for social sharing previews.

---

## Performance Notes

| Concern | Solution |
|---------|----------|
| FOUT    | `next/font` loads fonts — zero layout shift |
| LCP     | Hero text not an image — renders instantly |
| Audio   | Web Audio API — zero network requests |
| Cursor  | `will-change: transform` + `mix-blend-mode: multiply` |
| Scroll  | Lenis connected to GSAP ticker via `lagSmoothing(0)` |
| Images  | Use `next/image` with `priority` for above-fold images |

---

## Accessibility Notes

- All interactive elements are `<button>` or `<a>` — keyboard navigable
- Custom cursor has `aria-hidden="true"` — screen readers unaffected
- Loader and grain overlay are `aria-hidden="true"`
- Form in `CallDrawer` uses `required` and proper `<label>` associations
- Drawer has `role="dialog"`, `aria-modal="true"`, `aria-label`
- Nav has `aria-label="Main navigation"` and `role="tablist"` on pills
- `<main>` wraps all page content for landmark navigation
- Keyboard `Escape` closes the drawer

---

## Customization Checklist

- [ ] Replace Felix's portrait (see above)
- [ ] Update email address in `Footer.tsx` and `About` section
- [ ] Add real phone/contact details to `CallDrawer.tsx`
- [ ] Connect form to backend (Resend, Formspree, or API route)
- [ ] Add `public/og-image.jpg` for social sharing
- [ ] Update `layout.tsx` metadata with real URL
- [ ] Add Google Analytics or privacy-respecting analytics
- [ ] Review and update Privacy Policy / GDPR text

---

## Connecting the Form to a Backend

### Option A — API Route (Next.js)

```ts
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'website@handsofsympathy.co.uk',
    to: 'hello@handsofsympathy.co.uk',
    subject: `New call request from ${body.firstName}`,
    html: `<p>Name: ${body.firstName} ${body.lastName}</p>
           <p>Email: ${body.email}</p>
           <p>Phone: ${body.phone}</p>
           <p>Service: ${body.service}</p>
           <p>Time: ${body.time}</p>
           <p>Message: ${body.message}</p>`,
  })
  return NextResponse.json({ ok: true })
}
```

### Option B — Formspree (no backend)

```tsx
// In CallDrawer.tsx, change form action:
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

---

*Built for Awwwards SOTD consideration. Claret × cream — tender authority.*
