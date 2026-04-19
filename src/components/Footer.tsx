import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Zap, Clock } from 'lucide-react'

const serviceLinks = [
  { label: 'Power Outage', path: '/services/power-outage' },
  { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping' },
  { label: 'Switchboard Repair', path: '/services/switchboard-repair' },
  { label: 'No Hot Water', path: '/services/no-hot-water' },
  { label: 'Fault Finding', path: '/services/fault-finding' },
  { label: 'Storm Damage', path: '/services/storm-damage' },
  { label: 'Smoke Alarm Fault', path: '/services/smoke-alarm-fault' },
  { label: 'After Hours', path: '/services/after-hours' },
  { label: 'Lighting Failure', path: '/services/lighting-failure' },
  { label: 'Sparking Outlet', path: '/services/sparking-outlet' },
  { label: 'Ceiling Fan Fault', path: '/services/ceiling-fan-fault' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-yellow-400" size={22} />
              <span className="text-white font-bold text-lg leading-tight">
                <span className="text-yellow-400">Emergency</span> Electrician<br />
                <span className="text-xs font-normal text-slate-400">Chadstone</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Licensed emergency electricians serving Chadstone and south-east Melbourne. Available 24/7 with 60-minute response.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <Clock size={16} />
              <span className="text-sm font-semibold">Available 24 hours, 7 days</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(s => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm text-slate-400 hover:text-yellow-400 transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'All Services', path: '/services' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'FAQs', path: '/faqs' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Contact', path: '/contact' },
                { label: 'Book Online', path: '/book' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0882240819" className="flex items-start gap-3 text-sm text-slate-400 hover:text-yellow-400 transition-colors">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                  <span>(08) 8224 0819</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@emergencyelectricianchadstone.com.au" className="flex items-start gap-3 text-sm text-slate-400 hover:text-yellow-400 transition-colors">
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                  <span>info@emergencyelectricianchadstone.com.au</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-yellow-400" />
                  <span>Chadstone, Melbourne VIC</span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/book" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-colors inline-block">
                Book an Electrician
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Emergency Electrician Chadstone. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Licensed & Insured | Serving Chadstone &amp; South-East Melbourne
          </p>
        </div>
      </div>
    </footer>
  )
}
