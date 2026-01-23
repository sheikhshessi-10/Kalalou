import { useState, useRef, useEffect, useCallback } from 'react'
import Navigation from '../components/Navigation'
import iPhoneMockup from '../components/iPhoneMockup'
import CallScreen from '../components/CallScreen'

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [slidePosition, setSlidePosition] = useState(4)
  const [isDragging, setIsDragging] = useState(false)
  const slideButtonRef = useRef(null)
  const slideContainerRef = useRef(null)
  const startXRef = useRef(0)

  const handleScrollToDemo = (e) => {
    e.preventDefault()
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInitiateCall = () => {
    if (!phoneNumber.trim()) {
      alert('Please enter your phone number!')
      return
    }
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleSlideStart = (e) => {
    setIsDragging(true)
    startXRef.current = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX
  }

  const handleCompleteSlide = useCallback(() => {
    setIsDragging(false)
    if (phoneNumber.trim()) {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        setSlidePosition(4)
      }, 3000)
    } else {
      alert('Please enter your phone number first!')
      setSlidePosition(4)
    }
  }, [phoneNumber])

  const handleSlideMove = useCallback((e) => {
    if (!isDragging || !slideContainerRef.current) return
    
    const containerRect = slideContainerRef.current.getBoundingClientRect()
    const currentPos = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX
    let currentX = currentPos - containerRect.left - 26
    
    const maxX = containerRect.width - 60
    currentX = Math.max(4, Math.min(currentX, maxX))
    setSlidePosition(currentX)
    
    if (currentX >= maxX * 0.8) {
      handleCompleteSlide()
    }
  }, [isDragging, handleCompleteSlide])

  const handleSlideEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    setSlidePosition(4)
  }, [isDragging])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleSlideMove)
      document.addEventListener('mouseup', handleSlideEnd)
      document.addEventListener('touchmove', handleSlideMove)
      document.addEventListener('touchend', handleSlideEnd)
    }
    
    return () => {
      document.removeEventListener('mousemove', handleSlideMove)
      document.removeEventListener('mouseup', handleSlideEnd)
      document.removeEventListener('touchmove', handleSlideMove)
      document.removeEventListener('touchend', handleSlideEnd)
    }
  }, [isDragging, handleSlideMove, handleSlideEnd])

  const slideTrackWidth = slideContainerRef.current 
    ? ((slidePosition - 4) / (slideContainerRef.current.offsetWidth - 60)) * 100 
    : 0

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen overflow-x-hidden">
      <Navigation theme="dark" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-5 py-[140px] md:py-[140px] text-center relative" style={{ background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)' }}>
        <h1 className="text-[2.5rem] md:text-[5rem] font-bold tracking-[-0.04em] mb-6 leading-[1.1] max-w-[1000px]">
          Your Customers Deserve Better Than Hold Music
        </h1>
        <h2 className="text-lg md:text-2xl font-normal text-text-secondary mb-12 max-w-[700px] leading-[1.5]">
          AI agents that answer every call, solve every problem, and never take a day off. See the difference in 60 seconds.
        </h2>
        <a 
          href="#demo" 
          onClick={handleScrollToDemo}
          className="bg-accent text-bg-primary border-none px-12 py-[18px] text-lg font-semibold rounded-xl cursor-pointer transition-all inline-block hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]"
        >
          Experience It Now
        </a>
      </section>

      {/* Brands Section */}
      <section className="bg-bg-secondary py-20 overflow-hidden">
        <div className="text-center text-base uppercase tracking-[0.15em] text-text-secondary mb-[60px] font-semibold">
          Trusted By Industry Leaders
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-20 animate-scroll w-fit">
            {['ACME CORP', 'TECHFLOW', 'NEXUS', 'VERTEX', 'PULSE', 'QUANTUM'].map((brand, idx) => (
              <div key={idx} className="text-[2rem] font-bold text-text-secondary whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                {brand}
              </div>
            ))}
            {['ACME CORP', 'TECHFLOW', 'NEXUS', 'VERTEX', 'PULSE', 'QUANTUM'].map((brand, idx) => (
              <div key={`dup-${idx}`} className="text-[2rem] font-bold text-text-secondary whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inbound Demo Section */}
      <section id="demo" className="py-[120px] px-5 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-[60px] mb-[120px]">
          <div className="text-center max-w-[600px]">
            <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold mb-5 tracking-[-0.02em]">
              Don't Just Read About It—Experience It
            </h3>
            <p className="text-xl text-text-secondary leading-[1.7] mb-4">
              Call our AI agent right now. Ask anything. Try to stump it.
            </p>
            <p className="text-xl text-text-secondary leading-[1.7] mb-4">
              See why businesses never miss another customer call.
            </p>
          </div>

          <iPhoneMockup>
            <CallScreen
              contactName="Magic Agent"
              subtitle="AI Customer Support"
              duration="+1 (555) 000-0000"
              time="9:41"
              showControls={false}
            />
          </iPhoneMockup>
        </div>
      </section>

      {/* Outbound Demo Section */}
      <section className="py-[120px] px-5 max-w-[1400px] mx-auto bg-bg-secondary">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="text-center max-w-[600px]">
            <h3 className="text-[1.8rem] md:text-[2.5rem] font-bold mb-5 tracking-[-0.02em]">
              Now Let Our AI Call You
            </h3>
            <p className="text-xl text-text-secondary leading-[1.7] mb-4">
              Enter your number below. Slide to answer.
            </p>
            <p className="text-xl text-text-secondary leading-[1.7] mb-4">
              Experience the future of customer support in real-time.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <iPhoneMockup>
              <CallScreen
                contactName="AI Agent"
                subtitle="Incoming Call"
                duration="calling..."
                time="9:41"
                showControls={true}
              />
            </iPhoneMockup>
            
            {/* Phone Input Section - Outside iPhone */}
            <div className="w-full max-w-[400px] mt-8">
            <div className="text-sm text-text-secondary mb-3 text-center">
              Enter your number to receive a call
            </div>
            <div className="relative mx-auto max-w-[260px]">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-4 text-lg text-white text-center font-medium tracking-[0.05em] transition-all focus:outline-none focus:border-[rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.08)] placeholder:text-[rgba(255,255,255,0.3)]"
              />
              <button
                onClick={handleInitiateCall}
                className="w-full bg-white text-black border-none rounded-xl p-4 text-base font-semibold mt-4 cursor-pointer transition-all hover:bg-[#e0e0e0] hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Called Now
              </button>
            </div>
            
            {/* Slide to Answer */}
            <div className="mt-8 relative max-w-[260px] mx-auto">
              <div 
                ref={slideContainerRef}
                className="w-full h-[60px] bg-[rgba(255,255,255,0.1)] rounded-[30px] relative overflow-hidden backdrop-blur-[20px]"
              >
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent rounded-[30px] transition-all"
                  style={{ width: `${Math.max(0, slideTrackWidth)}%` }}
                />
                <div
                  ref={slideButtonRef}
                  className="absolute top-1 left-1 w-[52px] h-[52px] bg-white rounded-full cursor-grab active:cursor-grabbing flex items-center justify-center text-2xl transition-all shadow-[0_4px_12px_rgba(0,0,0,0.3)] select-none"
                  style={{ left: `${slidePosition}px`, transition: isDragging ? 'none' : 'all 0.3s ease' }}
                  onMouseDown={handleSlideStart}
                  onTouchStart={handleSlideStart}
                >
                  📞
                </div>
                <div className="absolute w-full text-center top-1/2 -translate-y-1/2 text-base font-medium text-[rgba(255,255,255,0.7)] pointer-events-none">
                  slide to answer
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Overlay */}
      {showSuccess && (
        <>
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-[10px] z-[999] transition-opacity"
            onClick={() => setShowSuccess(false)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-secondary border border-border rounded-[20px] py-10 px-[60px] text-center z-[1000] shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-transform scale-100">
            <h4 className="text-2xl mb-3">🎉 Call Initiated!</h4>
            <p className="text-text-secondary text-base">Your AI agent is calling you now...</p>
          </div>
        </>
      )}
    </div>
  )
}

