import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-primary/10",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-noise">
            {/* Background Gradients */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
              <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[120px]" />
              <div className="absolute top-[20%] -right-[10%] h-[30%] w-[30%] rounded-full bg-blue-500/5 blur-[100px]" />
              <div className="absolute -bottom-[10%] left-[20%] h-[40%] w-[40%] rounded-full bg-zinc-500/5 blur-[120px]" />
            </div>
            
            <div className="relative z-10 flex flex-1 flex-col">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
