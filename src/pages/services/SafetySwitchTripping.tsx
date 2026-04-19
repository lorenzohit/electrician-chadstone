import ServicePageLayout from '../../components/ServicePageLayout'

export default function SafetySwitchTripping() {
  return (
    <ServicePageLayout
      metaTitle="Safety Switch Keeps Tripping? Emergency Fix Chadstone"
      metaDescription="Safety switch keeps tripping? Our Chadstone electricians diagnose and fix the issue fast. 24/7 emergency service."
      heroHeading="Power Cutting Out? Your Safety Switch Might Be the Cause."
      causesHeading="Why Safety Switches Trip"
      causes={[
        'Faulty appliances leaking current or short-circuiting.',
        'Overloaded circuits or damaged wiring.',
        'Moisture or water getting into outlets or switchboards.',
        'Aged or worn-out safety switches losing sensitivity.',
        'Multiple devices drawing excess load on one line.',
      ]}
      fixSteps={[
        'Testing individual appliances and circuits for leakage or faults.',
        'Inspecting wiring, outlets, and switchboards for damage.',
        'Replacing or upgrading faulty safety switches or breakers.',
        'Ensuring your system meets Australian electrical safety standards.',
      ]}
      relatedServices={[
        { label: 'Power Outage', path: '/services/power-outage', description: 'Overloaded circuits or faulty wiring that cause the main switch to trip.' },
        { label: 'Switchboard Repair', path: '/services/switchboard-repair', description: 'Safe upgrades and repairs to restore reliable power distribution.' },
        { label: 'Fault Finding', path: '/services/fault-finding', description: 'Advanced diagnostics to locate hidden electrical faults.' },
      ]}
    />
  )
}
