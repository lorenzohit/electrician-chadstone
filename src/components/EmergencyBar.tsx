import { Phone } from 'lucide-react'

export default function EmergencyBar() {
  return (
    <div className="bg-yellow-400 text-slate-900 py-2 px-4 text-center text-sm font-semibold">
      <a href="tel:0882240819" className="flex items-center justify-center gap-2 hover:underline">
        <Phone size={14} />
        <span>24/7 Emergency Line — Call Now: (08) 8224 0819</span>
      </a>
    </div>
  )
}
