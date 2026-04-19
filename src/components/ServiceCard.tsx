import { Link } from 'react-router-dom'
import { type LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  path: string
}

export default function ServiceCard({ icon: Icon, title, description, path }: ServiceCardProps) {
  return (
    <Link
      to={path}
      className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-yellow-400 hover:shadow-lg transition-all duration-200"
    >
      <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition-colors">
        <Icon size={22} className="text-yellow-500 group-hover:text-slate-900 transition-colors" />
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-yellow-600 group-hover:gap-2 transition-all">
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  )
}
