import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', service: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Static site — no backend. Show success message.
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Emergency Electrician Chadstone</title>
        <meta name="description" content="Contact Emergency Electrician Chadstone for 24/7 electrical services. Call, email, or request a callback online." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-slate-400">Get in touch — we're available 24 hours a day, 7 days a week.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Get In Touch</h2>
            <ul className="space-y-6">
              <li>
                <a href="tel:0882240819" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">Phone</p>
                    <p className="text-slate-600 group-hover:text-yellow-600 transition-colors">(08) 8224 0819</p>
                    <p className="text-xs text-slate-500 mt-0.5">Available 24/7</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@emergencyelectricianchadstone.com.au" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">Email</p>
                    <p className="text-slate-600 group-hover:text-yellow-600 transition-colors break-all">info@emergencyelectricianchadstone.com.au</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">Location</p>
                    <p className="text-slate-600">Chadstone, Melbourne VIC 3148</p>
                    <p className="text-xs text-slate-500 mt-0.5">Serving all south-east Melbourne suburbs</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-0.5">Hours</p>
                    <p className="text-slate-600">24 hours a day, 7 days a week</p>
                    <p className="text-xs text-slate-500 mt-0.5">Including public holidays</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Send Your Question</h2>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">We'll get back to you as soon as possible. For urgent matters, please call us directly.</p>
                <a href="tel:0882240819" className="mt-4 inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
                  <Phone size={16} /> Call Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="0400 000 000"
                    />
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Type</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option>Power Outage</option>
                    <option>Safety Switch Tripping</option>
                    <option>Switchboard Repair</option>
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
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Describe your electrical issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-slate-900 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
