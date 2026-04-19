import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import EmergencyBar from './EmergencyBar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <EmergencyBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
