import { Helmet } from 'react-helmet-async'
import { Star } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const reviews = [
  {
    name: 'Samantha P.',
    suburb: 'Hughesdale',
    title: 'Professional, friendly, and affordable.',
    body: 'I called them for a switchboard upgrade, and I\'m so impressed with the quality of work. The electrician explained everything clearly and cleaned up afterwards.',
    stars: 5,
  },
  {
    name: 'Mark R.',
    suburb: 'Malvern East',
    title: 'Power restored in no time!',
    body: 'We lost power late at night, and their team arrived within an hour. Professional, quick, and friendly — couldn\'t ask for better service!',
    stars: 5,
  },
  {
    name: 'Matthew Brown',
    suburb: 'Melbourne CBD',
    title: 'Great service at a fair price.',
    body: 'Had my switchboard upgraded last week. The electrician was polite, explained everything clearly, and finished the job neatly. Highly recommend!',
    stars: 5,
  },
  {
    name: 'Jessica Brown',
    suburb: 'Syndal',
    title: 'Always reliable and efficient.',
    body: 'We\'ve used them for our home and café — from lighting to ceiling fans. Every visit has been on time and stress-free.',
    stars: 5,
  },
  {
    name: 'Zoe Anderson',
    suburb: 'Chadstone',
    title: 'Excellent customer care.',
    body: 'From booking to follow-up, everything was smooth and easy. The electrician even checked in later to ensure all was perfect.',
    stars: 5,
  },
  {
    name: 'Lauren H.',
    suburb: 'Ashwood',
    title: 'Dependable electricians every time.',
    body: 'We\'ve called them for storm damage and hot water faults — both times they were quick, tidy, and polite.',
    stars: 5,
  },
]

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews | Emergency Electrician Chadstone</title>
        <meta name="description" content="Read reviews from Chadstone customers about our emergency electrical services. Rated 5 stars for fast, reliable work." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-slate-400">Rated 5 stars by homeowners and businesses across south-east Melbourne.</p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map(review => (
              <div
                key={review.name}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{review.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{review.body}</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.suburb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall rating */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5">
            <div className="text-center">
              <p className="text-5xl font-bold text-slate-900">5.0</p>
              <div className="flex gap-1 justify-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200" />
            <div className="text-left">
              <p className="font-semibold text-slate-900">Average rating</p>
              <p className="text-sm text-slate-500">Based on customer reviews</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Experience 5-Star Service?"
        subtitle="Join hundreds of satisfied customers across Chadstone and south-east Melbourne."
      />
    </>
  )
}
