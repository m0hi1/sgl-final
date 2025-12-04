"use client"

import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"

const logos = [
  { name: "TechCorp", initials: "TC" },
  { name: "GrowthLabs", initials: "GL" },
  { name: "ScaleUp", initials: "SU" },
  { name: "InnovateCo", initials: "IC" },
  { name: "DigitalFirst", initials: "DF" },
  { name: "FutureBrand", initials: "FB" },
]

export function SocialProofSection() {
  return (
    <MotionSection className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <MotionDiv animation="fadeIn" className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by leading brands worldwide
          </p>
        </MotionDiv>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <MotionDiv
              key={logo.name}
              animation="fadeIn"
              delay={index * 0.1}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                  <span className="font-bold text-lg text-muted-foreground">{logo.initials}</span>
                </div>
                <span className="font-semibold text-muted-foreground hidden sm:block">{logo.name}</span>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
