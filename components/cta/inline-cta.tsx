"use client"

import { MotionDiv } from "@/components/motion/motion-wrapper"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ArrowRight } from "lucide-react"

interface InlineCtaProps {
  title?: string
  description?: string
  buttonText?: string
  variant?: "light" | "primary"
}

export function InlineCta({
  title = "Ready to grow your business?",
  description = "Get a free marketing strategy session with our experts.",
  buttonText = "Book Free Call",
  variant = "light",
}: InlineCtaProps) {
  return (
    <MotionDiv
      animation="fadeInUp"
      className={`rounded-2xl p-8 md:p-12 ${
        variant === "primary" ? "bg-primary text-primary-foreground" : "bg-secondary"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
          <p className={variant === "primary" ? "text-primary-foreground/80" : "text-muted-foreground"}>
            {description}
          </p>
        </div>
        <AnimatedButton
          variant={variant === "primary" ? "secondary" : "primary"}
          size="lg"
          className={
            variant === "primary" ? "bg-background text-foreground hover:bg-background/90 shrink-0" : "shrink-0"
          }
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 shrink-0" />
        </AnimatedButton>
      </div>
    </MotionDiv>
  )
}
