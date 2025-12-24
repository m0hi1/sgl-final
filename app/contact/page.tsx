"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  Paperclip,
  Sparkles,
  Star,
  Zap,
  Heart,
  MessageSquare,
  Code,
  Palette,
  Video,
  Globe,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Drop us a line anytime",
    value: "smartgalaxylabs@gmail.com",
    href: "mailto:smartgalaxylabs@gmail.com",
  },
  {
    icon: Phone,
    title: "WhatsApp / Telegram",
    description: "Chat with us directly",
    value: "+91 7206237196",
    href: "https://wa.me/917206237196",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in",
    value: "India",
    href: "#",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We reply within",
    value: "24 hours",
    href: "#",
  },
]

const services = [
  { value: "digital-marketing", label: "Digital Marketing", icon: Zap },
  { value: "social-media-marketing", label: "Social Media Marketing", icon: Heart },
  { value: "ppc-google-ads", label: "PPC & Google Ads", icon: Star },
  { value: "seo", label: "Search Engine Optimization (SEO)", icon: Globe },
  { value: "social-media-management", label: "Social Media Management", icon: MessageSquare },
  { value: "website-development", label: "Website Development", icon: Code },
  { value: "mobile-app-development", label: "Mobile App Development", icon: Sparkles },
  { value: "graphics-design", label: "Graphics Design", icon: Palette },
  { value: "video-editing", label: "Video Editing", icon: Video },
  { value: "other", label: "Other", icon: Star },
]

const FloatingObject = ({
  children,
  className,
  delay = 0,
  duration = 4,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration,
      repeat: Number.POSITIVE_INFINITY,
      delay,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
)

const RippleEffect = ({ x, y }: { x: number; y: number }) => (
  <motion.span
    className="absolute rounded-full bg-primary/30 pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ width: 0, height: 0, opacity: 0.5, x: "-50%", y: "-50%" }}
    animate={{ width: 300, height: 300, opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  />
)

const PaperClipDecor = ({ className, rotate = 0 }: { className?: string; rotate?: number }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={`text-primary/40 ${className}`}
    style={{ rotate: `${rotate}deg` }}
    animate={{ rotate: [rotate, rotate + 10, rotate - 5, rotate] }}
    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </motion.svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    requirements: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleServiceSelect = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
    setIsDropdownOpen(false)
  }

  const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { id, x, y }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const payload = await res.json()
      if (!res.ok) throw new Error(payload?.error || 'Failed to send message')
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', phone: '', service: '', requirements: '' })
    } catch (err: any) {
      alert('Error sending message: ' + (err?.message ?? String(err)))
    } finally {
      setIsSubmitting(false)
    }
  }

  // Prefill form from URL params (e.g., links from training pages)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const title = params.get('title') || params.get('course')
      const source = params.get('source')
      if (source === 'training' && title) {
        setFormData((prev) => ({
          ...prev,
          service: 'training',
          requirements: `Interested in course: ${title}\n\n` + prev.requirements,
        }))
      }
    } catch (e) {
      // ignore on SSR
    }
  }, [])

  const selectedService = services.find((s) => s.value === formData.service)
  const canSubmit = formData.name && formData.email && formData.service && formData.requirements

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <FloatingObject className="top-20 left-[10%] hidden md:block" delay={0}>
            <PaperClipDecor className="w-12 h-12" rotate={-20} />
          </FloatingObject>
          <FloatingObject className="top-32 right-[15%] hidden md:block" delay={1}>
            <Sparkles className="w-8 h-8 text-primary/30" />
          </FloatingObject>
          <FloatingObject className="bottom-10 left-[20%] hidden md:block" delay={2}>
            <Star className="w-6 h-6 text-accent/40" />
          </FloatingObject>
          <FloatingObject className="bottom-20 right-[10%] hidden md:block" delay={0.5}>
            <PaperClipDecor className="w-10 h-10" rotate={45} />
          </FloatingObject>

          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <MotionDiv animation="fadeInUp">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Get in Touch
                </span>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Let's Start Your <span className="text-primary">Growth Journey</span>
                </h1>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  Ready to transform your digital presence? Fill out the form below and we'll get back to you within 24
                  hours with a customized strategy.
                </p>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactMethods.map((method, index) => (
                <MotionDiv key={method.title} animation="fadeInUp" delay={index * 0.1} className="min-w-0">
                  <a href={method.href} className="block min-w-0 h-full">
                    <AnimatedCard className="text-center h-full min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                      <p className="text-primary font-medium break-all">{method.value}</p>
                    </AnimatedCard>
                  </a>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Contact Form */}
        <MotionSection className="py-16 px-4 relative">
          <FloatingObject className="top-0 left-[5%] hidden lg:block" delay={0} duration={5}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center">
              <Code className="w-8 h-8 text-primary/50" />
            </div>
          </FloatingObject>
          <FloatingObject className="top-20 right-[8%] hidden lg:block" delay={1} duration={6}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center">
              <Palette className="w-7 h-7 text-accent/50" />
            </div>
          </FloatingObject>
          <FloatingObject className="bottom-32 left-[3%] hidden lg:block" delay={2} duration={4}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm border border-primary/10 flex items-center justify-center rotate-12">
              <Video className="w-6 h-6 text-primary/50" />
            </div>
          </FloatingObject>
          <FloatingObject className="bottom-20 right-[5%] hidden lg:block" delay={0.5} duration={5}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/10 flex items-center justify-center -rotate-12">
              <Globe className="w-10 h-10 text-accent/50" />
            </div>
          </FloatingObject>

          {/* Paper clip decorations around form */}
          <div className="absolute top-1/4 left-[15%] hidden xl:block">
            <PaperClipDecor className="w-16 h-16" rotate={-30} />
          </div>
          <div className="absolute bottom-1/4 right-[12%] hidden xl:block">
            <PaperClipDecor className="w-20 h-20" rotate={60} />
          </div>

          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We've received your inquiry and will get back to you within 24 hours with a customized strategy
                    proposal.
                  </p>
                  <AnimatedButton variant="primary" onClick={() => setIsSubmitted(false)}>
                    Submit Another Inquiry
                  </AnimatedButton>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="relative">
                    {/* Paper clip attached to card */}
                    <motion.div
                      className="absolute -top-6 left-8 z-10"
                      animate={{ rotate: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Paperclip className="w-12 h-12 text-primary drop-shadow-lg" strokeWidth={1.5} />
                    </motion.div>
                    <motion.div
                      className="absolute -top-4 right-12 z-10"
                      animate={{ rotate: [5, -5, 5] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                    >
                      <Paperclip className="w-8 h-8 text-muted-foreground/50 rotate-45" strokeWidth={1.5} />
                    </motion.div>

                    <AnimatedCard className="p-6 md:p-10 relative overflow-hidden" onClick={handleRipple}>
                      {/* Ripple effects container */}
                      {ripples.map((ripple) => (
                        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
                      ))}

                      {/* Form header with sparkle */}
                      <div className="text-center mb-8 relative">
                        <motion.div
                          className="absolute -top-2 right-1/4"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Sparkles className="w-5 h-5 text-primary" />
                        </motion.div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Send Us a Message</h2>
                        <p className="text-muted-foreground">Tell us about your project and we'll make it happen</p>
                      </div>

                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          <div className="group">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                            >
                              Full Name *
                            </label>
                            <motion.div whileFocus={{ scale: 1.01 }}>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                                required
                              />
                            </motion.div>
                          </div>
                          <div className="group">
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                            >
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="you@company.com"
                              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                              required
                            />
                          </div>
                        </div>

                        {/* Company & Phone Row */}
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                          <div className="group">
                            <label
                              htmlFor="company"
                              className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder="Your company"
                              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                            />
                          </div>
                          <div className="group">
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 XXXXX XXXXX"
                              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                            />
                          </div>
                        </div>

                        <div className="group relative">
                          <label className="block text-sm font-medium mb-2">Service Required *</label>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                              className={`w-full px-4 py-3 rounded-xl border-2 bg-background text-left flex items-center justify-between transition-all outline-none ${
                                isDropdownOpen
                                  ? "border-primary ring-4 ring-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              {selectedService ? (
                                <span className="flex items-center gap-3">
                                  <selectedService.icon className="w-5 h-5 text-primary" />
                                  <span>{selectedService.label}</span>
                                </span>
                              ) : (
                                <span className="text-muted-foreground">Select a service</span>
                              )}
                              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                                <ChevronDown className="w-5 h-5 text-muted-foreground" />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {isDropdownOpen && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute z-50 w-full mt-2 py-2 bg-background border-2 border-border rounded-xl shadow-xl max-h-64 overflow-auto"
                                >
                                  {services.map((service, index) => (
                                    <motion.button
                                      key={service.value}
                                      type="button"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.03 }}
                                      onClick={() => handleServiceSelect(service.value)}
                                      className={`w-full px-4 py-3 text-left flex items-center gap-3 hover:bg-primary/5 transition-colors ${
                                        formData.service === service.value ? "bg-primary/10 text-primary" : ""
                                      }`}
                                    >
                                      <service.icon
                                        className={`w-5 h-5 ${formData.service === service.value ? "text-primary" : "text-muted-foreground"}`}
                                      />
                                      <span>{service.label}</span>
                                      {formData.service === service.value && (
                                        <CheckCircle className="w-4 h-4 text-primary ml-auto" />
                                      )}
                                    </motion.button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        <div className="group">
                          <div className="flex items-center justify-between mb-2">
                            <label
                              htmlFor="requirements"
                              className="block text-sm font-medium group-focus-within:text-primary transition-colors"
                            >
                              Project Requirements *
                            </label>
                            <span className="text-xs text-muted-foreground">{formData.requirements.length}/1000</span>
                          </div>
                          <div className="relative">
                            <textarea
                              id="requirements"
                              name="requirements"
                              value={formData.requirements}
                              onChange={handleInputChange}
                              placeholder="Describe your project in detail...&#10;&#10;• What are your goals?&#10;• What's your timeline?&#10;• Any specific features needed?&#10;• Reference websites you like?"
                              rows={6}
                              maxLength={1000}
                              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                              required
                            />
                            {/* Decorative corner element */}
                            <div className="absolute bottom-3 right-3 pointer-events-none">
                              <motion.div animate={{ opacity: formData.requirements.length > 0 ? 1 : 0.3 }}>
                                <MessageSquare className="w-5 h-5 text-primary/30" />
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Submit button */}
                        <motion.div className="pt-4" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                          <AnimatedButton
                            variant="primary"
                            size="lg"
                            type="submit"
                            disabled={!canSubmit || isSubmitting}
                            className="w-full disabled:opacity-50 disabled:cursor-not-allowed group"
                          >
                            <span className="flex items-center justify-center gap-2">
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                              <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Send className="w-5 h-5" />
                              </motion.span>
                            </span>
                          </AnimatedButton>
                        </motion.div>

                        {/* Trust indicators */}
                        <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Free Consultation
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-primary" />
                            24hr Response
                          </span>
                        </div>
                      </form>
                    </AnimatedCard>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </MotionSection>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Quick answers to common questions</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How quickly will I hear back?",
                  a: "We respond to all inquiries within 24 hours, often sooner. For urgent projects, feel free to call us directly.",
                },
                {
                  q: "What information should I include?",
                  a: "The more details the better! Include your goals, timeline, budget range, and any reference websites you like.",
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes! Your first consultation is completely free. We'll discuss your project and provide initial recommendations.",
                },
                {
                  q: "What's your typical project timeline?",
                  a: "Timelines vary by project scope. Simple websites take 2-4 weeks, while complex apps may take 2-3 months.",
                },
              ].map((faq, index) => (
                <MotionDiv key={index} animation="fadeInUp" delay={index * 0.1}>
                  <AnimatedCard className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </AnimatedCard>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
