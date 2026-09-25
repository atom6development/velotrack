import { tv } from "tailwind-variants";

const button = tv({
  base: "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-not-allowed disabled:opacity-60",
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary-hover",
      secondary: "border border-border bg-surface text-heading hover:bg-surface-hover",
      ghost: "text-muted hover:bg-surface-hover hover:text-heading",
    },
    size: {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-4 text-sm",
      icon: "size-11",
      "icon-sm": "size-9",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export default function Button({ variant, size, className, type = "button", ...props }) {
  return <button type={type} className={button({ variant, size, class: className })} {...props} />;
}
