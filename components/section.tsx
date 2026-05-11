import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  isFullWidth?: boolean;
}

export function Section({
  children,
  className,
  id,
  containerClassName,
  isFullWidth = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 md:py-32 overflow-hidden", className)}
    >
      <div
        className={cn(
          "mx-auto px-4 md:px-6",
          isFullWidth ? "max-w-full" : "max-w-7xl",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
