import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import { services } from "@/lib/services-data"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | SGL Smart Galaxy Labs",
  description:
    "Full-stack digital marketing services including SEO, PPC, Content Marketing, Social Media, Web Design, and Marketing Automation. Drive growth with data-driven strategies.",
}

const serviceComparison = [
  { feature: "Strategy Development", all: true },
  { feature: "Dedicated Account Manager", all: true },
  { feature: "Monthly Reporting", all: true },
  { feature: "Competitor Analysis", all: true },
  { feature: "Performance Tracking", all: true },
  { feature: "Regular Strategy Calls", all: true },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <MotionDiv animation="fadeInUp">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Our Services
                </span>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Full-Stack Marketing Solutions for <span className="text-primary">Ambitious Brands</span>
                </h1>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything you need to dominate your market. From SEO to automation, we deliver integrated strategies
                  that drive measurable growth.
                </p>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton variant="primary" size="lg">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg">
                  View Pricing
                </AnimatedButton>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="What We Do Best"
              description="Comprehensive digital marketing services tailored to your business goals."
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <MotionDiv key={service.slug} animation="fadeInUp" delay={index * 0.1}>
                  <Link href={`/services/${service.slug}`}>
                    <AnimatedCard className="h-full group cursor-pointer">
                      <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6`}>
                        <service.icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>

                      {/* Stats preview */}
                      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                        {service.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <div className="text-xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center text-primary font-medium">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </AnimatedCard>
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* What's Included */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              badge="What's Included"
              title="Every Service Comes With"
              description="Regardless of which service you choose, you get our full commitment to your success."
            />

            <MotionDiv animation="fadeInUp" delay={0.2} className="mt-12">
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceComparison.map((item) => (
                    <div key={item.feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium">{item.feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <InlineCta
              variant="primary"
              title="Not sure which service you need?"
              description="Book a free strategy call and we'll create a custom plan for your business."
              buttonText="Book Free Strategy Call"
            />
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
