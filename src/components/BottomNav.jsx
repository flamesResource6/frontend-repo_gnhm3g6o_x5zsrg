import React from 'react'
import { Home, Layers, ClipboardList, Wallet, User } from 'lucide-react'

const tabs = [
  { key: 'dashboard', label: 'Home', icon: Home },
  { key: 'services', label: 'Services', icon: Layers },
  { key: 'requests', label: 'Requests', icon: ClipboardList },
  { key: 'wallet', label: 'Wallet', icon: Wallet },
  { key: 'profile', label: 'Profile', icon: User },
]

const BottomNav = ({ active = 'dashboard', onChange }) => {
  return (
    <nav className="h-16 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.05)] fixed bottom-0 inset-x-0 z-20">
      <div className="grid grid-cols-5 h-full">
        {tabs.map(({ key, label, icon: Icon }) => {
          const isActive = active === key
          return (
            <button
              key={key}
              onClick={() => onChange?.(key)}
              className={`flex flex-col items-center justify-center text-xs ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}
            >
              <Icon size={24} color={isActive ? '#0A84FF' : '#9CA3AF'} />
              <span className="mt-1">{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
