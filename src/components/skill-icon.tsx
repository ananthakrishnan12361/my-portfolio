"use client";

import * as simpleIcons from "simple-icons";
import { cn } from "@/lib/utils";

interface SkillIconProps {
  slug: string;
  name: string;
  className?: string;
  size?: number;
}

function getIcon(slug: string) {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simpleIcons;
  return simpleIcons[key] as { path: string; hex: string; title: string } | undefined;
}

function isColorDark(hex: string): boolean {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.45;
}

export function SkillIcon({ slug, name, className, size = 24 }: SkillIconProps) {
  const icon = getIcon(slug);

  if (!icon) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary",
          className
        )}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </div>
    );
  }

  const needsDarkModeInvert = isColorDark(icon.hex);

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        needsDarkModeInvert && "rounded-xl dark:bg-white/95 dark:p-2"
      )}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        aria-label={name}
        fill={`#${icon.hex}`}
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    </div>
  );
}

interface ProviderIconProps {
  slug: string;
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

export function ProviderIcon({
  slug,
  name,
  color,
  size = 32,
  className,
}: ProviderIconProps) {
  const icon = getIcon(slug);

  if (!icon) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-primary/10 font-bold text-primary",
          className
        )}
        style={{ width: size, height: size, fontSize: size * 0.4 }}
      >
        {name.charAt(0)}
      </div>
    );
  }

  const needsDarkModeInvert = isColorDark(
    color ? color.replace("#", "") : icon.hex
  );

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl",
        needsDarkModeInvert && "rounded-xl dark:bg-white/95 dark:p-1.5"
      )}
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={cn("shrink-0", className)}
        aria-label={name}
        fill={color ? color : `#${icon.hex}`}
      >
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    </div>
  );
}
