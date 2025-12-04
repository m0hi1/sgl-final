// Centralized blog data
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    image: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  featuredImage: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "seo-trends-2025",
    title: "The Top 10 SEO Trends That Will Dominate 2025",
    excerpt:
      "Stay ahead of the curve with these emerging SEO trends that will shape search rankings in 2025 and beyond.",
    content: `
## Introduction

Search engine optimization continues to evolve at a rapid pace. As we head into 2025, several key trends are emerging that will reshape how we approach SEO strategy.

## 1. AI-Powered Search Experience

Google's AI capabilities are transforming search results. The Search Generative Experience (SGE) is changing how users interact with search, creating new opportunities and challenges for SEO professionals.

## 2. E-E-A-T Becomes Even More Critical

Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) signals are becoming increasingly important. Content that demonstrates real-world experience and expertise will be rewarded.

## 3. Voice Search Optimization

With smart speakers and voice assistants becoming ubiquitous, optimizing for conversational queries is no longer optional. Focus on natural language patterns and question-based content.

## 4. Core Web Vitals 2.0

Google continues to refine its page experience signals. New metrics around Interaction to Next Paint (INP) are being closely monitored, making technical SEO more important than ever.

## 5. Video SEO Takes Center Stage

Video content consumption continues to skyrocket. Optimizing video content for search, including proper schema markup and transcripts, is essential for visibility.

## Key Takeaways

- Invest in AI-readiness for your content
- Build genuine expertise and authority
- Prioritize technical performance
- Diversify content formats
- Focus on user experience above all

The brands that adapt to these trends early will have a significant competitive advantage in 2025 and beyond.
    `,
    author: {
      name: "Sarah Chen",
      role: "Head of SEO",
      image: "/professional-asian-woman.png",
    },
    category: "SEO",
    tags: ["SEO", "Trends", "AI", "Technical SEO"],
    publishedAt: "2024-12-01",
    readTime: "8 min read",
    featuredImage: "/placeholder.svg?key=95hk0",
    featured: true,
  },
  {
    id: "2",
    slug: "ppc-budget-optimization",
    title: "How to Maximize Your PPC Budget: A Complete Guide",
    excerpt: "Learn proven strategies to stretch your PPC budget further while improving campaign performance and ROI.",
    content: `
## Introduction

Managing a PPC budget effectively is both an art and a science. In this guide, we'll share strategies that have helped our clients achieve 5x+ ROAS.

## Understanding Budget Allocation

The first step to budget optimization is understanding where your money is going. Analyze your campaigns by:

- Device performance
- Geographic location
- Time of day/day of week
- Audience segments

## Bid Strategy Optimization

Choosing the right bid strategy can make or break your campaigns:

### Manual vs. Automated Bidding

While automated bidding has improved significantly, manual bidding still has its place for highly competitive keywords or when you need precise control.

### Smart Bidding Strategies

- Target CPA: Best for lead generation
- Target ROAS: Ideal for e-commerce
- Maximize Conversions: Good for new campaigns

## Quality Score Improvement

A higher Quality Score means lower costs per click:

1. Improve ad relevance
2. Optimize landing page experience
3. Work on expected CTR

## Negative Keywords

Regularly mining search query reports for negative keywords can save significant budget waste.

## Conclusion

Budget optimization is an ongoing process. Regular analysis and adjustment are key to maximizing your PPC investment.
    `,
    author: {
      name: "Marcus Johnson",
      role: "Head of PPC",
      image: "/professional-black-man-headshot.jpg",
    },
    category: "PPC",
    tags: ["PPC", "Google Ads", "Budget", "ROAS"],
    publishedAt: "2024-11-28",
    readTime: "10 min read",
    featuredImage: "/placeholder.svg?key=9bz8w",
    featured: true,
  },
  {
    id: "3",
    slug: "content-marketing-strategy-b2b",
    title: "Building a B2B Content Marketing Strategy That Converts",
    excerpt: "A step-by-step framework for creating B2B content that generates leads and drives revenue.",
    content: `
## Introduction

B2B content marketing is fundamentally different from B2C. The sales cycles are longer, the decision-makers are more numerous, and the stakes are higher.

## Understanding the B2B Buyer Journey

B2B buyers typically go through three stages:

1. **Awareness**: Recognizing a problem
2. **Consideration**: Researching solutions
3. **Decision**: Choosing a vendor

Your content strategy should address all three stages.

## Content Types That Work

### Top of Funnel
- Educational blog posts
- Industry reports
- Infographics

### Middle of Funnel
- Case studies
- Comparison guides
- Webinars

### Bottom of Funnel
- Product demos
- Free trials
- Consultations

## Distribution Strategy

Creating great content is only half the battle. You need a robust distribution strategy:

- LinkedIn (essential for B2B)
- Email newsletters
- Industry publications
- Paid promotion

## Measuring Success

Track these metrics:
- MQLs generated
- Content engagement
- Pipeline influenced
- Revenue attributed

## Conclusion

A well-executed B2B content strategy can become your most powerful lead generation engine.
    `,
    author: {
      name: "David Kim",
      role: "Head of Content",
      image: "/content-strategist-man.png",
    },
    category: "Content Marketing",
    tags: ["Content Marketing", "B2B", "Lead Generation", "Strategy"],
    publishedAt: "2024-11-25",
    readTime: "12 min read",
    featuredImage: "/placeholder.svg?key=86j0k",
    featured: true,
  },
  {
    id: "4",
    slug: "social-media-algorithms-2025",
    title: "Decoding Social Media Algorithms: What Marketers Need to Know",
    excerpt: "Understand how social media algorithms work and how to optimize your content for maximum reach.",
    content: `
## Introduction

Social media algorithms are the gatekeepers of visibility. Understanding how they work is essential for any marketer.

## How Algorithms Decide What to Show

Most social platforms consider:

- Engagement signals
- Content relevance
- Timeliness
- Relationship strength
- Content type preferences

## Platform-Specific Insights

### Instagram
- Reels are heavily prioritized
- Comments > Likes for ranking
- Consistency matters

### LinkedIn
- Early engagement is crucial
- Native content outperforms links
- Comments drive visibility

### TikTok
- Watch time is king
- Loop potential matters
- Sound and trends boost reach

## Strategies for Algorithm Success

1. Post when your audience is active
2. Encourage meaningful engagement
3. Use native features
4. Stay consistent
5. Experiment with formats

## Conclusion

Algorithms reward content that keeps users on the platform. Focus on creating value, and the algorithms will follow.
    `,
    author: {
      name: "Emily Davis",
      role: "Creative Director",
      image: "/creative-director-woman.png",
    },
    category: "Social Media",
    tags: ["Social Media", "Algorithms", "Instagram", "LinkedIn", "TikTok"],
    publishedAt: "2024-11-20",
    readTime: "7 min read",
    featuredImage: "/placeholder.svg?key=ow0tu",
    featured: false,
  },
  {
    id: "5",
    slug: "marketing-automation-roi",
    title: "Calculating and Maximizing Marketing Automation ROI",
    excerpt: "A data-driven approach to measuring and improving the ROI of your marketing automation investment.",
    content: `
## Introduction

Marketing automation can be a game-changer, but only if implemented correctly. Let's explore how to measure and maximize your ROI.

## Key ROI Metrics

### Direct Metrics
- Revenue attributed to automation
- Cost savings (time saved)
- Lead conversion rate improvement

### Indirect Metrics
- Lead quality improvement
- Sales cycle reduction
- Customer lifetime value increase

## Calculating Automation ROI

\`\`\`
ROI = (Revenue Generated - Total Cost) / Total Cost × 100
\`\`\`

Include these costs:
- Platform subscription
- Implementation
- Ongoing management
- Content creation

## Maximizing Your ROI

### 1. Start with High-Impact Workflows
- Abandoned cart sequences
- Lead nurturing
- Onboarding series

### 2. Personalization at Scale
Use dynamic content to personalize:
- Email subject lines
- Product recommendations
- Send times

### 3. Continuous Optimization
- A/B test everything
- Monitor engagement metrics
- Iterate based on data

## Conclusion

Marketing automation ROI compounds over time. The key is starting with high-impact use cases and continuously optimizing.
    `,
    author: {
      name: "Lisa Patel",
      role: "Head of Analytics",
      image: "/data-analyst-woman.png",
    },
    category: "Marketing Automation",
    tags: ["Marketing Automation", "ROI", "Analytics", "Email Marketing"],
    publishedAt: "2024-11-15",
    readTime: "9 min read",
    featuredImage: "/placeholder.svg?key=b8k4y",
    featured: false,
  },
  {
    id: "6",
    slug: "website-conversion-optimization",
    title: "15 Website Conversion Optimization Tactics That Actually Work",
    excerpt: "Proven CRO tactics that have helped our clients increase conversions by 50% or more.",
    content: `
## Introduction

Your website is your hardest-working salesperson. Here are 15 tactics to make it even more effective.

## High-Impact Tactics

### 1. Simplify Your Forms
Every field you remove can increase conversions by 10%+.

### 2. Add Social Proof
Testimonials, logos, and reviews build trust instantly.

### 3. Create Urgency
Limited-time offers and scarcity drive action.

### 4. Optimize CTAs
Test button copy, color, size, and placement.

### 5. Improve Page Speed
Every second of delay costs conversions.

### 6. Use Exit-Intent Popups
Capture leaving visitors with compelling offers.

### 7. Add Live Chat
Real-time support removes buying friction.

### 8. Simplify Navigation
Help visitors find what they need quickly.

### 9. Mobile Optimization
Mobile traffic often exceeds desktop—optimize accordingly.

### 10. A/B Test Headlines
Your headline is the first thing visitors see.

## Testing Framework

1. Identify opportunities
2. Form hypotheses
3. Design tests
4. Run experiments
5. Analyze results
6. Implement winners
7. Repeat

## Conclusion

CRO is a continuous process. Start with these tactics and keep testing.
    `,
    author: {
      name: "Emily Davis",
      role: "Creative Director",
      image: "/creative-director-woman.png",
    },
    category: "Web Design",
    tags: ["CRO", "Web Design", "Conversion Rate", "UX"],
    publishedAt: "2024-11-10",
    readTime: "11 min read",
    featuredImage: "/placeholder.svg?key=jmdvn",
    featured: false,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export const categories = [...new Set(blogPosts.map((post) => post.category))]
export const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]
