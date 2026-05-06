interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="py-8 border-b border-[#e2e8f0] last:border-0 hover:bg-[#fafafa] -mx-4 px-4 rounded-lg transition-colors">
      <h3 className="font-serif text-[#0f2744] text-xl md:text-[22px] font-semibold mb-3 leading-snug text-balance">
        {question}
      </h3>
      <p className="text-[#475569] text-base md:text-lg leading-[1.7]">{answer}</p>
    </div>
  )
}
