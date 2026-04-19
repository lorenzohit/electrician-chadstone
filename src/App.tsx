import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import PowerOutage from './pages/services/PowerOutage'
import SafetySwitchTripping from './pages/services/SafetySwitchTripping'
import SwitchboardRepair from './pages/services/SwitchboardRepair'
import NoHotWater from './pages/services/NoHotWater'
import FaultFinding from './pages/services/FaultFinding'
import StormDamage from './pages/services/StormDamage'
import SmokeAlarmFault from './pages/services/SmokeAlarmFault'
import AfterHours from './pages/services/AfterHours'
import LightingFailure from './pages/services/LightingFailure'
import SparkingOutlet from './pages/services/SparkingOutlet'
import CeilingFanFault from './pages/services/CeilingFanFault'
import FAQs from './pages/FAQs'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Book from './pages/Book'
import Reviews from './pages/Reviews'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/power-outage" element={<PowerOutage />} />
          <Route path="services/safety-switch-tripping" element={<SafetySwitchTripping />} />
          <Route path="services/switchboard-repair" element={<SwitchboardRepair />} />
          <Route path="services/no-hot-water" element={<NoHotWater />} />
          <Route path="services/fault-finding" element={<FaultFinding />} />
          <Route path="services/storm-damage" element={<StormDamage />} />
          <Route path="services/smoke-alarm-fault" element={<SmokeAlarmFault />} />
          <Route path="services/after-hours" element={<AfterHours />} />
          <Route path="services/lighting-failure" element={<LightingFailure />} />
          <Route path="services/sparking-outlet" element={<SparkingOutlet />} />
          <Route path="services/ceiling-fan-fault" element={<CeilingFanFault />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book" element={<Book />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
