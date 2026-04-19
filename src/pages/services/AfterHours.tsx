import ServicePageLayout from '../../components/ServicePageLayout'

export default function AfterHours() {
  return (
    <ServicePageLayout
      metaTitle="After Hours Electrician Chadstone | Available Now"
      metaDescription="Need an electrician after hours in Chadstone? Available nights, weekends & public holidays. Fast response."
      heroHeading="Electrical Emergency? We're Ready 24/7"
      causesHeading="When You Need an After-Hours Electrician"
      causes={[
        'Total power outages affecting part or all of your property.',
        'Burning smells or smoke coming from outlets, switchboards, or lights.',
        'Safety switch tripping repeatedly, leaving you without power.',
        'Sparking or buzzing outlets creating shock or fire risk.',
        'Storm-related damage causing exposed wiring or downed connections.',
        'Hot water or essential lighting failure during the night.',
      ]}
      fixSteps={[
        'Assess the problem quickly to locate faults and hazards.',
        'Isolate the power source to prevent further damage or danger.',
        'Repair or replace critical components like wiring, breakers, or outlets.',
        'Provide temporary power or lighting if a full repair can\'t be done immediately.',
        'Test all repaired systems to confirm safety before restoring power.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Power Outage', path: '/services/power-outage', description: 'Fast power restoration after outages.' },
        { label: 'Sparking Outlet', path: '/services/sparking-outlet', description: 'Emergency repair for dangerous sparking power points.' },
      ]}
    >
      <p className="text-slate-600 bg-blue-50 border border-blue-200 rounded-xl p-5">
        If you're unsure whether it's an emergency, it's always safer to call — our team can guide you over the phone and dispatch an electrician immediately if needed. We arrive fully prepared with diagnostic tools, spare parts, and safety equipment to ensure your emergency is resolved on the first visit whenever possible.
      </p>
    </ServicePageLayout>
  )
}
