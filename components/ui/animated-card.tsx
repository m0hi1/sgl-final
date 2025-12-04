"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { cardVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { forwardRef, type ReactNode } from "react"

interface AnimatedCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode
  hover?: boolean
}

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={hover ? cardVariants : undefined}
        initial={hover ? "rest" : undefined}
        whileHover={hover ? "hover" : undefined}
        className={cn("rounded-xl bg-card text-card-foreground shadow-sm border border-border p-6", className)}
        style={{ willChange: "transform" }}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)

AnimatedCard.displayName = "AnimatedCard"
