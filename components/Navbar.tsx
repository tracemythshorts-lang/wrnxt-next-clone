"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "/#hero" },
  { label: "About",    href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Insights", href: "/#blog" },
  { label: "Team",     href: "/#team" },
  { label: "Contact",  href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node) && !toggleRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-2 shadow-lg"
          : "bg-transparent py-4",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center group transition-all">
          <img
            src="https://www.wrnxt.com/assets/img/wrnxt%20Logo_1.png"
            alt="WRNXT Logo"
            className="h-12 md:h-16 w-auto group-hover:scale-105 transition-transform duration-500 filter drop-shadow-lg"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 ml-auto">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-primary transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 ml-8">
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        <button
          ref={toggleRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={[
          "lg:hidden fixed inset-x-0 top-[72px] bg-background border-b border-border p-6 transition-all duration-300 transform",
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-center font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

