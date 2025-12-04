"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTrainingCourse } from "@/lib/training-data"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper"
import { Clock, Award, Users, ArrowRight, CheckCircle2, BookOpen, Target, Rocket, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function TrainingDetailPage() {
  const params = useParams()
  const course = getTrainingCourse(params.slug as string)
  const [openModule, setOpenModule] = useState<number>(0)

  if (!course) {
    notFound()
  }

  const Icon = course.icon

  return (
    <main className="min-h-screen pt-24 sm:pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeIn>
              <Link
                href="/training"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
              >
                ← Back to Training
              </Link>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center`}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">{course.level}</span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, label: course.duration },
                  { icon: Users, label: "Live Sessions" },
                  { icon: Award, label: "Certificate" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <AnimatedButton variant="primary" size="lg">
                    Enroll Now - {course.price}
                  </AnimatedButton>
                </Link>
                <AnimatedButton variant="outline" size="lg">
                  Download Syllabus
                </AnimatedButton>
              </div>
            </FadeIn>

            {/* Features Card */}
            <FadeIn delay={0.2}>
              <AnimatedCard className="p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-6">What You Get</h3>
                <div className="space-y-4">
                  {course.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </AnimatedCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              Course Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">What You Will Learn</h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {course.curriculum.map((module, index) => (
              <StaggerItem key={module.module}>
                <AnimatedCard className="p-0 overflow-hidden">
                  <button
                    onClick={() => setOpenModule(openModule === index ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white font-bold`}
                      >
                        {index + 1}
                      </div>
                      <span className="font-semibold">{module.module}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${openModule === index ? "rotate-180" : ""}`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: openModule === index ? "auto" : 0, opacity: openModule === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 border-t border-border">
                      <ul className="space-y-3">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits & Prerequisites */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <FadeIn>
              <AnimatedCard className="p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Benefits</h3>
                </div>
                <ul className="space-y-4">
                  {course.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </FadeIn>

            {/* Prerequisites */}
            <FadeIn delay={0.1}>
              <AnimatedCard className="p-6 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Prerequisites</h3>
                </div>
                <ul className="space-y-4">
                  {course.prerequisites.map((prereq) => (
                    <li key={prereq} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs">•</span>
                      </div>
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Career Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">After This Course</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, index) => (
              <StaggerItem key={outcome}>
                <AnimatedCard className="p-5 flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-white font-bold flex-shrink-0`}
                  >
                    {index + 1}
                  </div>
                  <span className="font-medium">{outcome}</span>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedCard className="p-8 sm:p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/50">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join our next batch and kickstart your career in Flutter development. Limited seats available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton variant="primary" size="lg">
                  Enroll Now - {course.price}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </AnimatedButton>
              </Link>
              <AnimatedButton variant="outline" size="lg">
                Schedule a Call
              </AnimatedButton>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </main>
  )
}
