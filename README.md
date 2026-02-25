# Hands of Sympathy — Awwwards-Level Mental Health Website

A cinematic, editorial-luxury website for Hands of Sympathy built with **Next.js 14**, **GSAP**, and **Lenis Smooth Scroll**.

## Design Direction: "Tender Monolith"

- **Palette**: Warm Ivory `#F4EFE6` · Deep Forest `#1C2B1E` · Burnished Copper `#B86B3A` · Sage `#7A8C7E`
- **Typography**: Cormorant Garamond (display/editorial serif) + Instrument Sans (body)
- **Aesthetic**: Editorial luxury meets warm humanism — massive serif headlines, film grain overlay, custom cursor, cinematic scroll choreography
- **Animations**: GSAP ScrollTrigger reveals, Lenis inertial scroll, custom cursor with ring, count-up statistics, horizontal marquee, clip-path image reveals, parallax layers

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| `Next.js 14` | App Router, SSR, font optimization |
| `GSAP 3.12` | All animations & ScrollTrigger |
| `Lenis` | Silky smooth inertial scrolling |
| `Tailwind CSS` | Utility styling |
| `TypeScript` | Type safety |
| `Cormorant Garamond` | Display typeface (Google Fonts) |
| `Instrument Sans` | Body typeface (Google Fonts) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, grain
│   ├── page.tsx            # Main page orchestrator
│   └── globals.css         # Base styles, cursor, grain, animations
├── components/
│   ├── CustomCursor.tsx    # Magnetic cursor with ring
│   ├── Loader.tsx          # Intro loading screen (count-up + slide out)
│   ├── Nav.tsx             # Sticky nav with scroll state
│   ├── Hero.tsx            # Full-screen hero with massive typography
│   ├── Marquee.tsx         # Scrolling ticker divider
│   ├── Services.tsx        # Services grid with hover reveals
│   ├── Philosophy.tsx      # Dark section with parallax text + stats
│   ├── About.tsx           # Felix profile + credential badges + methods
│   ├── Contact.tsx         # Contact form with animation
│   └── Footer.tsx          # Footer with brand info
└── hooks/
    └── useLenis.ts         # Lenis + GSAP ScrollTrigger connection
```

---

## Animation Architecture

### Loading Sequence
1. `Loader` component mounts with forest-green full-screen overlay
2. Progress bar animates from 0→100% with count-up number
3. Overlay slides up revealing the page beneath
4. Nav fades down from top
5. Hero lines reveal one by one via clip-path

### Scroll-Triggered Reveals
- **Text lines**: `translateY(110%)` → `0` with `power4.out` easing
- **Service cards**: `opacity:0, y:60` → natural with stagger
- **Portrait**: `clip-path: inset(0 100% 0 0)` → full reveal
- **Statistics**: Count-up animation triggered on viewport entry

### Continuous Animations
- **Grain**: CSS keyframe animation shifting SVG noise texture
- **Decorative circle**: Breathing scale loop (`gsap.to` yoyo)
- **Marquee**: CSS animation `translateX(-50%)`
- **Scroll indicator**: Bounce animation

### Lenis Configuration
```ts
new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo ease
  smoothWheel: true,
  wheelMultiplier: 0.8,
})
```

---

## Customization

### Adding a Real Portrait Photo
In `About.tsx`, replace the abstract placeholder div with:
```tsx
import Image from 'next/image'
<Image src="/felix-portrait.jpg" alt="Felix" fill className="object-cover" />
```

### GSAP Club Plugins
For enhanced text animations, install **SplitText** (GSAP Club):
```bash
# After getting a GSAP Club membership:
npm install gsap
```
Then import in components:
```ts
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)
```

### Colors
Edit `tailwind.config.js` and `globals.css` CSS variables.

### Content
All content is in the component files. Update text directly in each component.

---

## Performance Notes

- All GSAP animations use `will-change` internally for GPU acceleration
- Lenis is connected to GSAP ticker to sync with `ScrollTrigger`
- `dynamic()` import for cursor prevents SSR hydration issues
- Google Fonts loaded via `next/font` for zero layout shift

---

## Deployment

Deploy to Vercel:
```bash
npx vercel deploy
```

Or any Node.js host that supports Next.js.

---

*Designed for Awwwards SOTD submission — editorial luxury meets therapeutic warmth.*
