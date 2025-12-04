"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { X, Gift } from "lucide-react"

interface ExitIntentModalProps {
  title?: string
  description?: string
  offerText?: string
  buttonText?: string
}

export function ExitIntentModal({
  title = "Wait! Don't leave empty-handed",
  description = "Get a free consultation for your project",
  offerText = "Discover how we can help transform your business digitally",
  buttonText = "Get Free Consultation",
}: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShown) return
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    document.addEventListener("mouseout", handleMouseLeave)
    return () => document.removeEventListener("mouseout", handleMouseLeave)
  }, [hasShown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.2, 0.95, 0.35, 1] }}
            className="relative bg-card rounded-2xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
              <p className="text-xl text-primary font-semibold mb-2">{description}</p>
              <p className="text-muted-foreground mb-8">{offerText}</p>

              <AnimatedButton variant="primary" size="lg" className="w-full mb-4">
                {buttonText}
              </AnimatedButton>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                No thanks, I don't want free advice
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
