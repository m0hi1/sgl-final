"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { MotionDiv } from "@/components/motion/motion-wrapper"
import { ArrowRight, Play } from "lucide-react"

interface HeroCtaProps {
  primaryText?: string
  secondaryText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

export function HeroCta({
  primaryText = "Start a Project",
  secondaryText = "Watch Demo",
  onPrimaryClick,
  onSecondaryClick,
}: HeroCtaProps) {
  return (
    <MotionDiv animation="fadeInUp" delay={0.3} className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4">
      <AnimatedButton variant="primary" size="lg" onClick={onPrimaryClick} className="group text-sm sm:text-base">
        {primaryText}
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform group-hover:translate-x-1" />
      </AnimatedButton>
      <AnimatedButton variant="outline" size="lg" onClick={onSecondaryClick} className="group text-sm sm:text-base">
        <Play className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
        {secondaryText}
      </AnimatedButton>
    </MotionDiv>
  )
}
