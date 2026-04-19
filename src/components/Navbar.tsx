import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'

const services = [
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`

  return (
    <nav className="bg-slate-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg">
            <Zap className="text-yellow-400" size={22} />
            <span className="leading-tight">
              <span className="text-yellow-400">Emergency</span> Electrician<br />
              <span className="text-xs font-normal text-slate-400">Chadstone</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-yellow-400 transition-colors"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services" className="block px-4 py-2 text-sm text-white hover:bg-slate-700 hover:text-yellow-400 rounded-t-lg font-semibold border-b border-slate-700">
                  All Services
                </Link>
                {services.map(s => (
                  <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-yellow-400 last:rounded-b-lg">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/faqs" className={navLinkClass}>FAQs</NavLink>
            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            <NavLink to="/reviews" className={navLinkClass}>Reviews</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <Link to="/book" className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-colors">
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-800 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            <NavLink to="/" end className="block py-2 text-white hover:text-yellow-400 text-sm font-medium" onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="block py-2 text-white hover:text-yellow-400 text-sm font-medium" onClick={() => setMobileOpen(false)}>About</NavLink>

            <button
              className="flex items-center gap-1 py-2 text-white hover:text-yellow-400 text-sm font-medium text-left"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                <Link to="/services" className="py-1 text-slate-300 hover:text-yellow-400 text-sm font-semibold" onClick={() => setMobileOpen(false)}>All Services</Link>
                {services.map(s => (
                  <Link key={s.path} to={s.path} className="py-1 text-slate-300 hover:text-yellow-400 text-sm" onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <NavLink to="/faqs" className="block py-2 text-white hover:text-yellow-400 text-sm font-medium" onClick={() => setMobileOpen(false)}>FAQs</NavLink>
            <NavLink to="/pricing" className="block py-2 text-white hover:text-yellow-400 text-sm font-medium" onClick={() => setMobileOpen(false)}>Pricing</NavLink>
            <NavLink to="/reviews" className="block py-2 text-white hover:text-yellow-400 text-sm font-medium" onClick={() => setMobileOpen(false)}>Reviews</NavLink>
            <NavLink to="/contact" className="block py-2 text-white hover:text-yellow-400 text-sm font-medium" onClick={() => setMobileOpen(false)}>Contact</NavLink>
            <Link to="/book" className="mt-2 bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg text-sm font-bold text-center hover:bg-yellow-300 transition-colors" onClick={() => setMobileOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
