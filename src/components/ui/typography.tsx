import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva("text-on-surface", {
  variants: {
    type: {
      "display-hero": "font-display-hero text-display-hero italic tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]",
      "headline-lg": "font-headline-lg text-headline-lg",
      "headline-md": "font-headline-md text-headline-md",
      "body-lg": "font-body-lg text-body-lg",
      "body-md": "font-body-md text-body-md",
      "code-sm": "font-code-sm text-code-sm",
      "label-caps": "font-label-caps text-label-caps",
      "stat-value": "font-stat-value text-stat-value",
      "heading": "font-headline-lg text-headline-lg",
      "subheading": "font-headline-md text-headline-md",
      "ptext": "font-body-md text-body-md",
      "text": "font-body-md text-body-md",
    },
  },
  defaultVariants: {
    type: "text",
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: React.ElementType
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, type, as, ...props }, ref) => {
    // Map types to sensible default HTML elements if 'as' is not explicitly provided
    let Tag = as
    if (!Tag) {
      if (type === "display-hero" || type === "heading") Tag = "h1"
      else if (type === "headline-lg" || type === "headline-md" || type === "subheading") Tag = "h2"
      else if (type === "body-lg" || type === "body-md" || type === "ptext" || type === "text") Tag = "p"
      else if (type === "code-sm") Tag = "code"
      else Tag = "span"
    }


    return (
      <Tag
        ref={ref}
        className={cn(textVariants({ type, className }))}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
