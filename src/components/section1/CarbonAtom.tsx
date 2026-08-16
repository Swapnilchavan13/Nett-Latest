import logo from "@/assets/nettzero-logo.asset.json";
import { cn } from "@/lib/utils";

/**
 * Carbon-atom motif drawn from the NettZero mark: a nucleus, an orbital ring
 * and six electrons (carbon's six protons / the six systems of Section 1).
 */
export function CarbonAtom({
  className,
  spin = true,
}: {
  className?: string;
  spin?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-full w-full overflow-visible", className)}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <circle cx="50" cy="50" r="24" fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.2" />
      <g className={spin ? "atom-orbit" : undefined}>
        {Array.from({ length: 3 }, (_, i) => {
          const a = ((-90 + 120 * i) * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={50 + Math.cos(a) * 34}
              cy={50 + Math.sin(a) * 34}
              r="2.6"
              fill="currentColor"
              opacity="0.75"
            />
          );
        })}
      </g>
      <g className={spin ? "atom-orbit-slow" : undefined}>
        {Array.from({ length: 3 }, (_, i) => {
          const a = ((30 + 120 * i) * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={50 + Math.cos(a) * 24}
              cy={50 + Math.sin(a) * 24}
              r="1.4"
              fill="currentColor"
              opacity="0.4"
            />
          );
        })}
      </g>
      <circle className={spin ? "atom-nucleus" : undefined} cx="50" cy="50" r="9" fill="currentColor" />
    </svg>
  );
}

/** The NettZero wordmark. `invert` flips the black mark for dark surfaces. */
export function NettZeroMark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <img
      src={logo.url}
      alt="NettZero"
      width={500}
      height={140}
      loading="lazy"
      className={cn("h-auto w-full", invert && "invert", className)}
      style={{ mixBlendMode: invert ? "screen" : "multiply" }}
    />
  );
}