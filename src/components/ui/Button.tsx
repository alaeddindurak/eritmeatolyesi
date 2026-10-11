import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-on-brand hover:bg-brand-hover",
  outline: "border border-line bg-card text-ink hover:border-brand hover:text-brand",
};

/** Link styled as a button (all our buttons navigate; none submit forms). */
export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
