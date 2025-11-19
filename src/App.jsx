import React, { useState } from 'react'
import TopNavbar from './components/TopNavbar'
import BottomNav from './components/BottomNav'
import CardGrid from './components/CardGrid'
import PrimaryButton from './components/PrimaryButton'
import FileUpload from './components/FileUpload'
import Hero3D from './components/Hero3D'

const Input = ({ label, placeholder, type = 'text' }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A84FF] shadow-[0px_4px_10px_rgba(0,0,0,0.05)]" />
  </div>
)

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [signupFiles, setSignupFiles] = useState({ aadhaar: [], pan: [], cheque: [], profile: [] })

  return (
    <div className="min-h-screen bg-[#F6F7F9] pb-20">
      <TopNavbar title="Vendor Portal" />

      {/* Hero */}
      <Hero3D onSignup={() => setActiveTab('signup')} onLogin={() => setActiveTab('login')} />

      <main className="max-w-5xl mx-auto p-4 space-y-8">
        {/* Login */}
        {activeTab === 'login' && (
          <section className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
            <h2 className="text-xl font-semibold mb-4">Vendor Login</h2>
            <div className="space-y-3">
              <Input label="Email" placeholder="you@example.com" type="email" />
              <Input label="Password" placeholder="••••••••" type="password" />
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm" style={{ color: '#0A84FF' }}>Create account</a>
                <PrimaryButton>Login</PrimaryButton>
              </div>
            </div>
          </section>
        )}

        {/* Signup (KYC) */}
        {activeTab === 'signup' && (
          <section className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
            <h2 className="text-xl font-semibold mb-4">Vendor Signup (KYC)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Input label="Full Name" placeholder="Your name" />
                <Input label="Email" placeholder="you@example.com" type="email" />
                <Input label="Phone" placeholder="+91" />
                <Input label="Experience (years)" placeholder="5" type="number" />
                <Input label="Qualification" placeholder="B.Tech / Diploma" />
                <Input label="Bank Account Number" placeholder="1234567890" />
                <Input label="IFSC Code" placeholder="HDFC0001234" />
              </div>
              <div className="space-y-4">
                <FileUpload label="Profile Image" multiple={false} value={signupFiles.profile} onChange={(f)=>setSignupFiles(s=>({...s, profile:f}))} />
                <FileUpload label="Aadhaar Image" multiple value={signupFiles.aadhaar} onChange={(f)=>setSignupFiles(s=>({...s, aadhaar:f}))} />
                <FileUpload label="PAN Image" multiple value={signupFiles.pan} onChange={(f)=>setSignupFiles(s=>({...s, pan:f}))} />
                <FileUpload label="Cancelled Cheque" multiple={false} value={signupFiles.cheque} onChange={(f)=>setSignupFiles(s=>({...s, cheque:f}))} />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <PrimaryButton>Submit for Verification</PrimaryButton>
            </div>
          </section>
        )}

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <section className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-white rounded-xl p-5 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-gray-500 text-sm">Welcome</div>
                    <div className="text-xl font-semibold">Vendor Name</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: '#00C2A8' }}>Verified</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
                <div className="text-sm text-gray-500">Today's Bookings</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">4</div>
              </div>
            </div>
            <CardGrid onSelect={setActiveTab} />
          </section>
        )}

        {/* Services */}
        {activeTab === 'services' && (
          <section className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold">Your Services</div>
                <div className="text-sm text-gray-500">Manage your offerings</div>
              </div>
              <PrimaryButton onClick={() => alert('Add Service form opened')}>Add Service</PrimaryButton>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-gray-100"></div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold">Service {i}</div>
                        <div className="text-sm text-gray-500">Short description goes here</div>
                      </div>
                      <label className="inline-flex items-center gap-2 text-sm">
                        <input type="checkbox" className="accent-[#0A84FF] w-4 h-4" defaultChecked /> Active
                      </label>
                    </div>
                    <div className="mt-2 font-semibold">₹ 1,499</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Requests */}
        {activeTab === 'requests' && (
          <section className="space-y-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                <div className="flex-1">
                  <div className="font-semibold">User {i}</div>
                  <div className="text-sm text-gray-500">2h ago • AC Repair • Short summary of issue</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-xl text-white" style={{ backgroundColor: '#0A84FF' }}>Accept</button>
                  <button className="px-4 py-2 rounded-xl text-white" style={{ backgroundColor: '#EF4444' }}>Reject</button>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Wallet */}
        {activeTab === 'wallet' && (
          <section className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Total Balance</div>
                <div className="text-3xl font-bold text-gray-900">₹ 12,840</div>
              </div>
              <PrimaryButton>Withdraw</PrimaryButton>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
                <div className="text-sm text-gray-500">Total Earned</div>
                <div className="text-xl font-semibold">₹ 48,250</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
                <div className="text-sm text-gray-500">This Month</div>
                <div className="text-xl font-semibold">₹ 9,800</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
                <div className="text-sm text-gray-500">Pending Payouts</div>
                <div className="text-xl font-semibold">₹ 2,300</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
              <div className="font-semibold mb-3">Transactions</div>
              <div className="divide-y">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="py-3 flex items-center justify-between">
                    <div>
                      <div className="font-medium">Booking #{1000+i}</div>
                      <div className="text-sm text-gray-500">12 Aug 2024</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹ {(1000 + i*120).toLocaleString()}</div>
                      <div className="text-sm" style={{ color: '#00C2A8' }}>Settled</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Profile */}
        {activeTab === 'profile' && (
          <section className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
              <h3 className="text-lg font-semibold mb-4">Profile Updates</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Display Name" placeholder="Vendor Name" />
                <Input label="Phone" placeholder="+91" />
                <Input label="Address" placeholder="Street, City" />
                <Input label="Pincode" placeholder="123456" />
              </div>
              <div className="mt-4">
                <PrimaryButton>Save Changes</PrimaryButton>
              </div>
            </div>
          </section>
        )}
      </main>

      <BottomNav active={activeTab} onChange={setActiveTab} />
    </div>
  )
}

export default App
