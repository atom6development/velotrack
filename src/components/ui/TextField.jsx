import { twMerge } from "tailwind-merge";

export default function TextField({ id, label, className, inputClassName, trailing, ...props }) {
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-heading">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          className={twMerge(
            "h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-heading placeholder:text-muted focus:border-brand focus:outline-none",
            trailing && "pr-12",
            inputClassName,
          )}
          {...props}
        />
        {trailing && <div className="absolute top-1/2 right-1 -translate-y-1/2">{trailing}</div>}
      </div>
    </div>
  );
}
