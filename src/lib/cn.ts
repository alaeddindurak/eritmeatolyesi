import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names conditionally (clsx) and resolves conflicting Tailwind
 * utilities so the last one wins (tailwind-merge), e.g. cn("p-2", "p-4") -> "p-4".
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
