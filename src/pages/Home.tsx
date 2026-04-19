import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, Clock, Shield, Star, Zap, Wrench, Droplets, CloudLightning, AlertTriangle, Lightbulb, Fan, Flame } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import CTABanner from '../components/CTABanner'

const services = [
  { icon: Zap, title: 'Power Outage', description: 'Fast restoration of power to keep your home or business running.', path: '/services/power-outage' },
  { icon: Shield, title: 'Safety Switch Tripping', description: 'Diagnosis and permanent repair for frequently tripping safety switches.', path: '/services/safety-switch-tripping' },
  { icon: Wrench, title: 'Switchboard Repair', description: 'Safe upgrades and repairs to restore reliable power distribution.', path: '/services/switchboard-repair' },
  { icon: Droplets, title: 'No Hot Water', description: 'Electrical inspection and repair for hot water systems and elements.', path: '/services/no-hot-water' },
  { icon: AlertTriangle, title: 'Fault Finding', description: 'Advanced diagnostics to locate and fix hidden electrical faults fast.', path: '/services/fault-finding' },
  { icon: CloudLightning, title: 'Storm Damage', description: 'Emergency storm response and safety checks for weather-damaged systems.', path: '/services/storm-damage' },
  { icon: Flame, title: 'Smoke Alarm Fault', description: 'Installation, repair & compliance checks to keep you protected.', path: '/services/smoke-alarm-fault' },
  { icon: Clock, title: 'After Hours', description: 'Available nights, weekends and public holidays — always on call.', path: '/services/after-hours' },
  { icon: Lightbulb, title: 'Lighting Failure', description: 'Same-day lighting repairs for indoor, outdoor and commercial spaces.', path: '/services/lighting-failure' },
  { icon: AlertTriangle, title: 'Sparking Outlet', description: 'Emergency repair for dangerous sparking power points — call immediately.', path: '/services/sparking-outlet' },
  { icon: Fan, title: 'Ceiling Fan Fault', description: 'Full diagnosis and repair for all ceiling fan faults and failures.', path: '/services/ceiling-fan-fault' },
]

const reviews = [
  { name: 'Mark R.', suburb: 'Malvern East', title: 'Power restored in no time!', body: 'We lost power late at night, and their team arrived within an hour. Professional, quick, and friendly — couldn\'t ask for better service!', stars: 5 },
  { name: 'Samantha P.', suburb: 'Hughesdale', title: 'Professional, friendly, and affordable.', body: 'I called them for a switchboard upgrade, and I\'m so impressed with the quality of work. The electrician explained everything clearly and cleaned up afterwards.', stars: 5 },
  { name: 'Jessica Brown', suburb: 'Syndal', title: 'Always reliable and efficient.', body: 'We\'ve used them for our home and café — from lighting to ceiling fans. Every visit has been on time and stress-free.', stars: 5 },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Emergency Electrician Chadstone | 24/7 Fast Response</title>
        <meta name="description" content="Need an emergency electrician in Chadstone? Available 24/7 with 60-min response. Licensed & insured. Call now!" />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm font-semibold">Available 24/7 — 60 Min Response</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              24/7 Emergency Electricians – Fast, Reliable &amp; Local
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Power out? Electrical fault? Our certified electricians are available day and night to get you back up and running safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0882240819"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-slate-900 px-6 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
              >
                <Phone size={20} />
                Call Now — (08) 8224 0819
              </a>
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-600 text-white px-6 py-4 rounded-xl font-semibold hover:border-slate-400 transition-colors"
              >
                Request a Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-slate-800 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: 'Fast Response', sub: 'Average arrival within 60 minutes' },
            { icon: Shield, title: 'Licensed & Insured', sub: 'Certified professionals you can trust' },
            { icon: Star, title: '10+ Years Experience', sub: 'Reliable local service' },
            { icon: Zap, title: '24/7 Availability', sub: 'Always ready, day or night' },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-slate-400 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted Local Electricians, Available Anytime</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We've been serving homes and businesses with emergency electrical services for over 10 years. From sudden outages to dangerous wiring faults, our team responds quickly to keep you safe. Our licensed electricians are fully equipped to handle any situation on the spot, minimizing downtime and stress. With a commitment to honest pricing and dependable service, we've built long-lasting trust in the community.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-500 transition-colors">
              Learn More About Us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: '24/7', label: 'Emergency service' },
              { stat: '60 min', label: 'Average response' },
              { stat: '10+', label: 'Years experience' },
              { stat: '5★', label: 'Customer rating' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-slate-50 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-yellow-500 mb-1">{stat}</p>
                <p className="text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Emergency Services</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Fast, expert electrical services for homes and businesses across Chadstone and south-east Melbourne.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <ServiceCard key={s.path} {...s} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">What Our Customers Say</h2>
            <p className="text-slate-600">Rated 5 stars for fast, reliable electrical work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-slate-900 mb-1">{r.title}</p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{r.body}</p>
                <p className="text-sm font-semibold text-slate-800">{r.name}</p>
                <p className="text-xs text-slate-500">{r.suburb}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews" className="text-yellow-600 font-semibold hover:text-yellow-500 transition-colors">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-12 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Service Areas</h2>
          <p className="text-slate-400 mb-6">We proudly serve Chadstone and nearby suburbs:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Chadstone', 'Malvern East', 'Hughesdale', 'Oakleigh', 'Syndal', 'Ashwood', 'Glen Waverley', 'Notting Hill', 'Mount Waverley', 'Carnegie', 'Bentleigh East', 'Moorabbin'].map(suburb => (
              <span key={suburb} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full text-sm">
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
