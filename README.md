# thatguycodes.github.io

Modern developer portfolio and engineering showcase for **Letlhogonolo Theodore Obonye** (Software Engineer & Cloud Architect).

Built with **[Next.js 15](https://nextjs.org/)** (App Router, Static Export), styled with **[Sahara UI (`sahara-ui`)](https://github.com/thatguycodes/sahara-ui)** and **Tailwind CSS**, featuring an interactive **Three.js** 3D WebGL centerpiece. Deployed automatically to **GitHub Pages** via GitHub Actions.

---

## ⚡ Highlights

- **Sahara UI Design System (`sahara-ui`)**:
  - **Theming**: Full dual-theme architecture supporting **Sahara Nocturne** (dark basalt `#161311`, warm glowing amber `#ffba56`, terracotta accents) and **Sahara Solstice** (warm desert sand `#fff8f5`, terracotta `#c86d3b`).
  - **Component Primitives**: Uses official `sahara-ui/web` primitives including `Button`, `Badge`, `Card`, `Input`, `Textarea`, `Label`, and semantic theme tokens.
- **Privacy & Accessibility First (WCAG AA)**:
  - **Email Privacy Protected**: Email address is kept private and unexposed to scrapers; inquiries are submitted through an accessible, interactive contact form with real-time feedback.
  - **High-Contrast Typography**: Complies with WCAG AA/AAA contrast ratios in both light and dark modes.
  - **Keyboard & Screen Reader Accessible**: Visible focus rings (`focus-visible:ring-2`), semantic ARIA labels, landmark regions, and status announcement live regions.
  - **Motion Sensitivity**: Honors `prefers-reduced-motion` across CSS transitions, animations, and the Three.js 3D WebGL loop.
- **Interactive Three.js 3D Centerpiece**:
  - Real-time WebGL faceted crystal (Icosahedron with transmission physics), glowing emissive octahedron core, orbital torus ring, and floating dust particle cloud.
  - Interactive mouse parallax tracking with smooth lerp damping and automatic fallback to `WireframeCanvas` on non-WebGL environments.
- **Architectural Aesthetic**:
  - Signature rotated sticker badges with subtle hover reset.
  - Custom SVG corner notches (`Notch.tsx`) creating smooth inverted rounded transitions between sections.
  - Subtle technical telemetry grid overlays.
- **Static Export Performance**:
  - Built with `output: 'export'` for zero-server hosting directly on GitHub Pages.
- **Comprehensive Showcase**:
  - **Hero**: Telemetry status badges, massive signature typography, and live 3D crystal backdrop.
  - **About**: Identity verification HUD and 5 core engineering domains.
  - **Projects**: Bento grid case studies with dynamic category chips and external preview badges.
  - **Experience**: Career milestones and systems leadership timeline.
  - **Contact**: Interactive dispatch form with instant validation and verified social links.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static HTML Export)
- **Component Library**: [Sahara UI (`sahara-ui`)](https://github.com/thatguycodes/sahara-ui)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) (WebGL / GLSL)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: GitHub Pages via GitHub Actions

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` to preview in your browser.

### 3. Build & Static Export
```bash
npm run build
```
Generates a production static export in the `out/` directory ready for deployment.

---

## ⚙️ Automated GitHub Pages Deployment

1. Commit and push changes:
   ```bash
   git add .
   git commit -m "feat: adopt sahara-ui component library naming and styling"
   git push origin master
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every commit to `master` automatically triggers `.github/workflows/deploy.yml` to build and publish your site to `https://thatguycodes.github.io`.

---

## 📝 Updating Portfolio Data

All personal details, career history, technical skills, and featured projects are centralized in:
- `src/data/portfolio.ts`
