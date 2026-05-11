import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable max-width container.
 * Wraps content with consistent horizontal padding and centers it.
 */
export default function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Section wrapper: adds vertical padding + optional bottom border.
 */
export function Section({
  as: Tag = "section",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("py-20 md:py-28 lg:py-32", className)}>
      {children}
    </Tag>
  );
}
