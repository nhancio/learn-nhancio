import * as React from "react"
import { cn } from "../../lib/utils"

const liquidbuttonVariants = {
  default: "bg-transparent hover:scale-105 duration-300 transition text-white",
  primary: "bg-gradient-to-r from-teal-500/20 to-teal-600/20 hover:from-teal-500/30 hover:to-teal-600/30 text-white",
}

interface LiquidGlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof liquidbuttonVariants
  size?: "sm" | "default" | "lg" | "xl"
  asChild?: boolean
}

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

const sizeVariants = {
  sm: "h-8 px-4 text-xs",
  default: "h-10 px-6 text-sm",
  lg: "h-12 px-8 text-base",
  xl: "h-14 px-10 text-lg",
}

export function LiquidGlassButton({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: LiquidGlassButtonProps) {
  return (
    <>
      <button
        className={cn(
          "relative inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-2",
          liquidbuttonVariants[variant],
          sizeVariants[size],
          className
        )}
        {...props}
      >
        <div className="absolute top-0 left-0 z-0 h-full w-full rounded-xl 
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] 
        transition-all 
        dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" />
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-xl"
          style={{ backdropFilter: 'url("#container-glass")' }}
        />
        <div className="pointer-events-none z-10 relative">
          {children}
        </div>
        <GlassFilter />
      </button>
    </>
  );
}

