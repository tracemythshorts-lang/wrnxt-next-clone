import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="w-full relative py-24 md:py-32 lg:py-48 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 px-3 py-1 text-sm font-medium">
            <span className="flex h-2 w-2 rounded-full bg-black dark:bg-white mr-2"></span>
            Now open for new projects
          </div>
          
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">future</span> of digital.
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl leading-relaxed">
            We are a digital product studio crafting premium web applications for ambitious modern companies. Fast, secure, and beautiful.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-black px-8 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-gray-800 hover:scale-[1.02] dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Start a project
            </Link>
            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-gray-200 bg-white px-8 py-2 text-sm font-medium shadow-sm transition-all hover:bg-gray-50 hover:scale-[1.02] dark:border-gray-800 dark:bg-black dark:hover:bg-gray-900"
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
