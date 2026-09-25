import { twMerge } from "tailwind-merge";

export default function Logo({ className }) {
  return (
    <span className={twMerge("inline-flex items-center gap-2", className)}>
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" className="stroke-brand-steel" strokeWidth="4" />
        <circle cx="18.5" cy="14.5" r="6" className="fill-brand" />
      </svg>
      <span className="text-base font-extrabold tracking-tight italic">
        <span className="text-brand-steel">VELO</span>
        <span className="text-brand">TRACK</span>
      </span>
    </span>
  );
}
