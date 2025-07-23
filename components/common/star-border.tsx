// components/ui/star-border.tsx
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType = "button"> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  color = "hsl(var(--foreground))",
  speed = "2s",
  className,
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  return (
    <Component
      className={cn("relative inline-block py-[1px] overflow-hidden rounded-[20px]", className)}
      {...props}
    >
      <div
        className="absolute w-[400%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom opacity-20 dark:opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="absolute w-[400%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top opacity-20 dark:opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-10 border text-center text-base py-2 rounded-[20px] bg-gradient-to-b from-background/90 to-muted/90 dark:from-background dark:to-muted border-border/40 text-foreground">
        {children}
      </div>
    </Component>
  )
}
