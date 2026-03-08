import { Icon } from '@iconify/react'

export default function Hero({ onJoinWaitlist }) {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16 gap-x-8 gap-y-8 justify-between">
        <div className="lg:w-[60%] space-y-4">
          <span className="text-[10px] uppercase text-sm font-semibold text-gray-600 tracking-normal bg-white border-gray-200 border rounded-full pt-0.5 pr-3 pb-0.5 pl-3 shadow-sm">
            Private, Solana-powered social payments
          </span>
          <h1 className="leading-[1.1] bg-clip-text md:text-7xl text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-[#010101] to-[#989898] scale-100">
            Pay anyone,
            <br />
            <span className="xl:bg-clip-text xl:text-transparent">without exposing your wallet.</span>
          </h1>
        </div>
        <div className="lg:w-[35%] flex flex-col lg:items-end lg:text-right text-left py-10 space-y-5 items-center">
          <p className="leading-relaxed text-lg text-gray-500 tracking-tight max-w-sm">
            MonoPay brings the seamless feel of Google Pay to Solana with private QR payments, secure chat, and an on‑chain identity card powered by Metaplex.
          </p>
          <button
            onClick={onJoinWaitlist}
            className="bg-[#111] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] active:scale-95"
          >
            Join the MonoPay waitlist
          </button>
        </div>
      </div>

      <div className="flex w-full pb-8 relative backdrop-blur-none scale-100 justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] bg-blue-100 blur-[90px] rounded-full -z-10 opacity-60 pointer-events-none" />
        <img
          src="/heroo.png"
          alt="7K Mobile App Interface"
          className="md:max-w-[500px] lg:max-w-[540px] transform hover:scale-[1.01] transition-transform duration-500 w-full max-w-[340px] object-contain z-10 relative shadow scale-95"
          style={{ maskImage: 'linear-gradient(transparent, black 5%, black 75%, transparent)' }}
        />

        <div className="absolute top-[46%] left-[24%] z-50 animate-bounce duration-[3000ms] hidden md:block">
          <div className="bg-white border-gray-50 border rounded-xl pt-2 pr-3 pb-2 pl-3 flex !scale-[1.75] origin-right transform-gpu gap-x-2 gap-y-2 items-center shadow-lg">
            <div className="text-green-600 bg-green-100 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 flex">
              <Icon icon="solar:bolt-linear" width={16} height={16} />
            </div>
            <div className="text-left ">
              <div className="text-[10px] leading-tight font-medium text-gray-500">Latency</div>
              <div className="leading-tight text-xs font-semibold text-gray-900">Lightning</div>
            </div>
          </div>
        </div>

        <div className="absolute top-[62%] right-[24%] z-50 animate-bounce duration-[3000ms] delay-500 hidden md:block">
          <div className="bg-white border-gray-50 border rounded-xl pt-2 pr-3 pb-2 pl-3 flex !scale-[1.75] origin-left transform-gpu gap-x-2 gap-y-2 items-center shadow-lg">
            <div className="text-blue-600 bg-blue-100 rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 flex">
              <Icon icon="solar:shield-check-linear" width={16} height={16} />
            </div>
            <div className="text-left">
              <div className="text-[10px] leading-tight font-medium text-gray-500">Security</div>
              <div className="leading-tight text-xs font-semibold text-gray-900">Audited</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
