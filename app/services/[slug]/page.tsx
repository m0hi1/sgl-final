import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import { services, getServiceBySlug } from "@/lib/services-data"
import { notFound } from "next/navigation"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found | SGL Smart Galaxy Labs",
    }
  }

  return {
    title: `${service.title} | SGL Smart Galaxy Labs`,
    description: service.longDescription,
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <MotionDiv animation="fadeInUp">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                </MotionDiv>
                <MotionDiv animation="fadeInUp" delay={0.1}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">{service.title}</h1>
                </MotionDiv>
                <MotionDiv animation="fadeInUp" delay={0.2}>
                  <p className="text-xl text-muted-foreground mb-8">{service.longDescription}</p>
                </MotionDiv>
                <MotionDiv animation="fadeInUp" delay={0.3} className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton variant="primary" size="lg">
                    Get Started
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg">
                    View Case Studies
                  </AnimatedButton>
                </MotionDiv>
              </div>

              {/* Stats Card */}
              <MotionDiv animation="scaleIn" delay={0.3}>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Our Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {service.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="What's Included"
              title={`Our ${service.shortTitle} Services`}
              description="A comprehensive suite of services designed to drive results."
            />

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <MotionDiv key={feature} animation="fadeInUp" delay={index * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className={`w-8 h-8 rounded-lg ${service.bgColor} flex items-center justify-center shrink-0`}>
                      <Check className={`w-4 h-4 ${service.color}`} />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Benefits"
              title={`Why Choose Our ${service.shortTitle} Services`}
              description="Discover the advantages of partnering with SGL Smart Galaxy Labs."
            />

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <MotionDiv key={benefit.title} animation="fadeInUp" delay={index * 0.1}>
                  <AnimatedCard className="h-full">
                    <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4`}>
                      <span className={`text-xl font-bold ${service.color}`}>0{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </AnimatedCard>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Our Process"
              title={`How Our ${service.shortTitle} Process Works`}
              description="A proven methodology that delivers consistent results."
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <MotionDiv key={step.step} animation="fadeInUp" delay={index * 0.15} className="relative">
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                  )}

                  <div className="relative text-center">
                    <div
                      className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl ${service.bgColor} mb-6`}
                    >
                      <span className={`text-3xl font-bold ${service.color}`}>{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              description={`Common questions about our ${service.shortTitle.toLowerCase()} services.`}
            />

            <div className="mt-12 space-y-4">
              {service.faqs.map((faq, index) => (
                <MotionDiv key={index} animation="fadeInUp" delay={index * 0.1}>
                  <details className="group bg-card rounded-xl border border-border">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-semibold pr-4">{faq.question}</h3>
                      <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </details>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <InlineCta
              variant="primary"
              title={`Ready to transform your ${service.shortTitle.toLowerCase()} results?`}
              description="Get a free audit and see how we can help you achieve your goals."
              buttonText="Get Free Audit"
            />
          </div>
        </section>
      </main>
      <StickyCta />
    </>
  )
}
