import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Eased progress (0 -> 1) of a tall wrapper scrolling past a sticky child.
 * The raw scroll ratio is the target; the returned value glides toward it,
 * which removes the step-per-scroll-event jitter and gives inertial motion.
 */
export function useStickyProgress<T extends HTMLElement>(smooth = 0.12) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let running = false;
    let current = 0;
    let target = 0;

    const readTarget = () => {
      const rect = el.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      target =
        distance <= 0
          ? rect.top <= 0
            ? 1
            : 0
          : Math.min(1, Math.max(0, -rect.top / distance));
    };

    const tick = () => {
      readTarget();
      const delta = target - current;
      current += delta * smooth;
      if (Math.abs(target - current) < 0.0004) current = target;
      setProgress(current);
      if (Math.abs(target - current) > 0.0002) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    readTarget();
    current = target;
    setProgress(target);

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [smooth]);

  return { ref, progress };
}

/** true once the element has entered the viewport (stays true). */
export function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Normalise a sub-range of a progress value into 0 -> 1. */
export function range(progress: number, start: number, end: number) {
  if (end <= start) return progress >= end ? 1 : 0;
  return Math.min(1, Math.max(0, (progress - start) / (end - start)));
}

/** Fades in then out across a window of the overall progress. */
export function band(progress: number, start: number, end: number, fade = 0.06) {
  const inP = range(progress, start, start + fade);
  const outP = 1 - range(progress, end - fade, end);
  return Math.min(inP, outP);
}

/** Smoothstep easing for gentler entrances. */
export function ease(t: number) {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
}

export const mix = (a: number, b: number, t: number) => a + (b - a) * t;