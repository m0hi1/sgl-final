import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Quote, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    return {
      title: "Case Study Not Found | SGL Smart Galaxy Labs",
    }
  }

  return {
    title: `${study.title} | ${study.client} Case Study | SGL Smart Galaxy Labs`,
    description: study.challenge,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  // Get related case studies (same industry, excluding current)
  const relatedStudies = caseStudies.filter((s) => s.industry === study.industry && s.id !== study.id).slice(0, 2)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4">
          <div className="max-w-5xl mx-auto">
            <MotionDiv animation="fadeInUp">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Link>
            </MotionDiv>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <MotionDiv animation="fadeInUp">
                <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {study.industry}
                </span>
              </MotionDiv>
              {study.services.map((service, i) => (
                <MotionDiv key={service} animation="fadeInUp" delay={0.05 * (i + 1)}>
                  <span className="px-3 py-1 text-sm bg-secondary rounded-full">{service}</span>
                </MotionDiv>
              ))}
            </div>

            <MotionDiv animation="fadeInUp" delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">{study.title}</h1>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.15}>
              <p className="text-xl text-muted-foreground mb-6">
                {study.client} • {study.industry}
              </p>
            </MotionDiv>

            <MotionDiv
              animation="fadeInUp"
              delay={0.2}
              className="flex items-center gap-4 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {study.timeline} project
              </span>
            </MotionDiv>
          </div>
        </section>

        {/* Hero Image */}
        <MotionDiv animation="scaleIn" delay={0.25} className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={study.heroImage || "/placeholder.svg"}
                alt={study.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </MotionDiv>

        {/* Results Highlight */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto">
            <MotionDiv animation="fadeInUp" className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Key Results</h2>
            </MotionDiv>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.results.map((result, index) => (
                <MotionDiv key={result.metric} animation="fadeInUp" delay={index * 0.1} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-6 h-6 opacity-80" />
                    <span className="text-4xl md:text-5xl font-bold">{result.value}</span>
                  </div>
                  <div className="font-medium">{result.metric}</div>
                  <div className="text-sm opacity-80">{result.description}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <MotionDiv animation="fadeInUp">
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.1}>
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{study.solution}</p>
              </MotionDiv>
            </div>
          </div>
        </MotionSection>

        {/* Testimonial */}
        {study.testimonial && (
          <section className="py-24 px-4 bg-secondary/30">
            <div className="max-w-4xl mx-auto">
              <MotionDiv animation="fadeInUp" className="bg-card rounded-2xl p-8 md:p-12 border border-border">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                  "{study.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{study.testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{study.testimonial.author}</div>
                    <div className="text-muted-foreground text-sm">{study.testimonial.role}</div>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </section>
        )}

        {/* Results Deep Dive */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <MotionDiv animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Results Breakdown</h2>
              <p className="text-muted-foreground text-lg">A detailed look at the metrics that matter</p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <MotionDiv key={result.metric} animation="fadeInUp" delay={index * 0.1}>
                  <AnimatedCard className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{result.metric}</h3>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                      </div>
                      <div className="text-3xl font-bold text-primary">{result.value}</div>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </AnimatedCard>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className="py-24 px-4 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
              <MotionDiv animation="fadeInUp" className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Related Case Studies</h2>
                  <p className="text-muted-foreground">More success stories from the {study.industry} industry</p>
                </div>
                <Link href="/case-studies">
                  <AnimatedButton variant="outline">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </AnimatedButton>
                </Link>
              </MotionDiv>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedStudies.map((related, index) => (
                  <MotionDiv key={related.id} animation="fadeInUp" delay={index * 0.1}>
                    <Link href={`/case-studies/${related.slug}`}>
                      <AnimatedCard className="overflow-hidden p-0 h-full group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={related.heroImage || "/placeholder.svg"}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <span className="text-2xl font-bold text-background">{related.results[0].value}</span>
                            <span className="text-sm text-background/80 ml-2">{related.results[0].metric}</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{related.client}</p>
                        </div>
                      </AnimatedCard>
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <InlineCta
              variant="primary"
              title="Ready to achieve results like these?"
              description="Let's discuss how we can create a similar success story for your business."
              buttonText="Start Your Project"
            />
          </div>
        </section>
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
