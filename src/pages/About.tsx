import { Helmet } from 'react-helmet-async'
import { Clock, Shield, Star, Zap, Target, Eye } from 'lucide-react'
import CTABanner from '../components/CTABanner'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Emergency Electrician Chadstone</title>
        <meta name="description" content="Licensed emergency electrician serving Chadstone & south-east Melbourne. 10+ years experience. Fast, reliable service." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-slate-300">Powering Homes and Businesses Safely</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              At Emergency Electrician Chadstone, we keep your home and business powered, safe, and running smoothly — day and night. With years of hands-on experience, our team of licensed electricians delivers reliable electrical services backed by quality workmanship, attention to detail, and honest advice.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether it's an emergency repair, switchboard upgrade, or complete wiring for a new build, we bring expertise and care to every job. No shortcuts. No surprises — just dependable service you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-5">
              <Target size={22} className="text-yellow-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To deliver safe, efficient, and lasting electrical solutions that ensure comfort, reliability, and peace of mind for every customer.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-5">
              <Eye size={22} className="text-yellow-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted and innovative electrical service provider, lighting the way for safer and smarter communities.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Reliability When It Matters Most</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              In an electrical emergency, you need more than speed — you need peace of mind. Our skilled team responds quickly and reliably to keep your home or business safe.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: '24/7 Availability', desc: 'Day or night, we\'re always on call' },
              { icon: Zap, title: 'Fast Response', desc: 'Arrival usually within 1 hour' },
              { icon: Shield, title: 'Licensed & Insured', desc: 'Certified electricians you can trust' },
              { icon: Star, title: '10+ Years Experience', desc: 'Proven local service expertise' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-yellow-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
