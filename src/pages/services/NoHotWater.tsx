import ServicePageLayout from '../../components/ServicePageLayout'

export default function NoHotWater() {
  return (
    <ServicePageLayout
      metaTitle="No Hot Water Electrician Chadstone | Fast Fix"
      metaDescription="No hot water from your electric system? Our Chadstone electricians diagnose and repair fast. 24/7 service."
      heroHeading="No Hot Water? We'll Get It Flowing Again Fast."
      causesHeading="Why Hot Water Stops Working"
      causes={[
        'Blown fuses or tripped safety switches cutting power to the system.',
        'Faulty heating elements or thermostats.',
        'Damaged wiring between the switchboard and hot water unit.',
        'Water leaks affecting electrical connections.',
        'Aged systems no longer compatible with modern electrical setups.',
      ]}
      fixSteps={[
        'Check power supply, switchboard, and fuses connected to the heater.',
        'Test and replace faulty thermostats or heating elements.',
        'Repair or replace damaged cabling or connections.',
        'Confirm the system operates safely and efficiently before completion.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Switchboard Repair', path: '/services/switchboard-repair', description: 'Safe upgrades and repairs to restore reliable power distribution.' },
        { label: 'Fault Finding', path: '/services/fault-finding', description: 'Advanced diagnostics to locate hidden electrical faults.' },
      ]}
    />
  )
}
