import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Book() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', date: '', time: '', address: '', notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Book Online | Emergency Electrician Chadstone</title>
        <meta name="description" content="Book an emergency electrician in Chadstone online. 24/7 availability. Fast response guaranteed." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Fast, Reliable Electrical Service — When You Need It</h1>
          <p className="text-slate-400">Choose what you need, when you need it — we'll handle the rest.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact details sidebar */}
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-slate-900">Contact Details</h2>
            {[
              { icon: Phone, label: 'Call Us', value: '(08) 8224 0819', href: 'tel:0882240819' },
              { icon: Mail, label: 'Email', value: 'info@emergencyelectricianchadstone.com.au', href: 'mailto:info@emergencyelectricianchadstone.com.au' },
              { icon: MapPin, label: 'Visit Us', value: 'Chadstone, Melbourne VIC', href: null },
              { icon: Clock, label: 'Hours', value: '24/7 — including weekends & public holidays', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-slate-900" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-slate-700 hover:text-yellow-600 transition-colors break-all">{value}</a>
                  ) : (
                    <p className="text-sm text-slate-700">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Booking form */}
          <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Book Your Service</h2>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Booking Request Received!</h3>
                <p className="text-slate-600 mb-6">We'll confirm your appointment within 30 minutes. For immediate emergencies, call us now.</p>
                <a href="tel:0882240819" className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors">
                  <Phone size={18} /> Call (08) 8224 0819
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Type *</label>
                  <select
                    required
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option>Power Outage</option>
                    <option>Safety Switch Tripping</option>
                    <option>Switchboard Repair / Upgrade</option>
                    <option>No Hot Water</option>
                    <option>Fault Finding</option>
                    <option>Storm Damage</option>
                    <option>Smoke Alarm Fault</option>
                    <option>After Hours Emergency</option>
                    <option>Lighting Failure</option>
                    <option>Sparking Outlet</option>
                    <option>Ceiling Fan Fault</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Time</label>
                    <select
                      value={formData.time}
                      onChange={e => setFormData({ ...formData, time: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="">Any time</option>
                      <option>Morning (8am–12pm)</option>
                      <option>Afternoon (12pm–5pm)</option>
                      <option>Evening (5pm–9pm)</option>
                      <option>After hours / ASAP</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Property Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your address in Chadstone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Notes</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Describe the issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-base"
                >
                  Send Booking Request
                </button>
                <p className="text-xs text-slate-500 text-center">For emergencies, call us directly on (08) 8224 0819</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
