import { Helmet } from 'react-helmet-async'
import { Zap, Shield, Wrench, Droplets, AlertTriangle, CloudLightning, Flame, Clock, Lightbulb, Fan } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import CTABanner from '../components/CTABanner'

const allServices = [
  { icon: Zap, title: 'Power Outage', description: 'Lost power at home or work? We diagnose and restore power fast, whether it\'s a tripped breaker, damaged wiring, or grid issue.', path: '/services/power-outage' },
  { icon: Shield, title: 'Safety Switch Tripping', description: 'If your safety switch keeps tripping, it\'s a sign of an underlying fault. We find the cause and fix it permanently.', path: '/services/safety-switch-tripping' },
  { icon: Wrench, title: 'Switchboard Repair & Upgrade', description: 'Old ceramic fuse boards and faulty switchboards are a fire risk. We repair, upgrade, and modernise switchboards to Australian standards.', path: '/services/switchboard-repair' },
  { icon: AlertTriangle, title: 'Electrical Fault Finding', description: 'Can\'t find the source of an electrical problem? Our advanced diagnostic equipment pinpoints faults quickly.', path: '/services/fault-finding' },
  { icon: AlertTriangle, title: 'Sparking Outlet Repair', description: 'A sparking power point is a fire hazard. Turn off the power and call us immediately for safe, same-day repairs.', path: '/services/sparking-outlet' },
  { icon: CloudLightning, title: 'Storm Damage Electrical', description: 'Lightning strikes, fallen trees, and flooding can damage your electrical system. We provide emergency storm response and safety checks.', path: '/services/storm-damage' },
  { icon: Droplets, title: 'No Hot Water', description: 'Electrical inspection and repair for hot water systems, heating elements, and thermostats.', path: '/services/no-hot-water' },
  { icon: Flame, title: 'Smoke Alarm Fault', description: 'Installation, repair and compliance checks for smoke alarm systems meeting Victorian regulations.', path: '/services/smoke-alarm-fault' },
  { icon: Clock, title: 'After Hours Electrician', description: 'Available nights, weekends and public holidays. No electrical issue is too urgent — we\'re always ready.', path: '/services/after-hours' },
  { icon: Lightbulb, title: 'Lighting Failure', description: 'Lights not working? We fix lighting failures same day — indoor, outdoor and commercial properties.', path: '/services/lighting-failure' },
  { icon: Fan, title: 'Ceiling Fan Fault', description: 'Ceiling fan not working, making noise, or wobbling? Our electricians fix all ceiling fan faults safely.', path: '/services/ceiling-fan-fault' },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Electrical Services Chadstone | Emergency Electrician</title>
        <meta name="description" content="Full range of emergency electrical services in Chadstone. Power outages, switchboard repair, safety switches & more." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Services</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            At Emergency Electrician Chadstone, we provide a full range of <strong className="text-white">emergency electrical services</strong> across Chadstone and Melbourne's south-east. Our licensed electricians are available 24/7 to handle any electrical emergency — from sudden power outages to dangerous wiring faults. Fast response, honest pricing, and guaranteed workmanship on every job.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Emergency Electrical Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map(s => (
              <ServiceCard key={s.path} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Commercial note */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Residential Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We service all types of homes — from apartments to large family houses. Whether it's a power outage, faulty switchboard, or lighting issue, our team is equipped to resolve it safely and efficiently.
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Commercial Services</h2>
            <p className="text-slate-600 leading-relaxed">
              Downtime costs money. Our commercial electricians respond fast to keep your business running. From offices to retail shops and cafes, we handle electrical emergencies of any size.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
