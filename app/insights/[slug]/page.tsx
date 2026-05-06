import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Linkedin, Twitter } from 'lucide-react'
import SchemaOrg from '@/components/schema-org'
import { getPostBySlug, getAllSlugs, getAllPosts, getReadingTime } from '@/lib/posts'
import MDXContent from '@/components/mdx-content'
import BlogCard from '@/components/blog-card'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.frontmatter.title} | Wavecrest Strategies`,
    description: post.frontmatter.excerpt,
    openGraph: {
      type: 'article',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      url: `https://www.wavecreststrategies.ca/insights/${post.frontmatter.slug}`,
      siteName: 'Wavecrest Strategies',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
    alternates: { canonical: `https://www.wavecreststrategies.ca/insights/${post.frontmatter.slug}` },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2)
  const readingTime = getReadingTime(post.content)

  const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const articleUrl = `https://www.wavecreststrategies.ca/insights/${post.frontmatter.slug}`
  const shareTitle = encodeURIComponent(post.frontmatter.title)
  const shareUrl = encodeURIComponent(articleUrl)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: post.frontmatter.author,
      worksFor: { '@type': 'Organization', name: 'Wavecrest Strategies' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wavecrest Strategies',
      url: 'https://www.wavecreststrategies.ca',
    },
    url: articleUrl,
    description: post.frontmatter.excerpt,
  }

  // Author bios
  const authorBios: Record<string, { title: string; bio: string }> = {
    'Marc Hanna': {
      title: 'Managing Partner',
      bio: 'Marc Hanna is the Managing Partner of Wavecrest Strategies, with over 30 years of SR&ED and government funding experience across Deloitte, BDO, and independent practice.',
    },
    'Natasha Legay': {
      title: 'SR&ED Consultant',
      bio: 'Natasha Legay is an SR&ED specialist at Wavecrest Strategies focused on technical narrative development and claim preparation for software and technology companies.',
    },
    'Chris Crowell': {
      title: 'Strategic Advisor',
      bio: 'Chris Crowell is a co-founder of ResolveHD, a founding general partner at Tidal Venture Partners, and a Strategic Advisor to Wavecrest Strategies with deep Atlantic Canadian ecosystem expertise.',
    },
  }

  const authorInfo = authorBios[post.frontmatter.author] || { title: 'Wavecrest Strategies', bio: '' }

  return (
    <>
      <SchemaOrg schema={articleSchema} />

      <div className="bg-[#f8f7f4] pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-[#94a3b8]">
              <li><Link href="/" className="hover:text-[#0f2744] transition-colors">Home</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li><Link href="/insights" className="hover:text-[#0f2744] transition-colors">Insights</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-[#475569] truncate max-w-[200px]" aria-current="page">{post.frontmatter.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <article className="lg:col-span-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.frontmatter.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold text-[#2563eb] bg-[#eff6ff] px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author byline */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#0f2744] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {post.frontmatter.author.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-[#0f2744] text-sm font-semibold">{post.frontmatter.author}</p>
                  <p className="text-[#94a3b8] text-xs">{authorInfo.title} &middot; {formattedDate} &middot; {readingTime} min read</p>
                </div>
              </div>

              <h1 className="font-serif text-[#0f2744] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-balance">
                {post.frontmatter.title}
              </h1>

              {/* MDX content */}
              <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#0f2744] prose-p:text-[#475569] prose-p:leading-[1.7] prose-a:text-[#2563eb] prose-strong:text-[#0f2744] prose-code:bg-[#f1f5f9] prose-code:text-[#0f2744] prose-code:rounded prose-code:px-1">
                <MDXContent source={post.content} />
              </div>

              {/* Share */}
              <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
                <p className="text-[#475569] text-sm font-medium mb-3">Share this article</p>
                <div className="flex gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0f2744] text-white text-xs font-medium rounded-md hover:bg-[#1b3d6b] transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#0f2744] text-white text-xs font-medium rounded-md hover:bg-[#1b3d6b] transition-colors"
                    aria-label="Share on X (Twitter)"
                  >
                    <Twitter size={14} /> X / Twitter
                  </a>
                </div>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-serif text-[#0f2744] text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {related.map((p) => (
                      <BlogCard key={p.slug} post={p} />
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
              {/* Author bio */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#0f2744] flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {post.frontmatter.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f2744] text-sm">{post.frontmatter.author}</p>
                    <p className="text-[#94a3b8] text-xs">{authorInfo.title}</p>
                  </div>
                </div>
                {authorInfo.bio && (
                  <p className="text-[#475569] text-xs leading-relaxed">{authorInfo.bio}</p>
                )}
              </div>

              {/* CTA */}
              <div className="bg-[#0f2744] rounded-xl p-6 text-white">
                <h3 className="font-serif text-lg font-semibold mb-2">Book a Free Consultation</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  Find out what SR&amp;ED and government funding could be worth for your company.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-[#0f2744] font-semibold rounded-md hover:bg-[#f8f7f4] transition-colors text-sm w-full justify-center"
                >
                  Book Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
