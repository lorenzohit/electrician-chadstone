import { Helmet } from 'react-helmet-async'
import { CheckCircle, Phone } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const standardRates = [
  { service: 'General Electrical Repairs', description: 'Fault finding, tripping circuits, switch or outlet repairs', price: 'From $120' },
  { service: 'Lighting Installation & Replacement', description: 'Indoor, outdoor, or LED upgrades', price: 'From $130' },
  { service: 'Power Outage & Fault Restoration', description: 'Diagnosis and repair of sudden outages', price: 'From $150' },
  { service: 'Switchboard & Safety Switch Services', description: 'Replacement, upgrade, or inspection', price: 'From $180' },
  { service: 'Smoke Alarm Installation & Testing', description: 'Hardwired or battery-powered units', price: 'From $100' },
  { service: 'Ceiling Fan Installation', description: 'Installation or replacement (fan supplied by customer)', price: 'From $160' },
]

const suburbs = [
  'Chadstone', 'Malvern East', 'Hughesdale', 'Oakleigh', 'Syndal', 'Ashwood',
  'Glen Waverley', 'Notting Hill', 'Mount Waverley', 'Carnegie', 'Bentleigh East', 'Moorabbin',
]

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | Emergency Electrician Chadstone</title>
        <meta name="description" content="Transparent pricing for emergency electrical services in Chadstone. No hidden fees. Call-out rates & service costs." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Transparent, Upfront, and Fair — Every Time</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We believe great service starts with honesty. That's why we provide clear, upfront pricing before any work begins — no hidden fees, no surprises. Whether you need a quick repair, a safety check, or an after-hours emergency callout, you'll know exactly what to expect.
          </p>
        </div>
      </section>

      {/* Standard rates table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Standard Call-Out Rates</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Service Type</th>
                  <th className="text-left px-6 py-4 font-semibold hidden sm:table-cell">Description</th>
                  <th className="text-right px-6 py-4 font-semibold">Starting Price (AUD)</th>
                </tr>
              </thead>
              <tbody>
                {standardRates.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-4 font-medium text-slate-900 text-sm">{row.service}</td>
                    <td className="px-6 py-4 text-slate-600 text-sm hidden sm:table-cell">{row.description}</td>
                    <td className="px-6 py-4 text-right font-bold text-yellow-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* After hours rates */}
      <section className="py-14 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">After-Hours &amp; Emergency Rates</h2>
            <p className="text-slate-400 mb-6">We know electrical issues don't follow business hours. Our 24/7 emergency electricians in Chadstone are available day and night.</p>
            <ul className="space-y-3">
              {[
                'After-hours call-out fee: From $220',
                'Public holidays: From $250',
                'Weekend service: Standard rate + small emergency fee',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle size={18} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 mt-4 text-sm">We prioritize safety and speed — your emergency is our top priority.</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">Need an Estimate?</h3>
            <p className="text-slate-400 mb-6">
              If you'd like a quote for your project or repair, contact us anytime. We're happy to provide free estimates over the phone or by email.
            </p>
            <a
              href="tel:0882240819"
              className="inline-flex items-center gap-2 bg-yellow-400 text-slate-900 px-5 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors w-full justify-center"
            >
              <Phone size={18} />
              Call 24/7 Emergency Line
            </a>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Areas</h2>
          <p className="text-slate-600 mb-6">
            We proudly serve Chadstone and nearby suburbs, offering fast, local response for all power outage emergencies and electrical repairs.
          </p>
          <div className="flex flex-wrap gap-2">
            {suburbs.map(s => (
              <span key={s} className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
