"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedCard } from "@/components/ui/animated-card"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import { caseStudies, industries, allServices } from "@/lib/case-studies-data"
import { ArrowRight, TrendingUp, Filter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredStudies = caseStudies.filter((study) => {
    if (selectedIndustry && study.industry !== selectedIndustry) return false
    if (selectedService && !study.services.includes(selectedService)) return false
    return true
  })

  const clearFilters = () => {
    setSelectedIndustry(null)
    setSelectedService(null)
  }

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <MotionDiv animation="fadeInUp">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Case Studies
                </span>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Real Results for <span className="text-primary">Real Businesses</span>
                </h1>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8">
                  Explore how we've helped businesses like yours achieve extraordinary growth through strategic digital
                  marketing.
                </p>
              </MotionDiv>
            </div>

            {/* Stats Row */}
            <MotionDiv
              animation="fadeInUp"
              delay={0.3}
              className="mt-12 grid grid-cols-2 md:grid-cols-2 gap-2 max-w-2xl mx-auto"
            >
              {[
                { value: "500+", label: "Projects Completed" },
                // { value: "$2.5B+", label: "Revenue Generated" },
                // { value: "340%", label: "Avg Traffic Growth" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg border border-border"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-muted-foreground hidden md:block">
                  Showing {filteredStudies.length} of {caseStudies.length} case studies
                </span>
              </div>

              <div className={`flex flex-col md:flex-row gap-4 ${showFilters ? "block" : "hidden md:flex"}`}>
                {/* Industry Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Industry:</span>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <button
                        key={industry}
                        onClick={() => setSelectedIndustry(selectedIndustry === industry ? null : industry)}
                        className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                          selectedIndustry === industry
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:bg-secondary"
                        }`}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Service:</span>
                  <select
                    value={selectedService || ""}
                    onChange={(e) => setSelectedService(e.target.value || null)}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-background"
                  >
                    <option value="">All Services</option>
                    {allServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedIndustry || selectedService) && (
                  <button onClick={clearFilters} className="text-sm text-primary hover:underline">
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <MotionSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedIndustry}-${selectedService}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredStudies.map((study, index) => (
                  <MotionDiv key={study.id} animation="fadeInUp" delay={index * 0.1}>
                    <Link href={`/case-studies/${study.slug}`}>
                      <AnimatedCard className="overflow-hidden p-0 h-full group cursor-pointer">
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={study.heroImage || "/placeholder.svg"}
                            alt={study.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-2 text-background">
                              <TrendingUp className="w-5 h-5" />
                              <span className="text-2xl font-bold">{study.results[0].value}</span>
                              <span className="text-sm opacity-80">{study.results[0].metric}</span>
                            </div>
                          </div>
                          {study.featured && (
                            <div className="absolute top-4 right-4">
                              <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                              {study.industry}
                            </span>
                            <span className="text-xs text-muted-foreground">{study.client}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{study.challenge}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.services.map((service) => (
                              <span key={service} className="text-xs bg-secondary px-2 py-1 rounded">
                                {service}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            Read Case Study
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </AnimatedCard>
                    </Link>
                  </MotionDiv>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredStudies.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No case studies match your filters.</p>
                <button onClick={clearFilters} className="text-primary hover:underline">
                  Clear filters to see all case studies
                </button>
              </div>
            )}
          </div>
        </MotionSection>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <InlineCta
              variant="primary"
              title="Ready to be our next success story?"
              description="Let's discuss how we can achieve similar results for your business."
              buttonText="Start Your Growth Journey"
            />
          </div>
        </section>
      </main>
      <StickyCta />
    </>
  )
}
