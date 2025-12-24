"use client"

import React, { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { buttonVariants as motionButtonVariants } from "@/lib/motion"
import { cn } from "@/lib/utils"

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
  lg: "px-8 py-4 text-lg ",
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    // Helper to extract textual content from React children (recursively).
    function extractText(node: React.ReactNode): string {
      if (node == null) return ""
      if (typeof node === "string" || typeof node === "number") return String(node)
      if (Array.isArray(node)) return node.map(extractText).join("")
      // If it's a React element, try to read its props.children
      const anyNode = node as any
      if (anyNode.props && anyNode.props.children) return extractText(anyNode.props.children)
      return ""
    }

    const flattenedText = extractText(children as React.ReactNode)
    const isCalButton = /(consult|audit)/i.test(flattenedText)

    const CAL_NAMESPACE = process.env.NEXT_PUBLIC_CAL_NAMESPACE ?? 'smartgalaxylabs'
    const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? 'mohit-mcgiao/smartgalaxylabs'
    const CAL_CONFIG = process.env.NEXT_PUBLIC_CAL_CONFIG ?? JSON.stringify({ layout: 'month_view' })

    const calAttrs = (!(props as any)["data-cal-namespace"] && isCalButton)
      ? {
          "data-cal-namespace": CAL_NAMESPACE,
          "data-cal-link": CAL_LINK,
          "data-cal-config": CAL_CONFIG,
        }
      : {}

    return (
      <motion.button
        ref={ref}
        variants={motionButtonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        style={{ willChange: "transform" }}
        type="button"
        {...(props as any)}
        {...(calAttrs as any)}
      >
        {children}
      </motion.button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"
