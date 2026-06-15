import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSimpleIcon(slug: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const icons = require("simple-icons");
    const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
    return icons[key] ?? null;
  } catch {
    return null;
  }
}
