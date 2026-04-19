import { Link } from 'react-router-dom'
import { Phone, Calendar } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Need an Emergency Electrician Right Now?',
  subtitle = 'Our licensed team is available 24/7 with 60-minute response across Chadstone and south-east Melbourne.',
}: CTABannerProps) {
  return (
    <section className="bg-slate-900 py-14 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0882240819"
            className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
          >
            <Phone size={18} />
            Call (08) 8224 0819
          </a>
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 hover:text-slate-900 transition-colors"
          >
            <Calendar size={18} />
            Book Online
          </Link>
        </div>
      </div>
    </section>
  )
}
