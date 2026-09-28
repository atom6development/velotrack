import { tv } from "tailwind-variants";
import logo from "@/assets/brand/velotrack-logo.png";

const logoImage = tv({
  base: "w-auto shrink-0 select-none",
  variants: {
    size: {
      md: "h-7",
      lg: "h-10",
    },
  },
  defaultVariants: { size: "md" },
});

const DIMENSIONS = {
  md: { width: 105, height: 28 },
  lg: { width: 150, height: 40 },
};

export default function Logo({ size = "md", className }) {
  return (
    <img
      src={logo}
      alt="Velotrack"
      {...DIMENSIONS[size]}
      draggable="false"
      className={logoImage({ size, class: className })}
    />
  );
}
