import ServicePageLayout from '../../components/ServicePageLayout'

export default function PowerOutage() {
  return (
    <ServicePageLayout
      metaTitle="Power Outage Electrician Chadstone | Fast Restoration"
      metaDescription="Power out in Chadstone? Our emergency electricians restore power fast. 24/7 service, 60-min response. Call now!"
      heroHeading="No Power? We'll Restore It Fast."
      causesHeading="Why Power Outages Happen"
      causes={[
        'Overloaded circuits or faulty wiring that cause the main switch to trip.',
        'Storm damage leading to blown fuses or fallen power lines.',
        'Defective appliances or equipment short-circuiting your system.',
        'Aging switchboards or loose connections that interrupt supply.',
        'Grid supply issues beyond your property that need inspection.',
      ]}
      fixSteps={[
        'Test and reset your switchboard or main breaker.',
        'Repair or replace faulty wiring, fuses, or safety switches.',
        'Check appliances and circuits for overload or short-circuits.',
        'Restore safe, consistent power and ensure all systems are compliant.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Switchboard Repair', path: '/services/switchboard-repair', description: 'Safe upgrades and repairs to restore reliable power distribution.' },
        { label: 'No Hot Water', path: '/services/no-hot-water', description: 'Electrical inspection and repair for hot water systems.' },
      ]}
    />
  )
}
