This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 🏗️ Component Architecture & Active vs. Archived Sections

To keep the repository clean and maintainable for future developers, all UI components are categorized into **Active Production Components** (wired directly into page routes) and **Archived Exploratory Components** (preserved in `src/_archive/` for reference).

### ✅ Active Production Sections (`src/components/sections/`)
These section components are actively rendered across live Next.js route endpoints (`/`, `/about`, `/services`, `/usecases`, `/contact`, etc.):

| Section Category | Active Component Files |
| :--- | :--- |
| **Home (`/`)** | `Hero.tsx`, `LogoTicker.tsx`, `ElevateSection.tsx`, `ParticleBrain.tsx`, `HowWeWork.tsx`, `WhyChooseUs.tsx`, `CircularTestimonials.tsx`, `FloatingTriangles.tsx`, `IndustriesHoverExpand.tsx`, `OurServices.tsx` |
| **About (`/about`)** | `AboutUs.tsx` |
| **Services (`/services`)** | `ServiceHero.tsx`, `ServiceList.tsx` |
| **Use Cases (`/usecases`)** | `CaseStudiesList.tsx`, `CaseStudyDetailContent.tsx` |
| **Layout (`src/components/layout/`)** | `Navbar.tsx`, `Footer.tsx` |

### 📦 Archived Exploratory Sections (`src/_archive/components/`)
During initial template evaluation and landing page prototyping, several alternative section designs and layouts were explored. To prevent code clutter and false positives during search/refactoring without losing valuable reference code, these unused components have been moved to `src/_archive/`:

* **Archived Home Sections (`src/_archive/components/home/`)**: `Pricing.tsx`, `Features.tsx`, `Testimonials.tsx`, `Stats.tsx`, `CTA.tsx`, `Showcase.tsx`, `HeroSection4.tsx`, `IndustriesCover.tsx`, `ReleaseTimeLine.tsx`
* **Archived About Sections (`src/_archive/components/about/`)**: `AboutHero.tsx`, `Team.tsx`
* **Archived Services Sections (`src/_archive/components/services/`)**: `ProfileTestimonialCarousel.tsx`
* **Archived Layout (`src/_archive/components/layout/`)**: `Sidebar.tsx`

*(Note: In accordance with **RCA-1.4**, 7 generic third-party library demo files matching `*-demo.tsx` have been permanently deleted from `src/components/ui/`. `Globe3D-demo-2.tsx` was preserved as it is actively rendered by `OurServices.tsx` on the Home page.)*
