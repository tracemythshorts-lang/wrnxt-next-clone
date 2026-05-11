import Link from "next/link";

const SERVICES = [
  { label: "Technical SEO",        href: "/services/technical-seo" },
  { label: "AI Automation",        href: "/services/ai-automation" },
  { label: "Web Development",      href: "/services/web-development" },
  { label: "Branding",             href: "/services/branding" },
  { label: "Performance Marketing",href: "/services/performance-marketing" },
  { label: "Local SEO",            href: "/services/local-seo" },
];

const RESOURCES = [
  { label: "Blog",         href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process",      href: "/process" },
  { label: "About Us",     href: "/about" },
  { label: "Careers",      href: "/careers" },
  { label: "Contact",      href: "/contact" },
];

const CITIES = [
  { label: "Digital Agency Bangalore",  href: "/locations/bangalore" },
  { label: "Digital Agency Mangalore",  href: "/locations/mangalore" },
  { label: "Digital Agency Udupi",      href: "/locations/udupi" },
  { label: "Digital Agency Mysore",     href: "/locations/mysore" },
  { label: "Digital Agency Karnataka",  href: "/locations/karnataka" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/wrnext",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.98 0H13v2.19h.07C13.78 8.9 15.57 8 17.5 8c5.26 0 6.23 3.46 6.23 7.96V24h-5v-7.17c0-1.71-.03-3.9-2.37-3.9-2.38 0-2.74 1.86-2.74 3.78V24h-5V8z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/wrnextdigital",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/wrnextdigital",
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.265.058-1.645.069-4.849.069s-3.584-.011-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.085-1.856-.601-3.698-1.942-5.039C20.698.673 18.856.157 17 .072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950"
    >
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Column 1 — Brand overview (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              aria-label="WR Next Digital — home"
              className="inline-flex items-center hover:opacity-75 transition-opacity"
            >
              <img
                src="/logo.png"
                alt="WRNXT Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              A premium digital growth agency helping ambitious brands across India achieve measurable results through Technical SEO, AI Automation, and Web Development.
            </p>
            <address className="not-italic space-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <p>
                <a href="mailto:hello@wrnext.in" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  hello@wrnext.in
                </a>
              </p>
              <p>Bangalore, Karnataka, India</p>
            </address>
            {/* Socials */}
            <nav aria-label="Social media links" className="flex gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WR Next on ${label}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-150"
                >
                  {icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white mb-5">
              Services
            </h2>
            <nav aria-label="Services navigation">
              <ul className="space-y-2.5" role="list">
                {SERVICES.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white mb-5">
              Resources
            </h2>
            <nav aria-label="Resources navigation">
              <ul className="space-y-2.5" role="list">
                {RESOURCES.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4 — Locations (city SEO links) */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-white mb-5">
              We Serve
            </h2>
            <nav aria-label="Location-based services">
              <ul className="space-y-2.5" role="list">
                {CITIES.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} WR Next Digital. All rights reserved.
          </p>
          <nav aria-label="Legal navigation" className="flex gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
