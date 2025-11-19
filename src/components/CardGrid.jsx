import React from 'react'
import { Layers, ClipboardList, Wallet, User } from 'lucide-react'

const cards = [
  { key: 'services', title: 'Services', icon: Layers, color: '#0A84FF' },
  { key: 'requests', title: 'Requests', icon: ClipboardList, color: '#0A84FF' },
  { key: 'wallet', title: 'Wallet', icon: Wallet, color: '#0A84FF' },
  { key: 'profile', title: 'Profile Updates', icon: User, color: '#0A84FF' },
]

const CardGrid = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map(({ key, title, icon: Icon, color }) => (
        <button
          key={key}
          onClick={() => onSelect?.(key)}
          className="bg-white rounded-xl p-4 text-left shadow-[0px_4px_10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#F0F7FF' }}>
            <Icon size={24} color={color} />
          </div>
          <div className="text-gray-900 font-semibold">{title}</div>
          <div className="text-sm text-gray-500">Manage and view details</div>
        </button>
      ))}
    </div>
  )
}

export default CardGrid
