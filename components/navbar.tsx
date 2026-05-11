"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(9, 9, 11, 0.8)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
  );

  return (
    <motion.header
      style={{ 
        backgroundColor,
        backdropFilter: backdropBlur,
        borderColor: borderOpacity 
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-brand p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-zinc-950 text-white font-bold text-sm">
              WR
            </div>
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-primary transition-colors">
            WR Next<span className="text-zinc-500">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-zinc-400"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" className="rounded-full px-6 group bg-white text-zinc-950 hover:bg-zinc-200">
            Start a Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="flex md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-zinc-800" />
            <Button className="w-full rounded-full">
              Start a Project
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
