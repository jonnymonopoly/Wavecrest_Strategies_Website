import ReactMarkdown from 'react-markdown'

interface MDXContentProps {
  source: string
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="font-serif text-[#0f2744] text-2xl font-bold mt-10 mb-4">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-serif text-[#0f2744] text-xl font-semibold mt-8 mb-3">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-[#475569] text-lg leading-[1.7] mb-5">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="text-[#0f2744] font-semibold">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="text-[#475569] text-lg leading-[1.7] mb-5 space-y-2 list-disc list-inside">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="text-[#475569] text-lg leading-[1.7] mb-5 space-y-2 list-decimal list-inside">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="text-[#475569]">{children}</li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-[#2563eb] hover:underline font-medium"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-[#2563eb] pl-5 my-6 text-[#475569] italic">{children}</blockquote>
        ),
        code: ({ children }) => (
          <code className="bg-[#f1f5f9] text-[#0f2744] rounded px-1.5 py-0.5 text-sm font-mono">{children}</code>
        ),
        hr: () => <hr className="border-[#e2e8f0] my-10" />,
        em: ({ children }) => (
          <em className="text-[#475569]">{children}</em>
        ),
      }}
    >
      {source}
    </ReactMarkdown>
  )
}
