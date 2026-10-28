# thatguycodes.github.io

Modern developer portfolio and engineering showcase for **Letlhogonolo Theodore Obonye** (Software Engineer & Cloud Architect Aspirant).

Built with **[Next.js 15](https://nextjs.org/)** (App Router), styled with **[Sahara UI (@thatguycodes/design-system)](https://www.npmjs.com/package/@thatguycodes/design-system)** and **Tailwind CSS**, and deployed automatically to **GitHub Pages** via GitHub Actions.

---

## ⚡ Highlights

- **Sahara UI Design System**: Custom Desert Modernism design language with Sahara Nocturne (dark basalt, glowing amber, terracotta accents) and Solstice (warm sand) palettes.
- **Component Suite**: Leverages `@thatguycodes/design-system` primitives including `Button`, `Badge`, `Card`, `Tabs`, `Input`, `Textarea`, and theme variables.
- **Static Export Performance**: Built with `output: 'export'` for zero-server hosting directly on GitHub Pages.
- **Comprehensive Showcase**:
  - Hero with status badge, headline, and Sahara glow effects.
  - About section highlighting BSc (Hons) Computer Science and Test-Driven Development philosophy.
  - Interactive Skills matrix with category tabs (Backend, Frontend, Cloud & DevOps, Databases).
  - Career Experience timeline featuring milestones at ConnectUS ICT, UASF/BOCRA, BOFINET, and BITRI.
  - Featured projects with tags, GitHub source, and live deployment links.
  - Interactive contact section and mail integration.
  - Dark / Light theme toggle.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- **Component Library**: [`@thatguycodes/design-system`](https://www.npmjs.com/package/@thatguycodes/design-system) (Sahara UI)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
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
Generates a production static export in the `out/` directory.

---

## ⚙️ Automated GitHub Pages Deployment

1. Commit and push changes:
   ```bash
   git add .
   git commit -m "feat: migrate to Next.js with Sahara UI and GitHub Pages static export"
   git push origin master
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every commit to `master` automatically triggers the workflow in `.github/workflows/deploy.yml` to build and publish your site to `https://thatguycodes.github.io`.

---

## 📝 Updating Portfolio Data

All personal details, career history, technical skills, and featured projects are centralized in:
- `src/data/portfolio.ts`
