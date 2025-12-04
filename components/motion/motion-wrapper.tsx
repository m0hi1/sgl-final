"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { fadeInUp, fadeIn, scaleIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion"
import type { ReactNode } from "react"

type AnimationType = "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight" | "stagger"

const variants = {
  fadeInUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
  stagger: staggerContainer,
}

interface MotionWrapperProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
  once?: boolean
}

export function MotionDiv({
  children,
  animation = "fadeInUp",
  delay = 0,
  className,
  once = true,
  ...props
}: MotionWrapperProps) {
  const selectedVariant = variants[animation]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...selectedVariant.visible.transition,
            delay,
          },
        },
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MotionSection({ children, animation = "stagger", className, ...props }: MotionWrapperProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[animation]}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
