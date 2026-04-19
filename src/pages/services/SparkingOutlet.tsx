import ServicePageLayout from '../../components/ServicePageLayout'

export default function SparkingOutlet() {
  return (
    <ServicePageLayout
      metaTitle="Sparking Outlet Repair Chadstone | Don't Ignore It"
      metaDescription="Sparking outlet or power point? This is an emergency. Our Chadstone electricians respond fast to prevent fires."
      heroHeading="Dangerous Sparking Outlets? Don't Wait — Call Us"
      causesHeading="Why Outlets Spark"
      causes={[
        'Loose or frayed wiring inside the outlet.',
        'Overloaded circuits from high-power appliances like heaters or kettles.',
        'Worn or cracked power points that no longer hold plugs securely.',
        'Moisture or corrosion entering outdoor or bathroom outlets.',
        'Aged outlets or DIY installations that no longer meet safety standards.',
        'Faulty appliances drawing uneven or excessive current.',
      ]}
      fixSteps={[
        'Inspect the outlet, wiring, and nearby circuits for damage or overheating.',
        'Isolate and disconnect faulty outlets to prevent further risk.',
        'Repair or replace damaged power points, switches, or wiring.',
        'Test appliances to ensure they\'re not the cause of the fault.',
        'Upgrade old or non-compliant fittings to meet modern Australian safety standards.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Fault Finding', path: '/services/fault-finding', description: 'Advanced diagnostics to locate hidden electrical faults.' },
        { label: 'After Hours', path: '/services/after-hours', description: 'Available nights, weekends and public holidays.' },
      ]}
    >
      <p className="text-slate-600 bg-red-50 border border-red-200 rounded-xl p-5">
        <strong className="text-red-700">Important:</strong> Even a small spark is a warning sign that your electrical system needs attention — and fast. Before we leave, we'll test every repaired outlet to confirm it's safe, secure, and functioning correctly — giving you confidence that the problem won't return.
      </p>
    </ServicePageLayout>
  )
}
