export default function Nav({ onJoinWaitlist }) {
  return (
    <nav className="flex sticky z-40 transition-all duration-300 bg-[#F9FAFB]/90 w-full max-w-7xl border-transparent border-b pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-md items-center justify-between">
      <a href="#" className="block">
        <img
          src="/logo.svg"
          alt="MonoPay"
          className="w-auto h-20 object-cover"
        />
      </a>
      <button
        onClick={onJoinWaitlist}
        className="transition-all duration-300 active:scale-95 hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-sm font-semibold text-black bg-transparent border-black border-2 rounded-full pt-2 pr-5 pb-2 pl-5 shadow-none"
      >
        Join MonoPay waitlist
      </button>
    </nav>
  )
}
