"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MotionSection } from "@/components/motion/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote:
      "SmartGalaxy Labs developed our mobile app from scratch and it exceeded all expectations. The app has helped us save countless hours and our customers love it. Their team truly understands how to solve real business problems.",
    author: "Rahul Sharma",
    role: "CEO",
    company: "TechStart India",
    image: "/professional-indian-man-headshot.jpg",
  },
  {
    id: 2,
    quote:
      "The website they built for us transformed our online presence completely. We saw a 300% increase in inquiries within the first month. Quality work at truly affordable prices!",
    author: "Priya Patel",
    role: "Founder",
    company: "HealthPlus Clinic",
    image: "/professional-indian-woman-headshot.png",
  },
  {
    id: 3,
    quote:
      "Their digital marketing services are exceptional. The ROI we've achieved with their SEO and Google Ads campaigns has been phenomenal. They're now our go-to technology partner.",
    author: "Vikram Singh",
    role: "Director",
    company: "Singh Enterprises",
    image: "/professional-indian-businessman-headshot.jpg",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <MotionSection className="py-16 sm:py-20 lg:py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Don't just take our word for it—hear from the businesses we've helped grow."
        />

        <div className="mt-10 sm:mt-12 lg:mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm border border-border"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary/20 mb-4 sm:mb-6" />
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 sm:mb-8">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-sm sm:text-base">{testimonials[current].author}</div>
                  <div className="text-muted-foreground text-xs sm:text-sm">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Smaller buttons on mobile */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </MotionSection>
  )
}
