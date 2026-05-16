import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-display-hero",
        "text-headline-lg",
        "text-headline-md",
        "text-body-lg",
        "text-body-md",
        "text-code-sm",
        "text-stat-value",
        "text-label-caps",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
