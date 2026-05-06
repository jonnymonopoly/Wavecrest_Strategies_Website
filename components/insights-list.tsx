'use client'

import { useState } from 'react'
import BlogCard from '@/components/blog-card'
import type { PostFrontmatter } from '@/lib/posts'

const FILTERS = ['All', 'SR&ED', 'Government Funding', 'Startup Finance', 'Atlantic Canada']

interface InsightsListProps {
  posts: PostFrontmatter[]
}

export default function InsightsList({ posts }: InsightsListProps) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? posts
      : posts.filter((p) => p.tags.includes(activeFilter))

  return (
    <section className="bg-[#f8f7f4] py-16 px-6 min-h-[60vh]">
      <div className="max-w-7xl mx-auto">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter articles by topic">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeFilter === filter
                  ? 'bg-[#0f2744] text-white border-[#0f2744]'
                  : 'bg-white text-[#475569] border-[#e2e8f0] hover:border-[#0f2744] hover:text-[#0f2744]'
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#475569] text-lg">No articles found for this topic yet.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-[#2563eb] text-sm hover:underline"
            >
              View all articles
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
