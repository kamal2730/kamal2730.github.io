import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from "react-helmet"

export default function MainLayout() {
  return (
    <>
      <Helmet>
        <title>TellATale</title>
        <meta name="description" content="TellATale - Share your stories with the world" />
      </Helmet>
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