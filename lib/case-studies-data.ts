// Centralized case studies data
export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: string
  services: string[]
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  timeline: string
  heroImage: string
  gallery: string[]
  featured: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "fashionhub-ecommerce-growth",
    title: "E-commerce Revenue Explosion",
    client: "FashionHub",
    industry: "E-commerce",
    services: ["SEO", "PPC", "CRO"],
    challenge:
      "FashionHub was struggling with declining organic traffic and high customer acquisition costs. Their paid campaigns were underperforming, and conversion rates were below industry average.",
    solution:
      "We implemented a comprehensive digital strategy combining technical SEO overhaul, strategic content marketing, and optimized PPC campaigns with advanced audience targeting. Our CRO team redesigned key landing pages for better conversions.",
    results: [
      { metric: "Revenue Increase", value: "+90%", description: "Year-over-year revenue growth" },
      { metric: "Organic Traffic", value: "+90%", description: "Increase in organic sessions" },
      { metric: "ROAS", value: "1.2x", description: "Return on ad spend" },
      { metric: "Conversion Rate", value: "+80%", description: "Improvement in conversion rate" },
    ],
    testimonial: {
      quote:
        "SGL Smart Galaxy Labs completely transformed our digital presence. The results exceeded our wildest expectations. They're not just an agency—they're true partners in our success.",
      author: "Jessica Martinez",
      role: "CEO, FashionHub",
    },
    timeline: "12 months",
    heroImage: "/ecommerce-dashboard-analytics.png",
    gallery: ["/fashion-ecommerce-website.png", "/marketing-analytics-dashboard.jpg"],
    featured: true,
  },
  {
    id: "2",
    slug: "techsolutions-lead-generation",
    title: "B2B Lead Generation Transformation",
    client: "TechSolutions",
    industry: "SaaS",
    services: ["Content Marketing", "Marketing Automation", "LinkedIn Ads"],
    challenge:
      "TechSolutions needed to scale their B2B lead generation but was relying solely on outbound sales. Their content wasn't generating leads, and they had no automation in place.",
    solution:
      "We built a comprehensive inbound marketing machine with thought leadership content, targeted LinkedIn campaigns, and sophisticated lead nurturing automation. We implemented lead scoring to prioritize sales-ready prospects.",
    results: [
      { metric: "Qualified Leads", value: "2x", description: "Increase in MQLs per month" },
      { metric: "Cost Per Lead", value: "-62%", description: "Reduction in CPL" },
      // { metric: "Sales Pipeline", value: "+$4.2M", description: "Added to quarterly pipeline" },
      { metric: "Time to Close", value: "-35%", description: "Faster sales cycle" },
    ],
    testimonial: {
      quote:
        "Our sales team finally has a consistent flow of qualified leads. The automation SGL Smart Galaxy Labs built saves us hours every week and the leads are significantly more qualified.",
      author: "David Chen",
      role: "VP of Marketing, TechSolutions",
    },
    timeline: "9 months",
    heroImage: "/b2b-saas-leads-funnel.jpg",
    gallery: ["/b2b-saas-dashboard.jpg", "/lead-generation-funnel.png"],
    featured: true,
  },
  {
    id: "3",
    slug: "healthplus-brand-awareness",
    title: "Healthcare Brand Breakthrough",
    client: "HealthPlus",
    industry: "Healthcare",
    services: ["Social Media", "Video Marketing", "Influencer Marketing"],
    challenge:
      "HealthPlus was a new entrant in a competitive healthcare market dominated by established players. They needed to build brand awareness and trust quickly.",
    solution:
      "We developed a comprehensive social media strategy focused on educational content, patient success stories, and strategic influencer partnerships. Our video team created compelling content that humanized the brand.",
    results: [
      { metric: "Brand Impressions", value: "1M+", description: "Total reach across platforms" },
      { metric: "Engagement Rate", value: "3.2%", description: "Average engagement rate" },
      { metric: "Follower Growth", value: "+90%", description: "Social media following increase" },
      { metric: "Brand Recall", value: "+33%", description: "Improvement in brand recognition" },
    ],
    testimonial: {
      quote:
        "In just 8 months, SGL Smart Galaxy Labs helped us become a recognized name in our market. Their creative approach to healthcare marketing was exactly what we needed.",
      author: "Dr. Sarah Williams",
      role: "Founder, HealthPlus",
    },
    timeline: "8 months",
    heroImage: "/healthcare-brand-social-media.jpg",
    gallery: ["/healthcare-social-media.png", "/medical-brand-marketing.jpg"],
    featured: true,
  },
  {
    id: "4",
    slug: "finserv-website-redesign",
    title: "Financial Services Digital Transformation",
    client: "FinServ Capital",
    industry: "Finance",
    services: ["Web Design", "SEO", "Content Marketing"],
    challenge:
      "FinServ's outdated website was hurting their credibility and failing to convert visitors. They needed a modern, trust-building digital presence that would appeal to high-net-worth clients.",
    solution:
      "We designed a premium website experience that communicated trust and expertise. Combined with targeted SEO and thought leadership content, we positioned them as industry leaders.",
    results: [
      { metric: "Conversion Rate", value: "+80%", description: "Website conversion improvement" },
      { metric: "Time on Site", value: "+30%", description: "Increase in engagement" },
      { metric: "Organic Leads", value: "3.4x", description: "Growth in organic inquiries" },
      { metric: "Page Speed", value: "94/100", description: "Google PageSpeed score" },
    ],
    timeline: "6 months",
    heroImage: "/finance-website-modern-design.jpg",
    gallery: ["/financial-services-website.png", "/professional-web-design.jpg"],
    featured: false,
  },
  {
    id: "5",
    slug: "retailmax-ppc-optimization",
    title: "Retail PPC Turnaround",
    client: "RetailMax",
    industry: "Retail",
    services: ["PPC", "Shopping Ads", "Remarketing"],
    challenge:
      "RetailMax was spending $500K+ monthly on ads with declining returns. Their campaigns were poorly structured and they were losing ground to competitors.",
    solution:
      "We completely restructured their Google Ads account, implemented smart shopping campaigns, and built sophisticated remarketing funnels. Our team optimized daily based on performance data.",
    results: [
      { metric: "ROAS", value: "8.7x", description: "Up from 2.1x baseline" },
      { metric: "Ad Spend Efficiency", value: "+312%", description: "Revenue per dollar spent" },
      { metric: "CPA", value: "-58%", description: "Cost per acquisition reduction" },
      { metric: "Revenue", value: "+$2.8M", description: "Incremental monthly revenue" },
    ],
    timeline: "4 months",
    heroImage: "/retail-ecommerce-ppc-dashboard.jpg",
    gallery: ["/google-ads-dashboard.jpg", "/ecommerce-analytics.png"],
    featured: false,
  },
  {
    id: "6",
    slug: "edutech-content-strategy",
    title: "EdTech Content Empire",
    client: "LearnPro",
    industry: "Education",
    services: ["Content Marketing", "SEO", "Email Marketing"],
    challenge:
      "LearnPro had great courses but no organic presence. They were entirely dependent on paid acquisition with no content strategy or email nurturing.",
    solution:
      "We built a content flywheel with SEO-optimized educational content, lead magnets, and sophisticated email sequences that nurtured prospects through long consideration cycles.",
    results: [
      { metric: "Organic Traffic", value: "+80%", description: "Growth in organic sessions" },
      { metric: "Email List", value: "85K+", description: "Subscribers built from scratch" },
      { metric: "Course Sales", value: "+10%", description: "Increase in enrollments" },
      { metric: "CAC", value: "-71%", description: "Customer acquisition cost reduction" },
    ],
    timeline: "10 months",
    heroImage: "/education-technology-platform.jpg",
    gallery: ["/edtech-content-marketing.jpg", "/email-marketing-automation.png"],
    featured: false,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured)
}

export const industries = [...new Set(caseStudies.map((cs) => cs.industry))]
export const allServices = [...new Set(caseStudies.flatMap((cs) => cs.services))]
