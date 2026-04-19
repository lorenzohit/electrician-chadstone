import ServicePageLayout from '../../components/ServicePageLayout'

export default function SwitchboardRepair() {
  return (
    <ServicePageLayout
      metaTitle="Switchboard Repair Chadstone | Licensed Electrician"
      metaDescription="Need switchboard repair or upgrade in Chadstone? Licensed electrician, fast service. Free safety check included."
      heroHeading="Keep Your Power Safe and Reliable"
      causesHeading="Why Switchboards Fail"
      causes={[
        'Overloaded circuits from modern appliance demand.',
        'Loose or corroded wiring connections.',
        'Outdated ceramic fuses or unsafe panels.',
        'Moisture or dust build-up causing short circuits.',
        'Expansion or renovations exceeding capacity.',
      ]}
      fixSteps={[
        'Conduct a detailed inspection of your main panel and circuits.',
        'Replace old fuses with modern safety switches and circuit breakers.',
        'Tighten connections and repair damaged wiring.',
        'Upgrade to a compliant switchboard that supports today\'s power needs.',
      ]}
      relatedServices={[
        { label: 'Safety Switch Tripping', path: '/services/safety-switch-tripping', description: 'Quick diagnosis and repair for frequently tripping switches.' },
        { label: 'Storm Damage', path: '/services/storm-damage', description: 'Storms can create a variety of electrical hazards, often unnoticed.' },
        { label: 'No Hot Water', path: '/services/no-hot-water', description: 'Electrical inspection and repair for hot water systems.' },
      ]}
    >
      <p className="text-slate-600 bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <strong className="text-slate-900">Signs your switchboard needs attention:</strong> If your switchboard is buzzing, warm to touch, or frequently tripping, it's time for a professional inspection. Don't wait — these are warning signs of a potential electrical fire hazard.
      </p>
    </ServicePageLayout>
  )
}
