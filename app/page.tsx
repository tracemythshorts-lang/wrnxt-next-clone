import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { Section } from "@/components/section";
import { Zap, Shield, Rocket, Globe } from "lucide-react";

const FEATURES = [
  {
    title: "Performance First",
    description: "Every pixel is optimized for speed, ensuring sub-second load times and perfect Lighthouse scores.",
    icon: Zap,
  },
  {
    title: "Secure by Design",
    description: "Advanced security protocols and scalable infrastructure integrated from the ground up.",
    icon: Shield,
  },
  {
    title: "Conversion Focused",
    description: "We don't just build sites; we build growth engines designed to maximize user engagement.",
    icon: Rocket,
  },
  {
    title: "Global Reach",
    description: "Edge-delivered content ensures your brand looks stunning and performs perfectly worldwide.",
    icon: Globe,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      <Hero />

      {/* Features Section */}
      <Section id="services" className="bg-zinc-950/30">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-display text-white">Engineered for Excellence</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We combine high-end aesthetics with cutting-edge engineering to create 
            digital products that stand out in a crowded market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <div 
              key={i}
              className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Content Section / About */}
      <Section id="work" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-display text-white">Why WR Next Digital?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white">Expert Engineering</h4>
                  <p className="text-zinc-400">Senior architects with years of experience in SaaS and Enterprise solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white">Tailored Solutions</h4>
                  <p className="text-zinc-400">We don&apos;t use templates. Every project is built from scratch for your specific needs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-zinc-500/20 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white">Continuous Innovation</h4>
                  <p className="text-zinc-400">Leveraging the latest technologies like Next.js 15, AI integration, and Edge computing.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800">
             <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col p-6 gap-4">
                   <div className="h-4 w-1/2 bg-zinc-800 rounded-full animate-pulse" />
                   <div className="h-4 w-3/4 bg-zinc-800 rounded-full animate-pulse" />
                   <div className="flex-1 rounded-lg bg-zinc-800/50 mt-4" />
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Simple Footer Placeholder */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-sm">
            © 2026 WR Next Digital. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
