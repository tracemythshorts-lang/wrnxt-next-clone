"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Section } from "@/components/section";

export function Hero() {
  return (
    <Section className="flex min-h-screen items-center justify-center pt-32 pb-20">
      <div className="flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4"
        >
          <Sparkles className="h-4 w-4" />
          <span>Now taking new projects for 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-hero md:text-hero font-bold tracking-tight text-white max-w-4xl"
        >
          Building <span className="text-gradient-brand">Next-Gen</span> Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          WR Next Digital is a premium agency specializing in building high-performance 
          SaaS products and marketing sites that convert visitors into loyal customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <Button size="lg" className="rounded-full px-8 h-14 text-lg group bg-white text-zinc-950 hover:bg-zinc-200">
            Let&apos;s build something
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-lg text-zinc-300 hover:text-white">
            View our work
          </Button>
        </motion.div>

        {/* Dashboard Preview or Abstract Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-20 w-full max-w-5xl rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="rounded-xl border border-zinc-700/30 bg-zinc-950/80 aspect-[16/9] flex items-center justify-center">
            {/* Realistic visual placeholder */}
            <div className="flex flex-col items-center gap-4 text-zinc-600">
              <div className="h-12 w-12 rounded-full border-2 border-zinc-800 animate-pulse" />
              <p className="text-sm font-mono tracking-widest uppercase">System Initialization Complete</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
