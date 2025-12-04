"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { InlineCta } from "@/components/cta/inline-cta"
import { StickyCta } from "@/components/cta/sticky-cta"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { notFound, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, LinkIcon } from "lucide-react"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-12 mb-4">
            {line.slice(3)}
          </h2>
        )
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
            {line.slice(4)}
          </h3>
        )
      }
      if (line.startsWith("- ")) {
        return (
          <li key={i} className="ml-6 mb-2">
            {line.slice(2)}
          </li>
        )
      }
      if (
        line.startsWith("1. ") ||
        line.startsWith("2. ") ||
        line.startsWith("3. ") ||
        line.startsWith("4. ") ||
        line.startsWith("5. ") ||
        line.startsWith("6. ") ||
        line.startsWith("7. ")
      ) {
        return (
          <li key={i} className="ml-6 mb-2 list-decimal">
            {line.slice(3)}
          </li>
        )
      }
      if (line.startsWith("```")) {
        return null
      }
      if (line.trim() === "") {
        return <br key={i} />
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-semibold mb-4">
            {line.slice(2, -2)}
          </p>
        )
      }
      return (
        <p key={i} className="mb-4 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <MotionDiv animation="fadeInUp">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </MotionDiv>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <MotionDiv animation="fadeInUp">
                <Link
                  href={`/blog?category=${post.category}`}
                  className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                >
                  {post.category}
                </Link>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.05}>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.1}>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </MotionDiv>
            </div>

            <MotionDiv animation="fadeInUp" delay={0.15}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>
            </MotionDiv>

            <MotionDiv animation="fadeInUp" delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
            </MotionDiv>

            {/* Author */}
            <MotionDiv animation="fadeInUp" delay={0.25} className="flex items-center gap-4">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-muted-foreground">{post.author.role}</div>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Featured Image */}
        <MotionDiv animation="scaleIn" delay={0.3} className="px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </MotionDiv>

        {/* Content */}
        <MotionSection className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              {/* Main Content */}
              <article className="prose prose-lg max-w-none">{renderContent(post.content)}</article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32 space-y-8">
                  {/* Share */}
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </h4>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sglabs.com/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://sglabs.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://sglabs.com/blog/${post.slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                      <button
                        onClick={() => navigator.clipboard?.writeText(`https://sglabs.com/blog/${post.slug}`)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-left"
                      >
                        <LinkIcon className="w-4 h-4" />
                        Copy Link
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="font-semibold mb-4">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs bg-secondary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </MotionSection>

        {/* Inline CTA */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <InlineCta
              title="Need help with your marketing?"
              description="Get a free strategy session with our experts."
              buttonText="Book Free Call"
            />
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
              <MotionDiv animation="fadeInUp" className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Related Articles</h2>
                <Link href="/blog">
                  <AnimatedButton variant="outline">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </AnimatedButton>
                </Link>
              </MotionDiv>

              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((related, index) => (
                  <MotionDiv key={related.id} animation="fadeInUp" delay={index * 0.1}>
                    <Link href={`/blog/${related.slug}`}>
                      <AnimatedCard className="overflow-hidden p-0 h-full group cursor-pointer">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={related.featuredImage || "/placeholder.svg"}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <span className="text-xs text-primary font-medium">{related.category}</span>
                          <h3 className="font-bold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                            {related.title}
                          </h3>
                          <span className="text-xs text-muted-foreground mt-2 block">{related.readTime}</span>
                        </div>
                      </AnimatedCard>
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
