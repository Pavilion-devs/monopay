import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WaitlistModal from './components/WaitlistModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="antialiased min-h-screen flex flex-col items-center selection:bg-blue-100 selection:text-blue-900 text-[#111] bg-[#F9FAFB]">
      <Nav onJoinWaitlist={() => setModalOpen(true)} />
      <main className="md:space-y-20 w-full max-w-7xl pt-8 pr-6 pb-16 pl-6 space-y-12">
        <Hero onJoinWaitlist={() => setModalOpen(true)} />
        <Features />
        <Stats />
        <CTA onJoinWaitlist={() => setModalOpen(true)} />
      </main>
      <Footer />
      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  )
}

export default App
