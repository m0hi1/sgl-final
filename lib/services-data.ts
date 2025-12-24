import { Search, Target, Smartphone, Globe, Share2, PenTool, Film } from "lucide-react"

export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: typeof Search
  color: string
  bgColor: string
  features: string[]
  benefits: {
    title: string
    description: string
  }[]
  process: {
    step: string
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  stats: {
    value: string
    label: string
  }[]
}

export const services: Service[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business online with measurable results.",
    longDescription:
      "A form of marketing that involves the use of the internet and information technology. We provide the most effective digital marketing solutions including Social Media Marketing, Google Ads, SEM, SEO, and PPC at the most affordable prices to help your business grow exponentially.",
    icon: Target,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: [
      "Campaign Strategy",
      "Market Research",
      "Competitor Analysis",
      "Content Strategy",
      "Performance Tracking",
      "ROI Optimization",
      "Lead Generation",
      "Brand Awareness",
    ],
    benefits: [
      {
        title: "Affordable Pricing",
        description: "Get effective marketing services at the most competitive prices.",
      },
      {
        title: "Multi-Platform Reach",
        description: "Reach your audience across all major digital platforms.",
      },
      {
        title: "Measurable Results",
        description: "Track every click, conversion, and dollar spent with detailed analytics.",
      },
      {
        title: "Scalable Growth",
        description: "Easily scale your campaigns as your business grows.",
      },
    ],
    process: [
      { step: "01", title: "Strategy", description: "Develop a customized marketing strategy for your goals." },
      { step: "02", title: "Setup", description: "Set up campaigns across relevant platforms." },
      { step: "03", title: "Launch", description: "Launch campaigns with careful monitoring." },
      { step: "04", title: "Optimize", description: "Continuously optimize for maximum ROI." },
    ],
    faqs: [
      {
        question: "What digital marketing services do you offer?",
        answer: "We offer Social Media Marketing, Google Ads, PPC, SEO, and comprehensive digital campaigns.",
      },
      {
        question: "What's the minimum budget required?",
        answer: "We work with budgets of all sizes and customize strategies accordingly.",
      },
      {
        question: "How do you measure success?",
        answer: "We track ROAS, conversions, leads, and provide transparent monthly reporting.",
      },
    ],
    stats: [
      { value: "5x", label: "Average ROAS" },
      { value: "-40%", label: "Cost Per Lead" },
      { value: "200+", label: "Campaigns Run" },
      { value: "95%", label: "Client Retention" },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    description: "Facebook Marketing, Instagram Marketing, and more to grow your brand presence and engagement.",
    longDescription:
      "We provide the most effective Social Media Marketing services across Facebook, Instagram, LinkedIn, and other major platforms. Our strategies are designed to increase brand awareness, engagement, and conversions at affordable prices.",
    icon: Share2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: [
      "Facebook Marketing",
      "Instagram Marketing",
      "LinkedIn Marketing",
      "Content Creation",
      "Community Management",
      "Influencer Outreach",
      "Paid Social Campaigns",
      "Analytics & Reporting",
    ],
    benefits: [
      {
        title: "Brand Awareness",
        description: "Build a strong brand presence across social platforms.",
      },
      {
        title: "Engagement Growth",
        description: "Increase followers, likes, comments, and shares organically.",
      },
      {
        title: "Targeted Reach",
        description: "Reach your ideal customers with precise targeting.",
      },
      {
        title: "Lead Generation",
        description: "Convert social followers into paying customers.",
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Analyze your current social media presence." },
      { step: "02", title: "Strategy", description: "Create a tailored social media strategy." },
      { step: "03", title: "Execute", description: "Implement campaigns and content." },
      { step: "04", title: "Optimize", description: "Monitor and optimize for best results." },
    ],
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer: "We manage Facebook, Instagram, LinkedIn, Twitter, Pinterest, and more.",
      },
      {
        question: "Do you create content?",
        answer: "Yes, we create engaging content including graphics, videos, and copy.",
      },
      {
        question: "How often will you post?",
        answer: "Posting frequency depends on your package and platform requirements.",
      },
    ],
    stats: [
      { value: "300%", label: "Engagement Increase" },
      { value: "50K+", label: "Followers Gained" },
      { value: "100+", label: "Brands Managed" },
      { value: "95%", label: "Client Satisfaction" },
    ],
  },
  {
    slug: "ppc-google-ads",
    title: "Pay Per Click (PPC) & Google Ads",
    shortTitle: "PPC & Google Ads",
    description: "Google Search Ads, YouTube Ads, and PPC campaigns to drive immediate traffic and conversions.",
    longDescription:
      "We provide expert Pay Per Click (PPC) marketing and Google Ads management including Google Search Engine Ads, YouTube Ads, Display Ads, and more. Our data-driven approach ensures maximum ROI for your advertising budget.",
    icon: Target,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    features: [
      "Google Search Ads",
      "YouTube Ads",
      "Display Advertising",
      "Shopping Ads",
      "Remarketing Campaigns",
      "Keyword Research",
      "Ad Copywriting",
      "Conversion Tracking",
    ],
    benefits: [
      {
        title: "Immediate Results",
        description: "Start getting traffic and leads from day one.",
      },
      {
        title: "Targeted Advertising",
        description: "Reach customers actively searching for your services.",
      },
      {
        title: "Budget Control",
        description: "Full control over your ad spend with no surprises.",
      },
      {
        title: "Measurable ROI",
        description: "Track every conversion and calculate exact returns.",
      },
    ],
    process: [
      { step: "01", title: "Research", description: "Keyword and competitor research." },
      { step: "02", title: "Setup", description: "Create and structure campaigns." },
      { step: "03", title: "Launch", description: "Go live with careful monitoring." },
      { step: "04", title: "Optimize", description: "Continuous optimization for better results." },
    ],
    faqs: [
      {
        question: "What's the minimum ad budget?",
        answer: "We recommend starting with at least ₹15,000/month for effective campaigns.",
      },
      {
        question: "How quickly will I see results?",
        answer: "PPC delivers immediate traffic; optimization takes 2-4 weeks for best results.",
      },
      {
        question: "Do you manage YouTube ads?",
        answer: "Yes, we create and manage video ad campaigns on YouTube.",
      },
    ],
    stats: [
      { value: "5x", label: "Average ROAS" },
      { value: "-35%", label: "Cost Per Click" },
      { value: "₹10Cr+", label: "Ad Spend Managed" },
      { value: "98%", label: "Client Retention" },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO Services",
    description: "On-Page and Off-Page SEO to boost your website rankings and organic traffic.",
    longDescription:
      "A process of improving your site to make it easier for search engines to find and rank it. We help boost your business by ranking your website using strong and tested SEO techniques including On-Page SEO, Technical SEO, Off-Page SEO, and Local SEO.",
    icon: Search,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    features: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Keyword Research",
      "Content Optimization",
      "Link Building",
      "SEO Audits",
    ],
    benefits: [
      {
        title: "Higher Rankings",
        description: "Get your website to the top of search results.",
      },
      {
        title: "Organic Traffic",
        description: "Drive qualified traffic without paying for every click.",
      },
      {
        title: "Local Visibility",
        description: "Dominate local search results in your area.",
      },
      {
        title: "Long-term Results",
        description: "Build sustainable organic growth that compounds over time.",
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Comprehensive analysis of your current SEO performance." },
      { step: "02", title: "Research", description: "Identify high-value keywords aligned with your business." },
      { step: "03", title: "Optimize", description: "Implement on-page, technical, and off-page optimizations." },
      { step: "04", title: "Monitor", description: "Track rankings and continuously improve." },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "SEO typically shows meaningful improvements within 3-6 months of consistent effort.",
      },
      {
        question: "What's included in your SEO services?",
        answer:
          "Our packages include audits, keyword research, on-page optimization, link building, and monthly reporting.",
      },
      {
        question: "Do you guarantee rankings?",
        answer: "We use proven strategies but don't guarantee specific rankings as algorithms constantly evolve.",
      },
    ],
    stats: [
      { value: "300%", label: "Avg Traffic Increase" },
      { value: "150+", label: "Keywords Ranked" },
      { value: "90%", label: "Client Retention" },
      { value: "4x", label: "ROI Average" },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortTitle: "Social Media Management",
    description: "Complete management of your Facebook Page, Instagram Page, and other social profiles.",
    longDescription:
      "We handle the complete management of your social media presence including Facebook Page, Instagram Page, LinkedIn, and other platforms. From content creation to community management, we keep your brand active and engaging.",
    icon: Share2,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    features: [
      "Facebook Page Management",
      "Instagram Page Management",
      "Content Calendar",
      "Post Scheduling",
      "Community Engagement",
      "Reputation Management",
      "Monthly Reporting",
      "Profile Optimization",
    ],
    benefits: [
      {
        title: "Consistent Presence",
        description: "Regular posting keeps your brand top of mind.",
      },
      {
        title: "Save Time",
        description: "Focus on your business while we handle social media.",
      },
      {
        title: "Professional Content",
        description: "High-quality posts that represent your brand.",
      },
      {
        title: "Community Growth",
        description: "Build and engage your online community.",
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review your current social presence." },
      { step: "02", title: "Plan", description: "Create content calendar and strategy." },
      { step: "03", title: "Create", description: "Design and write engaging content." },
      { step: "04", title: "Manage", description: "Post, engage, and report results." },
    ],
    faqs: [
      {
        question: "How many posts per week?",
        answer: "Depends on your package—typically 3-7 posts per week per platform.",
      },
      {
        question: "Do you respond to comments?",
        answer: "Yes, community management is included in our packages.",
      },
      {
        question: "Can I approve posts before publishing?",
        answer: "Yes, we can set up an approval workflow if needed.",
      },
    ],
    stats: [
      { value: "100+", label: "Pages Managed" },
      { value: "5K+", label: "Posts Created" },
      { value: "24hr", label: "Response Time" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    description: "Convert your design into interactive webpages that help establish and grow your business online.",
    longDescription:
      "We will convert your design into actual interactive webpages that will help you to establish and grow your business online to the next level. Our websites are fast, responsive, and optimized for conversions.",
    icon: Globe,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Implementation",
      "Landing Pages",
      "Performance Optimization",
      "SEO-Friendly Structure",
      "Maintenance & Support",
    ],
    benefits: [
      {
        title: "Establish Online Presence",
        description: "Create a professional digital storefront for your business.",
      },
      {
        title: "Grow Your Business",
        description: "Convert visitors into customers with optimized web experiences.",
      },
      {
        title: "Mobile-First Design",
        description: "Flawless experience across all devices and screen sizes.",
      },
      {
        title: "Fast Performance",
        description: "Lightning-fast load times that improve SEO and user experience.",
      },
    ],
    process: [
      { step: "01", title: "Discovery", description: "Understand your brand, goals, and target audience." },
      { step: "02", title: "Design", description: "Create wireframes and high-fidelity designs for approval." },
      { step: "03", title: "Development", description: "Build your website with clean code and modern technologies." },
      { step: "04", title: "Launch & Support", description: "Deploy your site and provide ongoing maintenance." },
    ],
    faqs: [
      {
        question: "How long does website development take?",
        answer: "A landing page takes 2-3 weeks, while a full website typically takes 4-8 weeks.",
      },
      {
        question: "Do you provide hosting?",
        answer: "Yes, we offer secure cloud-based hosting solutions at affordable prices.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "We can modernize and optimize your existing website for better performance.",
      },
    ],
    stats: [
      { value: "100+", label: "Websites Launched" },
      { value: "45%", label: "Avg Conversion Lift" },
      { value: "<2s", label: "Avg Load Time" },
      { value: "100%", label: "Mobile Responsive" },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile App Development",
    description: "Android/iOS mobile applications based on intense research and innovations to solve real problems.",
    longDescription:
      "We develop our own Android/iOS based life-size Mobile Applications, based on intense research and innovations, to solve the burning problems of people and help them grow their business exponentially by saving their time and energy.",
    icon: Smartphone,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Maintenance",
      "Performance Optimization",
      "API Integration",
      "App Store Deployment",
    ],
    benefits: [
      {
        title: "Solve Real Problems",
        description: "Apps designed to address actual challenges faced by your users and business.",
      },
      {
        title: "Save Time & Energy",
        description: "Automate processes and streamline operations for exponential growth.",
      },
      {
        title: "Research-Driven",
        description: "Every app is built on intense research and innovative solutions.",
      },
      {
        title: "Scalable Solutions",
        description: "Apps that grow with your business needs.",
      },
    ],
    process: [
      { step: "01", title: "Research", description: "Deep dive into your business problems and user needs." },
      { step: "02", title: "Design", description: "Create intuitive UI/UX designs for the best user experience." },
      { step: "03", title: "Development", description: "Build robust, scalable mobile applications." },
      { step: "04", title: "Launch & Support", description: "Deploy to app stores and provide ongoing maintenance." },
    ],
    faqs: [
      {
        question: "What platforms do you develop for?",
        answer: "We develop for both Android and iOS platforms, including cross-platform solutions using Flutter.",
      },
      {
        question: "How long does app development take?",
        answer: "Timeline varies based on complexity, typically 8-16 weeks for a full-featured application.",
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer comprehensive maintenance and support packages for all our applications.",
      },
    ],
    stats: [
      { value: "50+", label: "Apps Developed" },
      { value: "100K+", label: "Downloads" },
      { value: "4.5★", label: "Avg Rating" },
      { value: "99%", label: "Client Satisfaction" },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphics Design",
    shortTitle: "Graphics Design",
    description: "Convert your thoughts and ideas into creative visuals for online promotion and business growth.",
    longDescription:
      "We help you to convert your thoughts and ideas into creative visuals in the form of digital banners, logos etc. that can be used for online promotion and growth of your business. Our designs capture attention and communicate your brand effectively.",
    icon: PenTool,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    features: [
      "Logo Design",
      "Digital Banners",
      "Social Media Graphics",
      "Brand Identity",
      "Marketing Materials",
      "Infographics",
      "Print Design",
      "UI/UX Design",
    ],
    benefits: [
      {
        title: "Creative Visuals",
        description: "Eye-catching designs that capture attention.",
      },
      {
        title: "Brand Consistency",
        description: "Cohesive visual identity across all platforms.",
      },
      {
        title: "Growth-Focused",
        description: "Designs optimized for engagement and conversions.",
      },
      {
        title: "Quick Turnaround",
        description: "Fast delivery without compromising quality.",
      },
    ],
    process: [
      { step: "01", title: "Brief", description: "Understand your vision and design requirements." },
      { step: "02", title: "Concepts", description: "Create initial design concepts for review." },
      { step: "03", title: "Refine", description: "Iterate based on your feedback." },
      { step: "04", title: "Deliver", description: "Provide final files in all required formats." },
    ],
    faqs: [
      {
        question: "What file formats do you provide?",
        answer: "We deliver in all standard formats including PNG, JPG, SVG, PDF, and source files.",
      },
      {
        question: "How many revisions are included?",
        answer: "Our packages typically include 2-3 rounds of revisions.",
      },
      {
        question: "Can you match our existing brand?",
        answer: "Yes, we work within your brand guidelines to ensure consistency.",
      },
    ],
    stats: [
      { value: "500+", label: "Designs Created" },
      { value: "100+", label: "Logos Designed" },
      { value: "48hr", label: "Avg Turnaround" },
      { value: "98%", label: "Client Satisfaction" },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description: "Professional video editing services for promotional videos, social media content, and more.",
    longDescription:
      "We provide professional video editing services to create engaging content for your brand. From promotional videos to social media reels, YouTube content, and corporate videos, we deliver high-quality edits that capture attention and drive engagement.",
    icon: Film,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    features: [
      "Promotional Videos",
      "Social Media Reels",
      "YouTube Content",
      "Corporate Videos",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
      "Subtitles & Captions",
    ],
    benefits: [
      {
        title: "Engaging Content",
        description: "Videos that capture and hold viewer attention.",
      },
      {
        title: "Brand Storytelling",
        description: "Tell your brand story through compelling visuals.",
      },
      {
        title: "Multi-Platform",
        description: "Optimized for all social platforms and formats.",
      },
      {
        title: "Quick Delivery",
        description: "Fast turnaround without compromising quality.",
      },
    ],
    process: [
      { step: "01", title: "Brief", description: "Understand your video requirements and goals." },
      { step: "02", title: "Edit", description: "Create the first cut with your footage." },
      { step: "03", title: "Refine", description: "Incorporate feedback and polish." },
      { step: "04", title: "Deliver", description: "Export in required formats and resolutions." },
    ],
    faqs: [
      {
        question: "What video formats do you support?",
        answer: "We work with all major formats and deliver in MP4, MOV, and platform-specific formats.",
      },
      {
        question: "How long does editing take?",
        answer: "Simple edits take 2-3 days; complex projects may take 1-2 weeks.",
      },
      {
        question: "Do you provide raw footage shooting?",
        answer: "Our focus is on editing; we work with footage you provide.",
      },
    ],
    stats: [
      { value: "200+", label: "Videos Edited" },
      { value: "1M+", label: "Video Views" },
      { value: "48hr", label: "Avg Turnaround" },
      { value: "99%", label: "Client Satisfaction" },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
