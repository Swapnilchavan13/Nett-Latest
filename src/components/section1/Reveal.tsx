import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/use-scroll-narrative";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  threshold = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-visible={inView ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function HairRule({ className }: { className?: string }) {
  return <span className={cn("block h-px w-16 bg-current opacity-25", className)} />;
}