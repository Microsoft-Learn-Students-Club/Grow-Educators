import { Outlet } from 'react-router-dom'
import Navbar from './components/Headers/Header'

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet className="pt-[64px] min-h-[calc(100vh-340px)]" />
        </>
    )
}

export default Layout