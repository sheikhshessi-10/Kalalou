import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import iPhoneMockup from '../components/iPhoneMockup'
import CallScreen from '../components/CallScreen'

export default function Kalalou() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="bg-kalalou-bg text-kalalou-ink min-h-screen overflow-x-hidden">
      <Navigation theme="light" />
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center items-center px-[60px] py-[180px] md:py-[180px] text-center relative overflow-hidden">
        <div className="relative w-full max-w-[1200px]">
          <div 
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1: Main Title */}
            <div className="min-w-full flex flex-col items-center justify-center">
              <h1 className="font-playfair text-[3.5rem] md:text-[6rem] font-normal tracking-[-0.02em] mb-8 leading-[1.1] text-kalalou-ink">
                KALALOU AI LEVERAGE
              </h1>
              <p className="text-lg text-kalalou-secondary font-normal mb-[60px] max-w-[500px] tracking-[0.01em]">
                A quiet system working behind the scenes.
              </p>
              <div className="w-[60px] h-px bg-kalalou-divider mx-auto" />
            </div>

            {/* Slide 2: Custom Message */}
            <div className="min-w-full flex flex-col items-center justify-center">
              <h1 className="font-playfair text-[2.5rem] md:text-[4rem] font-normal tracking-[-0.02em] mb-8 leading-[1.1] text-kalalou-ink">
                The Future of Wholesale
              </h1>
              <p className="text-lg text-kalalou-secondary font-normal mb-[60px] max-w-[500px] tracking-[0.01em]">
                Where craftsmanship meets intelligent automation.
              </p>
              <div className="w-[60px] h-px bg-kalalou-divider mx-auto" />
            </div>

            {/* Slide 3: Artwork */}
            <div className="min-w-full p-10">
              <img 
                src="/kalalou-artwork.png" 
                alt="Kalalou Vision - Balancing craftsmanship with modern efficiency" 
                className="max-w-[900px] w-full h-auto rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.08)] mx-auto"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 flex gap-3">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? 'w-6 bg-kalalou-accent rounded'
                    : 'w-2 bg-kalalou-divider'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-4 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-kalalou-card border border-kalalou-divider rounded-full flex items-center justify-center cursor-pointer transition-all text-xl text-kalalou-ink hover:bg-kalalou-ink hover:text-kalalou-card hover:scale-105"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-kalalou-card border border-kalalou-divider rounded-full flex items-center justify-center cursor-pointer transition-all text-xl text-kalalou-ink hover:bg-kalalou-ink hover:text-kalalou-card hover:scale-105"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Inbound */}
      <div className="max-w-[1200px] mx-auto py-[120px] px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-[100px] items-center">
          {/* iPhone Left */}
          <div>
            <iPhoneMockup className="mx-auto">
              <CallScreen
                contactName="Kalalou"
                subtitle="Support Connected"
                duration="00:47"
                time="2:34"
                showControls={true}
              />
            </iPhoneMockup>
          </div>

          {/* Content Right */}
          <div>
            <h2 className="font-playfair text-[2rem] md:text-[2.8rem] font-normal mb-8 leading-[1.3] text-kalalou-ink tracking-[-0.01em]">
              24/7 Customer Presence
            </h2>
            <p className="text-[1.15rem] text-kalalou-secondary leading-[1.9] mb-12">
              While your team rests, Kalalou remains available. Every call answered. Every question resolved. Every opportunity captured.
            </p>
            
            <div className="flex flex-col gap-5">
              {['Always available', 'No waiting', 'Infinite scalability', 'Consistent answers'].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 text-kalalou-ink text-base font-medium">
                  <div className="w-1.5 h-1.5 bg-kalalou-accent rounded-full" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-kalalou-divider max-w-[1200px] mx-auto" />

      {/* Section 2: Outbound */}
      <div className="max-w-[1200px] mx-auto py-[120px] px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-[100px] items-center">
          {/* Content Left */}
          <div>
            <h2 className="font-playfair text-[2rem] md:text-[2.8rem] font-normal mb-8 leading-[1.3] text-kalalou-ink tracking-[-0.01em]">
              Reaching Stores Before Competitors
            </h2>
            <p className="text-[1.15rem] text-kalalou-secondary leading-[1.9] mb-12">
              Calm conversations. Never cold. Always relevant.
            </p>
            
            <div className="flex flex-col gap-5">
              {['Only warm leads', 'Human tone', 'Books real meetings', 'Works quietly in background'].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 text-kalalou-ink text-base font-medium">
                  <div className="w-1.5 h-1.5 bg-kalalou-accent rounded-full" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* iPhone Right */}
          <div>
            <iPhoneMockup className="mx-auto">
              <CallScreen
                contactName="Wholesale Buyer"
                subtitle="Warm Lead"
                duration="calling..."
                time="10:15"
                showControls={true}
              />
            </iPhoneMockup>
          </div>
        </div>
      </div>

      <div className="h-px bg-kalalou-divider max-w-[1200px] mx-auto" />

      {/* Section 3: Lead Engine */}
      <div className="max-w-[1200px] mx-auto py-[120px] px-[60px]">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="font-playfair text-[2.5rem] md:text-[3.5rem] font-normal mb-10 leading-[1.2] text-kalalou-ink">
            A Living Pipeline
          </h2>
            <p className="text-xl text-kalalou-secondary leading-[1.9] mb-[60px]">
            Leads flow. Conversations happen. Growth becomes predictable.
          </p>
          
          <div className="flex items-center justify-center gap-6 my-20 flex-wrap">
            {[
              'AI finds retailers',
              '→',
              'AI emails',
              '→',
              'Buyers click',
              '→',
              'AI calls',
              '→',
              'Meetings booked',
              '→',
              'New customers',
              '→',
              'AI supports',
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${
                  item === '→'
                    ? 'text-kalalou-divider text-2xl font-light'
                    : 'bg-kalalou-card px-10 py-8 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-lg text-kalalou-ink font-medium min-w-[140px] text-center'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-kalalou-divider max-w-[1200px] mx-auto" />

      {/* Section 4: Flywheel */}
      <div className="max-w-[1200px] mx-auto py-[120px] px-[60px]">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="font-playfair text-[2.5rem] md:text-[3.5rem] font-normal mb-10 leading-[1.2] text-kalalou-ink">
            A System That Compounds
          </h2>
          
          <div className="my-20 text-center">
            <div className="w-[300px] md:w-[400px] h-[300px] md:h-[400px] mx-auto mb-[60px] relative border-2 border-kalalou-divider rounded-full flex items-center justify-center">
              <div className="absolute w-full h-full">
                {[
                  { text: 'Leads', pos: 'top-[-10px] left-1/2 -translate-x-1/2' },
                  { text: 'Calls', pos: 'top-[25%] right-[-20px]' },
                  { text: 'Orders', pos: 'bottom-[25%] right-[-20px]' },
                  { text: 'Growth', pos: 'bottom-[-10px] left-1/2 -translate-x-1/2' },
                  { text: 'Loyalty', pos: 'bottom-[25%] left-[-20px]' },
                  { text: 'Referrals', pos: 'top-[25%] left-[-20px]' },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${step.pos} bg-kalalou-card px-6 py-4 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.06)] text-base text-kalalou-ink font-medium whitespace-nowrap`}
                  >
                    {step.text}
                  </div>
                ))}
              </div>
              <div className="font-playfair text-2xl text-kalalou-accent font-medium">
                ∞
              </div>
            </div>
            
            <p className="text-xl text-kalalou-secondary leading-[1.9]">
              A system that compounds without chaos.
            </p>
          </div>
        </div>
      </div>

      <div className="h-px bg-kalalou-divider max-w-[1200px] mx-auto" />

      {/* Final Section */}
      <section className="text-center py-[140px] px-[60px]">
        <h2 className="font-playfair text-[2.5rem] md:text-[3.5rem] font-normal mb-[60px] leading-[1.3] text-kalalou-ink">
          Growth should feel calm,<br/>not exhausting.
        </h2>
        <a 
          href="#" 
          className="inline-block px-12 py-[18px] bg-kalalou-ink text-kalalou-bg no-underline text-base font-medium rounded-md transition-all tracking-[0.02em] hover:bg-kalalou-accent hover:text-kalalou-card hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(180,106,76,0.2)]"
        >
          Explore the System
        </a>
      </section>
    </div>
  )
}

