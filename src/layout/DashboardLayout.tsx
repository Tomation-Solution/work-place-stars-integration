import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

interface DashboardLayoutProps {
    children:ReactNode
}

const DashboardLayout = ({children}:DashboardLayoutProps) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default DashboardLayout