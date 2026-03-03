import { Icon } from '@iconify/react'

const cards = [
  {
    icon: 'solar:cpu-linear',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    title: 'Private by design',
    description: 'Payments are encrypted end-to-end so only the payer and payee can see balances and transaction history, powered by Inco.',
    decoration: 'gradient',
  },
  {
    icon: 'solar:layers-linear',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    title: 'QR-first experience',
    description: 'Instant scan‑and‑pay flows inspired by Google Pay, tuned for retail and peer‑to‑peer payments on Solana.',
    decoration: 'bars',
  },
  {
    icon: 'solar:link-linear',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    title: 'Social payment chat',
    description: 'Request, send, and track payments in a dedicated chat thread so every transaction has context.',
    decoration: 'curve',
  },
  {
    icon: 'solar:lock-linear',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    title: 'Secure access control',
    description: 'Mandatory 6‑digit passcode or pattern lock keeps your MonoPay account safe on shared devices.',
    decoration: 'circle',
  },
  {
    icon: 'solar:shield-linear',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    title: 'Metaplex identity card',
    description: 'Mint a Metaplex Core asset that acts as your shareable MonoPay ID card for payments and discovery.',
    decoration: 'dots',
  },
  {
    icon: 'solar:magic-stick-3-linear',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    title: 'Built for Solana',
    description: 'Solana + Anchor under the hood with modern React Native and Zustand for a smooth, mobile‑first experience.',
    decoration: 'new',
  },
]

function CardDecoration({ type }) {
  if (type === 'gradient') {
    return (
      <div className="mt-6 h-16 bg-gradient-to-r from-blue-50 to-transparent rounded-lg relative overflow-hidden opacity-70">
        <div className="flex opacity-30 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
          <div className="bg-blue-200 w-full h-[1px]" />
          <div className="absolute w-[1px] h-full bg-blue-200" />
        </div>
      </div>
    )
  }
  if (type === 'bars') {
    return (
      <div className="mt-6 flex gap-2 opacity-50">
        <div className="h-12 w-full bg-indigo-50 rounded-t-lg" />
        <div className="h-8 w-full bg-indigo-100 rounded-t-lg mt-auto" />
        <div className="h-10 w-full bg-indigo-50 rounded-t-lg mt-auto" />
      </div>
    )
  }
  if (type === 'curve') {
    return (
      <div className="mt-6 relative h-16 overflow-hidden">
        <svg className="absolute bottom-0 text-orange-100 w-full" height="50" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path d="M0 40 Q 25 10 50 25 T 100 20" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>
    )
  }
  if (type === 'circle') {
    return (
      <div className="mt-6 flex justify-center">
        <div className="relative w-24 h-12 overflow-hidden">
          <div className="absolute w-20 h-20 border-[8px] border-cyan-50 rounded-full top-0 left-2" />
          <div className="absolute w-20 h-20 border-[8px] border-transparent border-t-cyan-500 border-l-cyan-500 rounded-full top-0 left-2 rotate-45 transition-all duration-1000 group-hover:rotate-90" />
        </div>
      </div>
    )
  }
  if (type === 'dots') {
    return (
      <div className="mt-6 flex justify-center opacity-60">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-teal-200" />
          <div className="w-3 h-3 rounded-full bg-teal-200" />
          <div className="w-3 h-3 rounded-full bg-teal-500" />
        </div>
      </div>
    )
  }
  if (type === 'new') {
    return (
      <div className="mt-6 flex justify-end">
        <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-[10px] font-bold text-pink-500 uppercase">New</span>
        </div>
      </div>
    )
  }
  return null
}

export default function Features() {
  return (
    <section className="flex flex-col items-center">
      <div className="text-center space-y-3 mb-10 max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tighter md:text-6xl">
          Why MonoPay?
        </h2>
        <p className="text-base text-gray-500">
          A private, QR-native social payments layer for Solana that feels like your favorite consumer wallet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-[2rem] p-7 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                <Icon icon={card.icon} width={20} height={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
            </div>
            <CardDecoration type={card.decoration} />
          </div>
        ))}
      </div>
    </section>
  )
}
