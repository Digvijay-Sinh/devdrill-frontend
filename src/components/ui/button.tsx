import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-sm whitespace-nowrap outline-none disabled:pointer-events-none disabled:opacity-50 font-label-caps text-label-caps border-2 rounded-md hard-shadow btn-press transition-all",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-tertiary-container to-primary-container text-on-primary-container border-primary-fixed-dim",
        outline:
          "bg-surface-bright text-on-surface border-outline-variant hover:border-primary-fixed-dim hover:text-primary-fixed-dim",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-md px-xl",
        sm: "py-sm px-md text-xs",
        lg: "py-lg px-2xl",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
