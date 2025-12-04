"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/mobile-app-development", label: "Mobile App Development" },
      { href: "/services/website-development", label: "Website Development" },
      { href: "/services/digital-marketing", label: "Digital Marketing" },
      { href: "/services/seo", label: "SEO Services" },
      { href: "/services/cloud-hosting", label: "Cloud & Servers" },
      { href: "/services/software-development", label: "Software Development" },
      { href: "/services/graphics-design", label: "Graphics Design" },
      { href: "/services/video-editing", label: "Video Editing" },
    ],
  },
  { href: "/case-studies", label: "Portfolio" },
  { href: "/about", label: "About" },
  {
    href: "/training",
    label: "Training",
    children: [{ href: "/training/flutter-training", label: "Flutter Development" }],
  },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.95, 0.35, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - Smaller on mobile */}
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0">
              <img
                src="/logo/logo.jpg"
                alt="SmartGalaxy Labs Logo"
                className="w-full h-full object-fit rounded-sm"
              />
            </div>
            {/* <span className="font-bold text-base sm:text-xl tracking-tight">
              <span className="hidden xs:inline">SmartGalaxy </span>
              <span className="xs:hidden">SGL</span>
              <span className="hidden xs:inline">Labs</span>
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1",
                    "hover:bg-secondary text-foreground/80 hover:text-foreground",
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button - Smaller text on tablet */}
          <div className="hidden lg:block">
            <AnimatedButton variant="primary" size="sm" className="text-xs xl:text-sm">
              Get Free Consultation
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <AnimatedButton variant="primary" size="md" className="w-full">
                  Get Free Consultation
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
