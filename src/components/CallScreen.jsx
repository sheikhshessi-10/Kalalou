export default function CallScreen({ 
  contactName, 
  subtitle, 
  duration, 
  time = '2:34',
  showControls = true,
  isActive = true 
}) {
  const callActions = [
    { icon: '🔇', label: 'mute', active: false },
    { icon: '⌨️', label: 'keypad', active: false },
    { icon: '🔊', label: 'speaker', active: true },
    { icon: '➕', label: 'add call', active: false },
    { icon: '📹', label: 'FaceTime', active: false },
    { icon: '👤', label: 'contacts', active: false },
  ]

  return (
    <>
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-11 flex justify-between items-center px-8 text-sm font-semibold text-white z-10">
        <div className="text-white">{time}</div>
        <div className="flex items-center">
          {/* Green Battery Icon */}
          <div className="w-6 h-3 border border-white rounded-sm relative">
            <div className="w-4 h-2 bg-green-500 rounded-sm m-0.5" />
          </div>
        </div>
      </div>

      {/* Call Screen Content - Pure Black Background */}
      <div className="flex-1 flex flex-col justify-between bg-black">
        {/* Call Header - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-8 pt-20">
          <div className="text-[40px] font-light text-white mb-3 tracking-[-0.5px] leading-tight">
            {contactName}
          </div>
          {subtitle && (
            <div className="text-base text-[#8e8e93] font-normal mt-2">
              {subtitle}
            </div>
          )}
          {duration && (
            <div className={`font-normal mt-6 ${
              showControls ? 'text-base text-[#8e8e93]' : 'text-[32px] font-bold tracking-[0.05em] text-white'
            }`}>
              {duration}
            </div>
          )}
        </div>

        {/* Call Controls */}
        {showControls && (
          <div className="px-8">
            {/* 3x2 Grid of Buttons */}
            <div className="grid grid-cols-3 gap-y-5 gap-x-4 mb-10 px-2">
              {callActions.map((action, idx) => (
                <button 
                  key={idx} 
                  className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer p-0 transition-opacity hover:opacity-80 active:opacity-60"
                >
                  <div className={`w-[68px] h-[68px] rounded-full flex items-center justify-center text-[32px] transition-all ${
                    action.active 
                      ? 'bg-[#2c2c2e] ring-2 ring-blue-500 ring-opacity-100' 
                      : 'bg-[#2c2c2e]'
                  }`}>
                    {action.icon}
                  </div>
                  <div className="text-[13px] text-white font-normal">
                    {action.label}
                  </div>
                </button>
              ))}
            </div>
            
            {/* End Call Button */}
            <div className="flex justify-center pb-5">
              <button className="w-[68px] h-[68px] bg-[#ff3b30] rounded-full border-none flex items-center justify-center text-[32px] transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer">
                <span style={{ transform: 'rotate(135deg)', display: 'inline-block' }}>📞</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
