import ServicePageLayout from '../../components/ServicePageLayout'

export default function StormDamage() {
  return (
    <ServicePageLayout
      metaTitle="Storm Damage Electrician Chadstone | Emergency Response"
      metaDescription="Storm damage to your electrical system? Emergency electrician in Chadstone for power restoration & safety."
      heroHeading="Electrical Damage After a Storm? We'll Fix It Fast."
      causesHeading="Why Storm Damage Happens"
      causes={[
        'Fallen trees or branches damaging overhead wiring.',
        'Water entering switchboards, outlets, or conduits.',
        'Power surges causing blown fuses or damaged appliances.',
        'Strong winds loosening external connections or fixtures.',
        'Lightning strikes affecting sensitive electrical components.',
      ]}
      fixSteps={[
        'Inspect and test all affected circuits, outlets, and switchboards.',
        'Repair or replace damaged wiring, breakers, and fixtures.',
        'Secure and weatherproof external connections where needed.',
        'Test the system to ensure safe, reliable operation after repairs.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Switchboard Repair', path: '/services/switchboard-repair', description: 'Safe upgrades and repairs to restore reliable power distribution.' },
        { label: 'Power Outage', path: '/services/power-outage', description: 'Fast power restoration after outages.' },
      ]}
    >
      <p className="text-slate-600 bg-red-50 border border-red-200 rounded-xl p-5">
        <strong className="text-red-700">Safety warning:</strong> Ignoring storm damage can lead to dangerous situations, including electrocution or fire risk. If you suspect storm damage to your electrical system, do not attempt DIY repairs — call our emergency line immediately.
      </p>
    </ServicePageLayout>
  )
}
