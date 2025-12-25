"use client"

import { motion } from "framer-motion"
import { MotionDiv } from "@/components/motion/motion-wrapper"
import { HeroCta } from "@/components/cta/hero-cta"
import { timing } from "@/lib/motion"
import { Star, TrendingUp, Users, Target } from "lucide-react"

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "4+", label: "Years Experience" },
]

const trustBadges = ["Digital Marketing", "Social Media Marketing", "Website Development", "Mobile App Development"]
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <MotionDiv animation="fadeInUp" className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-card border border-border rounded-full whitespace-nowrap"
                >
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent fill-accent flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Grow Your Business with  <span className="text-primary">Performance-Driven</span> Digital Marketing
    

              </h1>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.2}>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
                We provide software solutions to real-life problems. Digital Marketing, Mobile App Development, Website Development, SEO Services,
                Cloud Hosting, and more—all with quality services at affordable prices.
              </p>
            </MotionDiv>

            <div className="mt-6 sm:mt-10">
              <HeroCta primaryText="Get Free Consultation"/>
            </div>

            <MotionDiv
              animation="fadeInUp"
              delay={0.4}
              className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </MotionDiv>
          </div>

          {/* Right Visual - Hide floating cards on mobile, show on md+ */}
          <MotionDiv animation="scaleIn" delay={0.3} className="relative hidden sm:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
                    <p className="text-2xl sm:text-3xl font-bold">100+</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-500 bg-green-500/10 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    Growing
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="h-32 sm:h-48 bg-gradient-to-t from-primary/20 to-transparent rounded-xl flex items-end justify-around p-2 sm:p-4 gap-1 sm:gap-2">
                  {[40, 65, 45, 80, 60, 90, 75, 95, 85, 100, 92, 110].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: timing.easing }}
                      className="w-full bg-primary rounded-t"
                    />
                  ))}
                </div>
              </div>

              {/* Floating cards - only show on lg+ */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-4 top-1/4 bg-card rounded-xl shadow-lg border border-border p-3 sm:p-4 hidden lg:flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium whitespace-nowrap">Happy Clients</p>
                  <p className="text-base sm:text-lg font-bold">50+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-4 bottom-1/4 bg-card rounded-xl shadow-lg border border-border p-3 sm:p-4 hidden lg:flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium whitespace-nowrap">Success Rate</p>
                  <p className="text-base sm:text-lg font-bold">95%</p>
                </div>
              </motion.div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
