import ServicePageLayout from '../../components/ServicePageLayout'

export default function CeilingFanFault() {
  return (
    <ServicePageLayout
      metaTitle="Ceiling Fan Repair Electrician Chadstone | Fast Fix"
      metaDescription="Ceiling fan not working, making noise, or wobbling? Our Chadstone electricians fix all ceiling fan faults."
      heroHeading="Ceiling Fan Not Working? We'll Fix It Safely"
      causesHeading="Why Ceiling Fans Fail"
      causes={[
        'Loose or damaged wiring within the ceiling or switch.',
        'Worn-out motor components that cause humming, jerking, or total failure.',
        'Faulty wall switches, remotes, or speed controls.',
        'Poor or unbalanced installation leading to wobbling or noise.',
        'Dust and debris buildup reducing motor performance or airflow.',
        'Overheating or short-circuits due to old, unsafe electrical connections.',
      ]}
      fixSteps={[
        'Inspect and test wiring, switches, and motor connections.',
        'Tighten or replace loose mounting brackets and blades to eliminate wobble.',
        'Repair or replace faulty capacitors, controllers, or remote receivers.',
        'Rewire or replace old ceiling fans that no longer meet safety standards.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Switchboard Repair', path: '/services/switchboard-repair', description: 'Safe upgrades and repairs to restore reliable power distribution.' },
        { label: 'Lighting Failure', path: '/services/lighting-failure', description: 'Same-day lighting repairs for any property.' },
      ]}
    >
      <p className="text-slate-600 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        If your ceiling fan hums but doesn't spin, or starts and stops suddenly, it's best to have it checked before it becomes a bigger issue. If a repair isn't possible, we can supply and install a new energy-efficient ceiling fan that matches your space and wiring setup.
      </p>
    </ServicePageLayout>
  )
}
