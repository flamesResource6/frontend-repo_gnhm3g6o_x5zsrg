import React from 'react'
import { Bell, User, ChevronLeft } from 'lucide-react'

const TopNavbar = ({ title = '', showBack = false, onBack }) => {
  return (
    <header className="h-14 flex items-center justify-between px-4 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.05)] sticky top-0 z-20">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={onBack} className="p-2 rounded-xl hover:bg-gray-100">
            <ChevronLeft size={24} color="#0A84FF" />
          </button>
        )}
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-xl hover:bg-gray-100 relative">
          <Bell size={24} color="#0A84FF" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#00C2A8' }}></span>
        </button>
        <div className="w-8 h-8 rounded-xl bg-gray-200 flex items-center justify-center">
          <User size={18} className="text-gray-500" />
        </div>
      </div>
    </header>
  )
}

export default TopNavbar
