"use client"

import Link from "next/link"
import Image from "next/image"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedButton } from "@/components/ui/animated-button"
import { ArrowRight, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Revenue Growth",
    client: "FashionHub",
    industry: "E-commerce",
    metric: "+40%",
    metricLabel: "Revenue Increase",
    description: "How we helped FashionHub achieve 40% revenue growth through integrated SEO and PPC strategies.",
    image: "/ecommerce-dashboard-analytics.png",
    tags: ["SEO", "PPC", "CRO"],
  },
  {
    id: 2,
    title: "B2B Lead Generation",
    client: "TechSolutions",
    industry: "SaaS",
    metric: "2x",
    metricLabel: "More Qualified Leads",
    description: "Transforming lead generation for a B2B SaaS company with content marketing and automation.",
    image: "/b2b-saas-leads-funnel.jpg",
    tags: ["Content", "Automation", "LinkedIn"],
  },
  {
    id: 3,
    title: "Brand Awareness Campaign",
    client: "HealthPlus",
    industry: "Healthcare",
    metric: "1K+",
    metricLabel: "Impressions",
    description: "Building brand recognition in a competitive healthcare market through social media excellence.",
    image: "/healthcare-brand-social-media.jpg",
    tags: ["Social Media", "Branding", "Video"],
  },
]

export function CaseStudiesPreview() {
  return (
    <MotionSection className="py-16 sm:py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          <SectionHeader
            badge="Case Studies"
            title="Results That Speak for Themselves"
            description="Real results from real clients. See how we've helped businesses like yours achieve extraordinary growth."
            align="left"
            className="max-w-2xl"
          />
          <MotionDiv animation="fadeInUp" delay={0.2} className="flex-shrink-0 ">
            <Link href="/case-studies">
              <AnimatedButton variant="outline" className="text-sm sm:text-base">
                View All Case Studies
                <ArrowRight className="w-4 h-4 shrink-0" />
              </AnimatedButton>
            </Link>
          </MotionDiv>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <MotionDiv key={study.id} animation="fadeInUp" delay={index * 0.1}>
              <Link href={`/case-studies/${study.id}`}>
                <AnimatedCard className="overflow-hidden p-0 h-full group cursor-pointer">
                  <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-background">
                        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-lg sm:text-xl lg:text-2xl font-bold">{study.metric}</span>
                        <span className="text-xs sm:text-sm opacity-80">{study.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-medium text-primary bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                        {study.industry}
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">{study.client}</span>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] sm:text-xs bg-secondary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
