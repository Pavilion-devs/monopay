import { Icon } from '@iconify/react'
import { useForm, ValidationError } from '@formspree/react'

const LOGO_URL = 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b2e12d6-456f-4c10-9db1-e243c0d82ac6_320w.png'

export default function WaitlistModal({ isOpen, onClose }) {
  const [state, handleSubmit] = useForm('mbdzjpky')

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const showSuccess = state.succeeded

  if (!isOpen) return null

  return (
    <>
      <div
        role="presentation"
        className={`fixed inset-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-md transition-all duration-300 ${isOpen ? 'overlay-active' : 'overlay-enter'}`}
        onClick={handleOverlayClick}
      />
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-sm px-4 transition-all duration-300 ${isOpen ? 'modal-active' : 'modal-enter'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden border border-gray-100 min-h-[420px] justify-center">
          {/* Form State */}
          <form
            onSubmit={handleSubmit}
            className={`w-full flex flex-col items-center transition-opacity duration-300 ${showSuccess ? 'opacity-0 absolute pointer-events-none' : 'opacity-100'}`}
          >
            <div className="mb-6">
              <img src={LOGO_URL} alt="MonoPay" className="h-10 w-auto object-contain" />
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Your MonoPay invite</h3>
            <p className="font-quicksand text-base text-gray-500 font-medium mb-8 leading-snug max-w-[260px]">
              Enter your details and we&apos;ll let you know the moment MonoPay is live on Solana.
            </p>
            <div className="w-full space-y-4">
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-full px-5 py-3.5 rounded-xl border-2 border-black text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:ring-0 transition-colors bg-white"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1 block" />
              </div>
              <div className="relative w-full">
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Your Username"
                  className="w-full pl-5 pr-14 py-3.5 rounded-xl border-2 border-black text-gray-900 placeholder:text-gray-500 font-medium focus:outline-none focus:ring-0 transition-colors bg-white"
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#111] text-white p-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Icon icon="solar:arrow-right-linear" width={16} height={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </form>

          {/* Success State */}
          <div
            className={`w-full flex flex-col items-center justify-center p-8 text-center transition-opacity duration-300 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
          >
            <div className="mb-8">
              <img src={LOGO_URL} alt="MonoPay" className="h-10 w-auto object-contain" />
            </div>
            <h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Thank you!</h3>
            <p className="font-quicksand text-base text-gray-500 font-medium mb-10 leading-snug max-w-[280px] mx-auto">
              Your spot in the future of private social payments on Solana is reserved. We&apos;ll send an invite to your inbox as soon as we&apos;re ready for you.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="transition-all duration-300 active:scale-95 hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] text-sm font-semibold text-black bg-white border-black border-2 rounded-full px-10 py-2.5 shadow-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
