import ServicePageLayout from '../../components/ServicePageLayout'

export default function FaultFinding() {
  return (
    <ServicePageLayout
      metaTitle="Electrical Fault Finding Chadstone | Fast Diagnosis"
      metaDescription="Electrical fault? Our Chadstone electricians use advanced diagnostics to find and fix the problem fast. 24/7."
      heroHeading="Hidden Faults? We'll Find and Fix Them Fast."
      causesHeading="Why Electrical Faults Happen"
      causes={[
        'Damaged or deteriorating wiring behind walls.',
        'Loose terminals or faulty connections.',
        'Water or moisture affecting outlets or fixtures.',
        'Overloaded circuits or unsafe DIY work.',
        'Aged electrical components no longer up to code.',
      ]}
      fixSteps={[
        'Test and isolate affected circuits to locate the source of the fault.',
        'Inspect wiring, outlets, and fixtures for signs of damage or wear.',
        'Repair or replace damaged cables, breakers, or connectors.',
        'Verify the entire system operates safely before completion.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Switchboard Repair', path: '/services/switchboard-repair', description: 'Safe upgrades and repairs to restore reliable power distribution.' },
        { label: 'Sparking Outlet', path: '/services/sparking-outlet', description: 'Emergency repair for dangerous sparking power points.' },
      ]}
    >
      <p className="text-slate-600 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        These faults can cause frequent power loss, overheating, or even electrical hazards if left unchecked. We use advanced testing equipment and years of experience to locate and resolve faults precisely — without unnecessary damage to your walls or fittings.
      </p>
    </ServicePageLayout>
  )
}
