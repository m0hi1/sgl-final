import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import Image from "next/image"
import { ArrowRight, Award, Heart, Target, Zap, Linkedin, Twitter } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | SmartGalaxy Labs",
  description:
    "Learn about SmartGalaxy Labs - We provide Software solutions to real life problems. Your all-in-one business partner with quality services at affordable prices.",
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every solution we create is designed to solve real problems and deliver measurable results for your business.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We treat your business as if it were our own.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We constantly explore innovative ideas to improve the quality of our products and services.",
  },
  {
    icon: Award,
    title: "Affordability",
    description: "We provide optimal solutions with quality and services at very affordable prices.",
  },
]

const team = [
  {
    name: "Ajay Singh",
    role: "Founder & CEO",
    bio: "Visionary tech entrepreneur leading SmartGalaxy Labs with a passion for providing software solutions to real-life problems and helping businesses grow through innovative technology.",
    image: "/professional-indian-man-founder-ceo-headshot.jpg",
    linkedin: "https://linkedin.com/company/smartgalaxylabs",
    twitter: "https://twitter.com/smartgalaxylabs",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Founded",
    description:
      "Ajay Singh started SmartGalaxy Labs with a vision to provide software solutions to real-life problems.",
  },
  {
    year: "2021",
    title: "Service Expansion",
    description: "Expanded into mobile app development and digital marketing services.",
  },
  {
    year: "2022",
    title: "Industrial Training",
    description: "Launched Flutter and Dart industrial training programs with hands-on learning.",
  },
  {
    year: "2023",
    title: "Growing Impact",
    description: "Scaled operations and helped more businesses achieve digital transformation.",
  },
  {
    year: "2024",
    title: "Full-Service Agency",
    description: "Became a comprehensive all-in-one business partner for software and marketing needs.",
  },
]

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <MotionDiv animation="fadeInUp">
                  <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                    About Us
                  </span>
                </MotionDiv>
                <MotionDiv animation="fadeInUp" delay={0.1}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                    Your All-in-One <span className="text-primary">Business Partner</span>
                  </h1>
                </MotionDiv>
                <MotionDiv animation="fadeInUp" delay={0.2}>
                  <p className="text-xl text-muted-foreground mb-8">
                    We have a very dedicated and hardworking team to provide software solutions to real-life problems.
                    We provide optimal solutions with quality and services at very affordable prices. We always try to
                    improve the quality of our products by exploring innovative ideas.
                  </p>
                </MotionDiv>
                <MotionDiv animation="fadeInUp" delay={0.3} className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton variant="primary" size="lg">
                    Work With Us
                    <ArrowRight className="w-5 h-5 shrink-0" />
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg">
                    View Careers
                  </AnimatedButton>
                </MotionDiv>
              </div>

              <MotionDiv animation="scaleIn" delay={0.3} className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image src="/modern-tech-office-software-development-team.jpg" alt="SmartGalaxy Labs Team" fill className="object-cover" />
                </div>
                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg border border-border p-6">
                  <div className="text-3xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50+", label: "Clients Served" },
                { value: "$5M+", label: "Revenue Generated" },
                { value: "4+", label: "Years Experience" },
                { value: "95%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <MotionDiv key={stat.label} animation="fadeInUp" delay={index * 0.1}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="opacity-80">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Our Values"
              title="What Drives Us"
              description="The principles that guide everything we do at SmartGalaxy Labs."
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <MotionDiv key={value.title} animation="fadeInUp" delay={index * 0.1}>
                  <AnimatedCard className="h-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </AnimatedCard>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Timeline */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              badge="Our Journey"
              title="Our Story So Far"
              description="Key milestones in our journey to becoming a trusted digital marketing partner."
            />

            <div className="mt-16 relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <MotionDiv
                    key={milestone.year}
                    animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                    delay={index * 0.1}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 border border-border inline-block">
                        <span className="text-sm font-medium text-primary">{milestone.year}</span>
                        <h3 className="text-xl font-bold mt-1">{milestone.title}</h3>
                        <p className="text-muted-foreground mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shrink-0 relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </MotionDiv>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <MotionSection className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="Leadership"
              title="Meet the Founder"
              description="The visionary behind SmartGalaxy Labs."
            />

            <div className="mt-16 flex justify-center">
              {team.map((member, index) => (
                <MotionDiv key={member.name} animation="fadeInUp" delay={index * 0.1} className="max-w-md">
                  <AnimatedCard className="text-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </AnimatedCard>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <InlineCta
              variant="primary"
              title="Ready to work with us?"
              description="Join the growing list of businesses that trust SmartGalaxy Labs with their software and digital marketing needs."
              buttonText="Start a Conversation"
            />
          </div>
        </section>
      </main>
      <StickyCta />
    </>
  )
}
