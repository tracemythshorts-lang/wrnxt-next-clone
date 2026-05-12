# WRNXT Digital Engineering

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify)

**WRNXT Digital Engineering** is a premium, high-velocity digital agency website built with modern web technologies. This project serves as a conversion-optimized, CTO-focused platform designed to highlight enterprise-grade software architecture, digital marketing, and IT governance services.

## ✨ Key Features

- **Modern Architecture:** Built on **Next.js 16 (App Router)** utilizing React Server Components for optimal performance and SEO.
- **Elite Design System:** Highly polished UI featuring glassmorphism, depth-based shadow hierarchies, ambient glows, and fluid micro-animations powered by **Tailwind CSS**.
- **High-Conversion Lead Generation:** 
  - Interactive "Service Ecosystem" matrix that engages decision-makers.
  - Robust **Netlify Forms** integration for seamless lead capture.
  - Quick-action footer with intelligent `tel:`, `mailto:`, and WhatsApp deep links.
- **Advanced SEO:** 
  - Implementation of **JSON-LD Schema** (`LocalBusiness`) for enhanced local search visibility.
  - Semantic HTML5 structure and dynamic metadata routing.
- **Fully Responsive:** Flawless scaling from mobile devices to ultra-wide desktop displays.
- **Dark Mode Ready:** Intelligent color palette that adapts seamlessly to user system preferences.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Icons & SVGs:** Custom inline SVG components

## 📂 Project Structure

```text
wrnxt-next-clone/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── blog/             # Dynamic blog/insights routing
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout, metadata, and JSON-LD schema
│   └── page.tsx          # Main landing page (Hero, Services, Contact, etc.)
├── components/           # Reusable UI components
│   ├── Navbar.tsx        # Sticky, glassmorphism navigation
│   └── Footer.tsx        # Comprehensive footer with dynamic contact actions
├── public/               # Static assets (favicons, verification files)
├── netlify.toml          # Netlify build and deployment configuration
├── tailwind.config.ts    # Tailwind CSS design system tokens
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
Ensure you have **Node.js** (v18.17.0 or higher) installed on your local machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd wrnxt-next-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚢 Deployment

This project is optimized for deployment on **Netlify**. 

1. Connect your repository to Netlify.
2. The `netlify.toml` file will automatically configure the build settings.
3. Ensure the **Netlify Forms** feature is enabled in your site settings to capture incoming leads from the contact section.

---
*Engineered for Scale. Designed for Dominance.*
