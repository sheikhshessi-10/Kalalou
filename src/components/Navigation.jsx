import { Link, useLocation } from 'react-router-dom'

export default function Navigation({ theme = 'dark' }) {
  const location = useLocation()
  const isDark = theme === 'dark'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] py-5 ${
      isDark 
        ? 'bg-[rgba(10,10,10,0.95)] border-b border-border backdrop-blur-[20px]' 
        : 'bg-[rgba(247,244,239,0.95)] border-b border-kalalou-divider backdrop-blur-[20px]'
    }`}>
      <div className="max-w-[1400px] mx-auto px-10 md:px-[40px] flex justify-between items-center">
        <div className={`text-xl md:text-[1.3rem] font-bold ${
          isDark ? 'text-text-primary' : 'text-kalalou-ink'
        } ${isDark ? 'tracking-[-0.02em]' : 'tracking-[0.05em]'}`}>
          {isDark ? 'MagicWand AI' : 'MAGICWAND AI'}
        </div>
        <div className="flex gap-8 md:gap-[32px]">
          <Link 
            to="/" 
            className={`text-base font-medium transition-colors relative ${
              isDark 
                ? location.pathname === '/' ? 'text-text-primary' : 'text-text-secondary'
                : location.pathname === '/' ? 'text-kalalou-ink' : 'text-kalalou-secondary'
            }`}
          >
            Home
            {location.pathname === '/' && (
              <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 ${
                isDark ? 'bg-text-primary' : 'bg-kalalou-ink'
              }`} />
            )}
          </Link>
          <Link 
            to="/kalalou" 
            className={`text-base font-medium transition-colors relative ${
              isDark 
                ? location.pathname === '/kalalou' ? 'text-text-primary' : 'text-text-secondary'
                : location.pathname === '/kalalou' ? 'text-kalalou-ink' : 'text-kalalou-secondary'
            }`}
          >
            Kalalou
            {location.pathname === '/kalalou' && (
              <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 ${
                isDark ? 'bg-text-primary' : 'bg-kalalou-ink'
              }`} />
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

