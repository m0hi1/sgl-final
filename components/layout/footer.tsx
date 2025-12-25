"use client"

import Link from "next/link"
import { createElement, type ReactElement } from "react"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Mail, Phone, MapPin } from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaPinterestP,
  FaRedditAlien,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const footerLinks = {
  services: [
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    { href: "/services/social-media-marketing", label: "Social Media Marketing" },
    { href: "/services/ppc-google-ads", label: "PPC & Google Ads" },
    { href: "/services/seo", label: "SEO Services" },
    { href: "/services/social-media-management", label: "Social Media Management" },
  ],
  development: [
    { href: "/services/website-development", label: "Website Development" },
    { href: "/services/mobile-app-development", label: "Mobile App Development" },
    { href: "/services/graphic-design", label: "Graphics Design" },
    { href: "/services/video-editing", label: "Video Editing" },
  ],
  training: [{ href: "/training/flutter-training", label: "Flutter Development" }],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/training", label: "Training" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Refund & Cancellation" },
  ],
}

const socialLinks = [
  { href: "https://www.facebook.com/SmartGalaxyLabs/", icon: FaFacebookF, label: "Facebook" },
  { href: "https://instagram.com/smartgalaxylabs/", icon: FaInstagram, label: "Instagram" },
  { href: "https://t.me/SmartGalaxyLabs", icon: FaTelegram, label: "Telegram" },
  { href: "https://www.youtube.com/channel/UCLcz8cuHhH3jUV0DSPbT1fA/featured", icon: FaYoutube, label: "YouTube" },
  { href: "https://x.com/SmartgalaxyLabs", icon: FaXTwitter, label: "X (Twitter)" },
  { href: "https://www.pinterest.com/smartgalaxylabs/", icon: FaPinterestP, label: "Pinterest" },
  { href: "https://reddit.com/user/SmartGalaxyLabs/", icon: FaRedditAlien, label: "Reddit" },
  { href: "https://www.linkedin.com/company/89812533/", icon: FaLinkedinIn, label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Footer CTA Banner - Better padding on mobile */}
      <MotionSection className="bg-primary py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv animation="fadeInUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Ready to Transform Your Business?
            </h2>
          </MotionDiv>
          <MotionDiv animation="fadeInUp" delay={0.1}>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Get a free consultation and discover how we can help you achieve your business goals with quality
              solutions at affordable prices.
            </p>
          </MotionDiv>
          <MotionDiv
            animation="fadeInUp"
            delay={0.2}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <AnimatedButton
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-sm sm:text-base"
            >
              Get Free Consultation
            </AnimatedButton>
            <AnimatedButton
              variant="ghost"
              size="lg"
              className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 text-sm sm:text-base"
            >
              View Our Work
            </AnimatedButton>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* Main Footer - Better grid layout for mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-12">
          {/* Brand Column - Full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl">S</span>
              </div>
              <span className="font-bold text-lg sm:text-xl">SmartGalaxy Labs</span>
            </Link>
            <p className="text-background/70 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Your all-in-one business partner providing software solutions to real-life problems with quality services
              at affordable prices.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="mailto:smartgalaxylabs@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-background transition-colors text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="break-all">smartgalaxylabs@gmail.com</span>
              </a>
              <a
                href="https://wa.me/917206237196"
                className="flex items-center gap-2 sm:gap-3 text-background/70 hover:text-background transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                +91 7206237196
              </a>
              <p className="flex items-center gap-2 sm:gap-3 text-background/70 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                India
              </p>
            </div>
          </div>

          {/* Marketing Services Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Marketing</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Services Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Development</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.development.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Services Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Training</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Better spacing on mobile */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SmartGalaxy Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                {createElement(social.icon as unknown as (props: { className?: string }) => ReactElement, {
                  className: "w-3.5 h-3.5 sm:w-4 sm:h-4",
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
