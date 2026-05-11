import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full relative py-24 md:py-32 lg:py-48 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#0f172a] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-4xl mx-auto space-y-10 z-10">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-zinc-300">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#7CC820] mr-2 animate-pulse"></span>
            Now open for new projects
          </div>
          
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D3DAC] to-[#7CC820]">future</span> of digital.
          </h1>
          
          <p className="mx-auto max-w-2xl text-xl text-zinc-400 sm:text-2xl leading-relaxed">
            We are a digital product studio crafting premium web applications for ambitious modern companies. Fast, secure, and beautiful.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#3D3DAC] to-[#7CC820] px-10 py-2 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[#3D3DAC]/20"
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md px-10 py-2 text-base font-bold text-white transition-all duration-300 hover:bg-zinc-800 hover:scale-105"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="w-full py-12 border-y border-gray-100 dark:border-gray-900 bg-gray-50/50 dark:bg-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-50 grayscale">
            {/* Simple logo placeholders using text for a clean look */}
            <div className="text-xl font-bold font-serif">ACME Corp</div>
            <div className="text-xl font-bold tracking-tighter">Global<span className="font-light">Tech</span></div>
            <div className="text-xl font-bold uppercase italic">Vertex</div>
            <div className="text-xl font-bold tracking-widest">NEXUS</div>
          </div>
        </div>
      </section>
    </div>
  );
}
