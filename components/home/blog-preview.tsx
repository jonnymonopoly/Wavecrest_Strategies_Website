import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import BlogCard from '@/components/blog-card'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[#2563eb] text-xs font-semibold uppercase tracking-widest mb-3">Insights</p>
            <h2 className="font-serif text-3xl md:text-[40px] text-[#0f2744] font-bold text-balance">
              Straight talk from practitioners.
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-sm font-medium text-[#0f2744] border border-[#0f2744] px-5 py-2 rounded-md hover:bg-[#0f2744] hover:text-white transition-colors"
          >
            View all insights &rarr;
          </Link>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-[#475569] text-center py-12">Insights coming soon.</p>
        )}
      </div>
    </section>
  )
}
