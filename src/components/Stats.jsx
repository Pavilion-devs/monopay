export default function Stats() {
  return (
    <section className="bg-white w-full border-gray-100 border rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.04)]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center gap-x-8 gap-y-8">
        <div className="md:pt-0 pt-4">
          <div className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">
            Private
          </div>
          <div className="uppercase text-sm font-medium text-gray-500 tracking-normal">
            Ledger Visibility
          </div>
        </div>
        <div className="pt-4 md:pt-0">
          <div className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">
            QR-first
          </div>
          <div className="uppercase text-sm font-medium text-gray-500 tracking-tight">
            Scan & Pay Flows
          </div>
        </div>
        <div className="md:pt-0 pt-4">
          <div className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">
            Solana
          </div>
          <div className="uppercase text-sm font-medium text-gray-500 tracking-tight">
            Powered by Anchor
          </div>
        </div>
      </div>
    </section>
  )
}
