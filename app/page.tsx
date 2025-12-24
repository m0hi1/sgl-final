import { HeroSection } from "@/components/sections/hero-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { ServicesSection } from "@/components/sections/services-section"
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import { ExitIntentModal } from "@/components/cta/exit-intent-modal"

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        {/* <SocialProofSection /> */}
        <ServicesSection />

        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <InlineCta
              title="Not sure which service you need?"
              description="Book a free consultation and we'll help you identify the best solution for your business at affordable prices."
              buttonText="Book Free Consultation"
            />
          </div>
        </section>

        <CaseStudiesPreview />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
      </main>

      {/* CTA Components */}
      <StickyCta />
      <ExitIntentModal />
    </>
  )
}
