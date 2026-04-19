import ServicePageLayout from '../../components/ServicePageLayout'

export default function LightingFailure() {
  return (
    <ServicePageLayout
      metaTitle="Lighting Repair Electrician Chadstone | Same Day Fix"
      metaDescription="Lights not working? Our Chadstone electricians fix lighting failures same day. Indoor, outdoor & commercial."
      heroHeading="Lights Not Working? We'll Get Them Back On"
      causesHeading="Why Lighting Fails"
      causes={[
        'Faulty light fittings or switches that have worn out or overheated.',
        'Damaged or loose wiring inside walls or ceilings interrupting the circuit.',
        'Overloaded dimmers or incompatible LED globes causing flicker or failure.',
        'Blown transformers or faulty ballasts in downlights or fluorescent systems.',
        'Moisture ingress affecting outdoor or bathroom light fittings.',
        'Switchboard or circuit breaker faults preventing current from reaching your lights.',
      ]}
      fixSteps={[
        'Test and isolate the faulty circuit or light point.',
        'Inspect fittings, switches, and wiring for damage, corrosion, or overheating.',
        'Repair or replace faulty transformers, dimmers, or light fittings.',
        'Upgrade old halogen systems to energy-efficient LED lighting if needed.',
        'Ensure all lighting circuits meet current electrical safety standards.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Fault Finding', path: '/services/fault-finding', description: 'Advanced diagnostics to locate hidden electrical faults.' },
        { label: 'After Hours', path: '/services/after-hours', description: 'Available nights, weekends and public holidays.' },
      ]}
    >
      <p className="text-slate-600 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        If lights are dimming, buzzing, or flickering unpredictably, it's best to have a licensed electrician inspect them — these signs can indicate deeper electrical issues. Once repairs are complete, we test every light point to confirm safe operation and consistent illumination across your property.
      </p>
    </ServicePageLayout>
  )
}
