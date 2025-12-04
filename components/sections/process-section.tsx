"use client"

import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description: "We dive deep into your business, market, and competitors to identify growth opportunities.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "We create a customized, data-driven marketing strategy tailored to your goals.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execution & Launch",
    description: "Our expert team implements campaigns with precision and attention to detail.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Optimize & Scale",
    description: "We continuously analyze, test, and optimize to maximize your ROI.",
  },
]

export function ProcessSection() {
  return (
    <MotionSection className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Process"
          title="How We Drive Your Growth"
          description="A proven methodology that delivers consistent, measurable results for every client."
        />

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <MotionDiv key={step.number} animation="fadeInUp" delay={index * 0.15} className="relative">
              {/* Connector line - only on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-primary/10 mb-4 sm:mb-6">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">{step.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
