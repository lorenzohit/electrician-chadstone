import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ChevronDown } from 'lucide-react'
import CTABanner from '../components/CTABanner'

const faqs = [
  {
    question: 'How quickly can you arrive?',
    answer: 'In most cases, we arrive within 30–60 minutes, depending on your location in the Chadstone and south-east Melbourne area.',
  },
  {
    question: 'Do you charge extra for emergency callouts?',
    answer: 'Yes, after-hours, weekend, or public holiday emergency callouts may include a small additional fee. We always inform you of any extra charges before starting work.',
  },
  {
    question: 'Are your electricians licensed and insured?',
    answer: 'Absolutely. All our electricians are fully licensed and insured, ensuring professional, safe, and reliable service every time.',
  },
  {
    question: 'Can you handle both residential and commercial emergencies?',
    answer: 'Yes, we provide fast, expert electrical services for both homes and businesses, handling emergencies of any size or complexity.',
  },
  {
    question: 'What should I do before you arrive?',
    answer: 'Ensure the area is safe by switching off affected circuits if possible, keep children and pets away, and avoid touching any exposed wiring. Our team will handle the rest safely upon arrival.',
  },
  {
    question: 'Do you provide free quotes?',
    answer: 'We are happy to provide free estimates over the phone or by email for most jobs. For complex electrical work, a site inspection may be required before providing a detailed quote.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We serve Chadstone and the surrounding south-east Melbourne suburbs including Malvern East, Hughesdale, Oakleigh, Syndal, Ashwood, Glen Waverley, Carnegie, Moorabbin, and more.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including cash, EFTPOS, and bank transfer. Payment is due upon completion of the work.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-slate-500 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white border-t border-slate-100">
          <p className="text-slate-600 leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>FAQs | Emergency Electrician Chadstone</title>
        <meta name="description" content="Frequently asked questions about our emergency electrical services in Chadstone. Pricing, response times & more." />
      </Helmet>

      {/* Hero */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-400">Answers to the most common questions about our emergency electrical services.</p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map(faq => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Still Have Questions?"
        subtitle="Call our team anytime — we're available 24/7 and happy to help before you book."
      />
    </>
  )
}
