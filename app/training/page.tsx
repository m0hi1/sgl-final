"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { trainingCourses } from "@/lib/training-data"
import { SectionHeader } from "@/components/ui/section-header"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/motion-wrapper"
import { Clock, Award, Users, ArrowRight, GraduationCap, Sparkles } from "lucide-react"

export default function TrainingPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] hidden lg:block"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-[10%] hidden lg:block"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Professional Training Programs
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Learn from{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Industry Experts
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Upgrade your skills with our hands-on training programs. Get certified and become job-ready with practical
              knowledge and real-world projects.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
              {[
                { icon: Users, value: "500+", label: "Students Trained" },
                { icon: Award, value: "95%", label: "Placement Rate" },
                { icon: Clock, value: "50+", label: "Hours Content" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl sm:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Training Courses */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Courses"
            title="Training Programs"
            description="Industry-focused training programs designed to make you job-ready"
          />

          <StaggerContainer className="mt-10 sm:mt-12 grid gap-6 sm:gap-8">
            {trainingCourses.map((course) => {
              const Icon = course.icon
              return (
                <StaggerItem key={course.slug}>
                  <AnimatedCard className="p-0 overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Left - Course Info */}
                      <div className="lg:col-span-3 p-6 sm:p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{course.title}</h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {course.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                {course.level}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 text-pretty">{course.description}</p>

                        {/* Features */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                          {course.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          <Link href={`/training/${course.slug}`}>
                            <AnimatedButton variant="primary" size="md">
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </AnimatedButton>
                          </Link>
                          <Link href="/contact">
                            <AnimatedButton variant="outline" size="md">
                              Enquire Now
                            </AnimatedButton>
                          </Link>
                        </div>
                      </div>

                      {/* Right - Price Card */}
                      <div className="lg:col-span-2 bg-gradient-to-br from-secondary/50 to-secondary p-6 sm:p-8 flex flex-col justify-center">
                        <div className="text-center lg:text-left">
                          <p className="text-sm text-muted-foreground mb-2">Course Fee</p>
                          <div className="text-3xl sm:text-4xl font-bold mb-4">{course.price}</div>
                          <div className="space-y-2 text-sm">
                            <p className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">
                                ✓
                              </span>
                              EMI Options Available
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">
                                ✓
                              </span>
                              100% Placement Assistance
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs">
                                ✓
                              </span>
                              Certificate Included
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our next batch and transform your career. Limited seats available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton variant="primary" size="lg">
                  Enroll Now
                </AnimatedButton>
              </Link>
              <AnimatedButton variant="outline" size="lg">
                Download Brochure
              </AnimatedButton>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
