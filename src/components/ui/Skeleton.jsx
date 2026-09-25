import { twMerge } from "tailwind-merge";

export default function Skeleton({ className }) {
  return (
    <div
      aria-hidden="true"
      className={twMerge("animate-pulse rounded-md bg-surface-active", className)}
    />
  );
}
