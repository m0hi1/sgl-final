"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedButton } from "@/components/ui/animated-button"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { services } from "@/lib/services-data"

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: services.map((s) => ({ href: `/services/${s.slug}`, label: s.title })),
  },
  { href: "/case-studies", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  {
    href: "/training",
    label: "Trainings",
    children: [{ href: "/training/flutter-training", label: "Flutter Development" }],
  },
  { href: "/contact", label: "Contact Us" },
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
      {/* Top strip: quick contact info */}
      <div className="w-full bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-2 flex items-center justify-center sm:justify-end gap-4 text-xs sm:text-sm">
          <a href="mailto:smartgalaxylabs@gmail.com" className="flex items-center gap-2 text-primary-foreground/90 hover:underline">
            <Mail className="w-4 h-4" />
            <span>smartgalaxylabs@gmail.com</span>
          </a>
          {/* Phone */}
          
          <a
            href="tel:+917206237196"
            className="flex items-center gap-2 text-primary-foreground/90 hover:underline"
          >
            <Phone className="w-4 h-4" />
            <span>+91 7206237196</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917206237196"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp support"
            className="flex items-center gap-2 text-primary-foreground/90 hover:underline"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - Smaller on mobile */}
	          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
	            <div className="w-18 h-18 sm:w-16 mt-2 sm:h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center shrink-0">
	              <img
	                src="/logo/logo.jpg"
	                alt="SmartGalaxy Labs Logo"
	                className="block w-full h-full object-contain rounded-sm"
	              />
	            </div>
	            <span className="font-bold text-base sm:text-xl tracking-tight leading-none flex items-center translate-y-[1px]">
	              <span className="sm:hidden">SmartGalaxy Labs</span>
	              <span className="hidden sm:inline">SmartGalaxy Labs</span>
	            </span>
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
            <AnimatedButton variant="primary" size="sm" className="text-xs xl:text-sm shimmer hover:brightness-105">
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
                <AnimatedButton variant="primary" size="md" className="w-full shimmer hover:brightness-105">
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
