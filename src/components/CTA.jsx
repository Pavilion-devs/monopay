export default function CTA({ onJoinWaitlist }) {
  return (
    <section className="text-center pt-2 space-y-6">
      <div className="space-y-2">
        <div className="inline-flex text-[10px] uppercase text-xs font-bold text-blue-600 tracking-normal bg-blue-50 border-blue-100 border rounded-full mb-2 pt-1 pr-3 pb-1 pl-3 items-center">
          Early Access
        </div>
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tighter md:text-6xl">
          Be first to try MonoPay
        </h2>
        <p className="text-base text-gray-500 max-w-md mx-auto">
          Join the waitlist to get early access to private QR payments and social chat on Solana. Limited spots available.
        </p>
      </div>
      <button
        onClick={onJoinWaitlist}
        className="bg-[#111] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5 active:scale-95"
      >
        Join the MonoPay waitlist
      </button>
    </section>
  )
}
