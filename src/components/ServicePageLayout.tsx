import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import CTABanner from './CTABanner'

interface RelatedService {
  label: string
  path: string
  description: string
}

interface ServicePageLayoutProps {
  metaTitle: string
  metaDescription: string
  heroHeading: string
  causes: string[]
  causesHeading?: string
  fixSteps: string[]
  relatedServices: RelatedService[]
  children?: React.ReactNode
}

export default function ServicePageLayout({
  metaTitle,
  metaDescription,
  heroHeading,
  causes,
  causesHeading = 'Why This Happens',
  fixSteps,
  relatedServices,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">{heroHeading}</h1>
          <a
            href="tel:0882240819"
            className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            <Phone size={20} />
            Call Now — (08) 8224 0819
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Causes */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">{causesHeading}</h2>
            <ul className="space-y-3">
              {causes.map((cause, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How we fix it */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">How We Fix It</h2>
            <ul className="space-y-3">
              {fixSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle size={18} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {children && <div className="mt-10">{children}</div>}
      </section>

      {/* Related services */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedServices.map(s => (
              <Link
                key={s.path}
                to={s.path}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-yellow-400 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors">{s.label}</h3>
                <p className="text-sm text-slate-600 mb-3">{s.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-600">
                  View service <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
