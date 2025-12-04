// Motion timing constants and variants for consistent animations across the site
// GPU-optimized: only transform and opacity

export const timing = {
  fast: 0.12,
  base: 0.28,
  slow: 0.45,
  easing: [0.2, 0.95, 0.35, 1] as const,
}

// Button variants
export const buttonVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: timing.base, ease: timing.easing },
  },
  hover: {
    scale: 1.03,
    y: -2,
    transition: { duration: timing.fast, ease: timing.easing },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: { duration: timing.fast },
  },
}

// Card variants
export const cardVariants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: timing.base, ease: timing.easing },
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { duration: timing.fast, ease: timing.easing },
  },
}

// Fade in from below
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.slow, ease: timing.easing },
  },
}

// Fade in from above
export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timing.slow, ease: timing.easing },
  },
}

// Simple fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: timing.base, ease: timing.easing },
  },
}

// Scale in
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: timing.slow, ease: timing.easing },
  },
}

// Stagger container
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: timing.slow, ease: timing.easing },
  },
}

// Slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: timing.slow, ease: timing.easing },
  },
}

// Nav link hover
export const navLinkVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: timing.fast } },
}

// For reduced motion preference check
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
