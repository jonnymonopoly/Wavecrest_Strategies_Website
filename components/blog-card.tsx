import Link from 'next/link'
import type { PostFrontmatter } from '@/lib/posts'

interface BlogCardProps {
  post: PostFrontmatter
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Category header */}
      <div className="bg-[#f1f5f9] px-6 py-5 flex items-center gap-3">
        {post.tags.slice(0, 1).map((tag) => (
          <span
            key={tag}
            className="text-xs font-semibold text-[#2563eb] bg-white border border-[#e2e8f0] px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
        <span className="text-[#94a3b8] text-xs ml-auto">{formattedDate}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-[#0f2744] text-xl font-semibold mb-3 leading-snug text-balance">
          {post.title}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f1f5f9]">
          <span className="text-[#94a3b8] text-xs">{post.author}</span>
          <Link
            href={`/insights/${post.slug}`}
            className="text-[#2563eb] text-sm font-medium hover:underline"
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </article>
  )
}
