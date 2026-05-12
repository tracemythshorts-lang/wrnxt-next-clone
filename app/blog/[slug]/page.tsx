import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BLOG_POSTS = {
  "reputation-management": {
    title: "The Strategic Impact of Reputation Management",
    date: "May 12, 2026",
    content: "Online Reputation Management (ORM) is no longer just about suppressing negative reviews. In 2026, it's about architecting a digital identity that proactively builds trust and signals authority. At WRNXT, we leverage advanced monitoring tools and strategic content placement to ensure your brand remains resilient against digital volatility. A 1% increase in positive sentiment can lead to a 5-10% boost in conversion rates, making ORM a mission-critical investment for any growth-oriented enterprise.",
  },
  "modern-web-architecture": {
    title: "Next.js 16: The New Standard for Performance",
    date: "May 10, 2026",
    content: "The web is getting faster, and users expect instant interaction. Next.js 16 introduces revolutionary server-side rendering optimizations that allow for near-zero TTI (Time to Interactive). Our engineering team at WRNXT specializes in migrating legacy monolithic architectures to modular, high-velocity Next.js ecosystems. This shift not only improves SEO rankings but also significantly reduces bounce rates and server costs, providing a superior foundation for digital scale.",
  },
  "marketing-roi": {
    title: "Driving ROI with Algorithmic Marketing",
    date: "May 08, 2026",
    content: "Traditional marketing is being replaced by data-driven algorithmic strategies. By integrating predictive analytics with technical SEO, WRNXT helps businesses identify emerging market gaps before the competition. Our approach focuses on high-intent keyword acquisition and viral-engineered content distribution. We don't just drive traffic; we engineer conversion pipelines that deliver measurable ROI and long-term market dominance.",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug as keyof typeof BLOG_POSTS];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black">Post Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-primary/30">
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <Link href="/#blog" className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-12 hover:-translate-x-2 transition-transform">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          Back to Insights
        </Link>
        
        <article className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">{post.date}</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white">
              {post.title}
            </h1>
          </div>
          
          <div className="h-1 w-24 bg-primary"></div>
          
          <div className="text-xl md:text-2xl text-zinc-400 font-medium leading-relaxed space-y-8">
            <p>{post.content}</p>
            <p>At WRNXT, we believe that digital excellence is a combination of superior engineering and strategic foresight. Our team of experts is dedicated to helping you navigate the complex digital landscape with confidence and precision.</p>
          </div>
          
          <div className="pt-16 border-t border-zinc-800">
            <h4 className="text-white font-black text-xl mb-6 italic">"Engineering the future of digital scale, one mission-critical ecosystem at a time."</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full"></div>
              <div>
                <p className="font-bold text-white leading-none">WRNXT Editorial</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Technical Strategy Group</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
