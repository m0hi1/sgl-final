"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { buttonVariants as motionButtonVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

const variantStyles = {
  primary: "bg-primary text-primary-foreground shadow-lg hover:shadow-xl",
  secondary: "bg-secondary text-secondary-foreground",
  ghost: "bg-transparent hover:bg-secondary text-foreground",
  outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
}

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        variants={motionButtonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={cn(
          "rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        style={{ willChange: "transform" }}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"
