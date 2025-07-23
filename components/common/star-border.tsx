import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "4s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = color || "hsl(var(--foreground))"

  return (
    <Component
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-lg disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70",
        className
      )}
      {...props}
    >
      {/* Bottom animated gradient */}
      <div
        className={cn(
          "absolute w-[300%] h-1/2 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0 opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      {/* Top animated gradient */}
      <div
        className={cn(
          "absolute w-[300%] h-1/2 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0 opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      {/* Main content */}
      <div
        className={cn(
          "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors h-8 px-3 border text-foreground bg-gradient-to-b from-background/90 to-muted/90 border-border/40 dark:from-background dark:to-muted dark:border-border"
        )}
      >
        <div className="flex items-center gap-2">{children}</div>
      </div>
    </Component>
  )
}