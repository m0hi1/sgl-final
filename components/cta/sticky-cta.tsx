"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { X, Calendar } from "lucide-react"

interface StickyCtaProps {
  text?: string
  showAfterPercent?: number
}

export function StickyCta({ text = "Get Free Quote", showAfterPercent = 40 }: StickyCtaProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return

      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercent > showAfterPercent)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showAfterPercent, isDismissed])

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: [0.2, 0.95, 0.35, 1] }}
          className="fixed right-2 bottom-2 sm:right-4 sm:bottom-4 md:right-8 md:bottom-8 z-40 flex items-center gap-2 sm:gap-3"
          style={{ willChange: "transform, opacity" }}
        >
          <AnimatedButton
            variant="primary"
            size="md"
            className="inline-flex items-center shadow-2xl shimmer hover:brightness-105 text-sm sm:text-base"
            data-cal-namespace="smartgalaxylabs"
            data-cal-link="mohit-mcgiao/smartgalaxylabs"
            data-cal-config='{"layout":"month_view"}'
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            {text}
          </AnimatedButton>
          <button
            onClick={() => setIsDismissed(true)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors shadow-lg flex-shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
