const TIDYCAL_LINK = '#' // Replace with actual TidyCal URL when available

export default function TidyCalEmbed() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#e2e8f0]">
      <iframe
        src={TIDYCAL_LINK}
        width="100%"
        height="600"
        frameBorder="0"
        title="Book a consultation with Wavecrest Strategies"
        className="block"
        loading="lazy"
      />
      <div className="p-4 bg-[#f8f7f4] text-center border-t border-[#e2e8f0]">
        <a
          href={TIDYCAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563eb] hover:underline text-sm font-medium"
        >
          Open booking page in a new tab &rarr;
        </a>
      </div>
    </div>
  )
}
