# ThatGuyCodes — Engineering Roadmap & TODO

## 🎯 High-Priority Roadmap

### 1. Copy Calibration & Positioning Authenticity
- [ ] **Tone down speculative Stitch placeholder claims**: Replace fictional metrics (e.g. "14+ years", "120M+ MAU", "\$14.2M saved") with Theodore's genuine, defensible achievements and real metrics from eThebe, BOFINET, UASF/BOCRA, and BITRI.
- [ ] Align headlines with authentic value: Full-stack software engineering, TDD, cloud architecture, and telecommunications infrastructure.

---

### 2. CMS Integration: Directus Headless CMS
- [ ] **Directus Setup**:
  - Deploy self-hosted Directus or Directus Cloud instance.
  - Connect PostgreSQL database instance for persistent schema storage.
- [ ] **Content Modeling**:
  - Collections: `profiles`, `skills`, `case_studies`, `services`, `testimonials`, `advisory_bookings`.
  - Roles & Permissions: Public read access for published profiles, authenticated talent editing permissions.
- [ ] **Next.js Integration**:
  - Integrate `@directus/sdk` into Next.js.
  - Switch static data arrays (`portfolio.ts`) to dynamic Directus API fetches with Incremental Static Regeneration (ISR) or on-demand cache revalidation.

---

### 3. Edge Delivery & CDN: Cloudflare Integration
- [ ] **DNS & Domain Management**:
  - Delegate `thatguycodes.com` / `thatguycodes.io` nameservers to Cloudflare.
  - Configure Full (Strict) SSL/TLS encryption.
- [ ] **Edge Caching & Performance**:
  - Configure Cloudflare Caching rules for static assets (`/_next/static/*`, images, fonts).
  - Configure Tiered Cache and Brotli compression.
- [ ] **Edge Workers / Cloudflare Pages Migration (Optional)**:
  - Evaluate migrating GitHub Pages static export to Cloudflare Pages for instant previews and global sub-20ms edge delivery.

---

### 4. Platform Evolution: Multi-Talent ICT Consulting Marketplace
Transform `thatguycodes` from a solo consulting landing page into a curated platform where designers, engineers, system architects, and ICT professionals can showcase their skills and secure high-value consulting contracts.

- [ ] **Multi-Tenant User & Profile Architecture**:
  - Directus auth with role-based access for talent (`engineer`, `designer`, `architect`, `product_manager`).
  - Talent onboarding wizard: bio, hourly/project consulting rates, verified skills matrix, case studies, and GitHub/Dribbble/LinkedIn links.
  - Public directory with faceted filtering: role, skill tags, availability, and regional timezone.
- [ ] **Client Inbound & Booking Engine**:
  - Client request routing: match client project scopes (e.g., "Full-Stack React/Node", "Cloud Security Audit", "UI/UX Design") with verified talent profiles.
  - Direct booking and intake flow with calendar integrations (Cal.com / Google Calendar).
- [ ] **Quality & Verification Signals**:
  - Technical vetting badges, verified code portfolios, and review testimonials from completed client engagements.
