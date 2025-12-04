"use client"

import Link from "next/link"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeader } from "@/components/ui/section-header"
import { Smartphone, Globe, Target, Search, Share2, PenTool, Film, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business online.",
    href: "/services/digital-marketing",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Facebook, Instagram marketing and more to grow your brand presence.",
    href: "/services/social-media-marketing",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Target,
    title: "PPC & Google Ads",
    description: "Google Search Ads, YouTube Ads, and PPC for immediate traffic.",
    href: "/services/ppc-google-ads",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "On-Page & Off-Page SEO to boost your website rankings.",
    href: "/services/seo",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete management of your Facebook, Instagram pages & more.",
    href: "/services/social-media-management",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Interactive websites to establish and grow your business online.",
    href: "/services/website-development",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Android/iOS apps based on research to solve real problems.",
    href: "/services/mobile-app-development",
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    icon: PenTool,
    title: "Graphics Design",
    description: "Creative visuals for online promotion and business growth.",
    href: "/services/graphic-design",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video editing for promotional and social content.",
    href: "/services/video-editing",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
]

export function ServicesSection() {
  return (
    <MotionSection className="py-16 sm:py-20 lg:py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Our Services"
          title="Complete Digital Solutions"
          description="Everything you need to transform your business digitally—all under one roof at affordable prices."
        />

        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <MotionDiv key={service.title} animation="fadeInUp" delay={index * 0.05}>
              <Link href={service.href}>
                <AnimatedCard className="h-full group cursor-pointer p-4 sm:p-6">
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${service.bgColor} flex items-center justify-center mb-4 sm:mb-6`}
                  >
                    <service.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-primary font-medium text-sm sm:text-base">
                    Learn more
                    <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </AnimatedCard>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
