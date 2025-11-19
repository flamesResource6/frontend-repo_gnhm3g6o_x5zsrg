import React from 'react'

function PrimaryButton({ children, className = '', onClick, type = 'button', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-95'} ${className}`}
      style={{ backgroundColor: '#0A84FF' }}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
