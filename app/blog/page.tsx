"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MotionDiv, MotionSection } from "@/components/motion/motion-wrapper"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { StickyCta } from "@/components/cta/sticky-cta"
import { blogPosts, categories, getFeaturedPosts } from "@/lib/blog-data"
import { Calendar, Clock, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPosts = getFeaturedPosts()

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedCategory && post.category !== selectedCategory) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }
    return true
  })

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <MotionDiv animation="fadeInUp">
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Marketing Blog
                </span>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  Insights to Fuel Your <span className="text-primary">Growth</span>
                </h1>
              </MotionDiv>
              <MotionDiv animation="fadeInUp" delay={0.2}>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert tips, strategies, and insights from our team of digital marketing specialists.
                </p>
              </MotionDiv>

              {/* Search Bar */}
              <MotionDiv animation="fadeInUp" delay={0.3} className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {!searchQuery && !selectedCategory && (
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <MotionDiv animation="fadeInUp" className="mb-8">
                <h2 className="text-2xl font-bold">Featured Articles</h2>
              </MotionDiv>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Large Featured Post */}
                <MotionDiv animation="fadeInUp" className="lg:col-span-2">
                  <Link href={`/blog/${featuredPosts[0].slug}`}>
                    <AnimatedCard className="overflow-hidden p-0 h-full group cursor-pointer">
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={featuredPosts[0].featuredImage || "/placeholder.svg"}
                          alt={featuredPosts[0].title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-sm text-primary font-medium">{featuredPosts[0].category}</span>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPosts[0].readTime}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {featuredPosts[0].title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{featuredPosts[0].excerpt}</p>
                        <div className="flex items-center gap-3">
                          <Image
                            src={featuredPosts[0].author.image || "/placeholder.svg"}
                            alt={featuredPosts[0].author.name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium text-sm">{featuredPosts[0].author.name}</div>
                            <div className="text-xs text-muted-foreground">{featuredPosts[0].author.role}</div>
                          </div>
                        </div>
                      </div>
                    </AnimatedCard>
                  </Link>
                </MotionDiv>

                {/* Smaller Featured Posts */}
                <div className="space-y-6">
                  {featuredPosts.slice(1, 3).map((post, index) => (
                    <MotionDiv key={post.id} animation="fadeInUp" delay={(index + 1) * 0.1}>
                      <Link href={`/blog/${post.slug}`}>
                        <AnimatedCard className="overflow-hidden p-0 group cursor-pointer">
                          <div className="flex gap-4">
                            <div className="relative w-32 h-32 shrink-0">
                              <Image
                                src={post.featuredImage || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover rounded-l-xl"
                              />
                            </div>
                            <div className="p-4 flex flex-col justify-center">
                              <span className="text-xs text-primary font-medium mb-1">{post.category}</span>
                              <h3 className="font-bold line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h3>
                              <span className="text-xs text-muted-foreground mt-2">{post.readTime}</span>
                            </div>
                          </div>
                        </AnimatedCard>
                      </Link>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 px-4 border-y border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <span className="text-sm text-muted-foreground shrink-0">Filter by:</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors shrink-0 ${
                  !selectedCategory
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-secondary"
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors shrink-0 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <MotionSection className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
              </h2>
              <span className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.map((post, index) => (
                  <MotionDiv key={post.id} animation="fadeInUp" delay={index * 0.05}>
                    <Link href={`/blog/${post.slug}`}>
                      <AnimatedCard className="overflow-hidden p-0 h-full group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.featuredImage || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Image
                                src={post.author.image || "/placeholder.svg"}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                className="rounded-full object-cover"
                              />
                              <span className="text-sm font-medium">{post.author.name}</span>
                            </div>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                      </AnimatedCard>
                    </Link>
                  </MotionDiv>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null)
                    setSearchQuery("")
                  }}
                  className="text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </MotionSection>

        {/* Newsletter CTA */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedCard className="p-8 md:p-12 text-center bg-primary text-primary-foreground">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="opacity-80 mb-8">
                Get the latest marketing insights delivered straight to your inbox. Join 10,000+ marketers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground text-foreground"
                />
                <AnimatedButton variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  Subscribe
                </AnimatedButton>
              </form>
            </AnimatedCard>
          </div>
        </section>
      </main>
      <StickyCta />
    </>
  )
}
