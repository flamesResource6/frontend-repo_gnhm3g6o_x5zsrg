import React from 'react'
import Spline from '@splinetool/react-spline'
import PrimaryButton from './PrimaryButton'

const Hero3D = ({ onSignup, onLogin }) => {
  return (
    <section className="relative bg-[#F6F7F9]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center py-12 px-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Verify. Serve. Grow.</h1>
          <p className="text-gray-600 mb-6">A modern vendor hub with KYC onboarding, service management, and real-time requests — built with a clean blue system for clarity and trust.</p>
          <div className="flex gap-3">
            <PrimaryButton onClick={onSignup}>Create Vendor Account</PrimaryButton>
            <button onClick={onLogin} className="px-4 py-2 rounded-xl font-semibold text-gray-700 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">Sign in</button>
          </div>
        </div>
        <div className="h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F6F7F9] to-transparent"></div>
    </section>
  )
}

export default Hero3D
