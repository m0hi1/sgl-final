"use client"

import { MotionDiv } from "@/components/motion/motion-wrapper"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ badge, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {badge && (
        <MotionDiv animation="fadeInUp">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full">
            {badge}
          </span>
        </MotionDiv>
      )}
      <MotionDiv animation="fadeInUp" delay={0.1}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">{title}</h2>
      </MotionDiv>
      {description && (
        <MotionDiv animation="fadeInUp" delay={0.2}>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground text-pretty">{description}</p>
        </MotionDiv>
      )}
    </div>
  )
}
