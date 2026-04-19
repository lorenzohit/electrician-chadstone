import ServicePageLayout from '../../components/ServicePageLayout'

export default function SmokeAlarmFault() {
  return (
    <ServicePageLayout
      metaTitle="Smoke Alarm Installation Chadstone | Compliant & Certified"
      metaDescription="Smoke alarm installation, repair & compliance in Chadstone. Meet Victorian regulations. Licensed electrician."
      heroHeading="Faulty Smoke Alarm? Stay Safe With a Quick Fix"
      causesHeading="Why Smoke Alarms Fail"
      causes={[
        'Dead or low batteries causing false alarms or silence.',
        'Wiring issues in hardwired smoke detectors interrupting power supply.',
        'Moisture, dust, or insects getting into sensors and affecting detection.',
        'Aged or expired smoke alarms (typically after 10 years).',
        'Frequent false alarms triggered by location (e.g., too close to kitchens or bathrooms).',
      ]}
      fixSteps={[
        'Inspect and test all alarms to identify wiring, battery, or sensor issues.',
        'Repair or rewire faulty connections for hardwired systems.',
        'Replace expired or non-compliant units with modern, photoelectric smoke alarms that meet Australian Standard AS 3786.',
        'Check power supply and backup batteries, ensuring both operate correctly.',
        'Test system response and interconnection (if applicable) to confirm proper operation.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Fault Finding', path: '/services/fault-finding', description: 'Advanced diagnostics to locate hidden electrical faults.' },
        { label: 'After Hours', path: '/services/after-hours', description: 'Available nights, weekends and public holidays.' },
      ]}
    >
      <p className="text-slate-600 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        A faulty smoke alarm can fail when you need it most — that's why regular inspection and servicing are essential to ensure your system responds correctly in an emergency. Our goal is to make sure your smoke alarm system provides complete, reliable protection — 24 hours a day, 7 days a week.
      </p>
    </ServicePageLayout>
  )
}
