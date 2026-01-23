export default function StatusBar({ time = '9:41' }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-11 flex justify-between items-center px-[30px] pl-[180px] text-sm font-semibold text-white">
      <div className="absolute left-[30px] top-[14px]">{time}</div>
      <div className="flex gap-1.5 items-center">
        <span>📶</span>
        <span>📡</span>
        <span>🔋</span>
      </div>
    </div>
  )
}

