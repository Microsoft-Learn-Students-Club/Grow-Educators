import { Outlet } from 'react-router-dom'
import Navbar from './components/Headers/Header'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet className="pt-[64px] min-h-[calc(100vh-340px)]" />
        </>
    )
}

export default Layout