import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Dark card with a soft border; the base for work and contact cards. */
export function Card({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("rounded-card border-line bg-card border p-6 shadow-sm", className)} {...props} />;
}
