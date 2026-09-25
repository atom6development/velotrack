import { useState } from "react";
import { tv } from "tailwind-variants";
import { formatInitials } from "@/lib/format/number";

const avatar = tv({
  base: "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-steel font-semibold text-white ring-2 ring-border",
  variants: {
    size: {
      sm: "size-8 text-xs",
      md: "size-10 text-sm",
    },
  },
  defaultVariants: { size: "sm" },
});

const PIXELS = { sm: 32, md: 40 };

export default function Avatar({ src, name, size = "sm", className }) {
  const [hasError, setHasError] = useState(false);
  const showImage = src && !hasError;

  return (
    <span className={avatar({ size, class: className })}>
      {showImage ? (
        <img
          src={src}
          alt={`Foto de ${name}`}
          width={PIXELS[size]}
          height={PIXELS[size]}
          onError={() => setHasError(true)}
          className="size-full object-cover"
        />
      ) : (
        <span aria-hidden="true">{formatInitials(name)}</span>
      )}
    </span>
  );
}
