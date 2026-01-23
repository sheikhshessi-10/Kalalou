export default function iPhoneMockup({ children, className = '' }) {
  return (
    <div className={`w-[300px] md:w-[340px] h-[600px] md:h-[680px] bg-black rounded-[44px] md:rounded-[50px] p-3 relative ${
      className
    }`} style={{
      boxShadow: '0 0 0 2px #1a1a1a, 0 20px 60px rgba(0, 0, 0, 0.8), inset 0 0 3px rgba(255, 255, 255, 0.1)'
    }}>
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[20px] z-10" />
      <div className="w-full h-full bg-black rounded-[36px] md:rounded-[42px] overflow-hidden relative flex flex-col">
        {children}
      </div>
    </div>
  )
}

