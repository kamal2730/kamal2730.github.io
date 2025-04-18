import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import DocumentHead from '../DocumentHead'

export default function MainLayout() {
  return (
    <>
      <DocumentHead />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
} 