import {Link, usePage} from "@inertiajs/react";

export default function Navbar() {

    const { auth } = usePage().props

    if (auth.user) {
        return <ul id={"navbar"} className="header-content nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href={'/'} className="nav-link px-2" style={{color: "yellow"}}>Homepage</Link></li>
            <li><Link href={'/dashboard'} className="nav-link px-2" style={{color: "yellow"}}>Dashboard</Link></li>
        </ul>
    }

    return <ul id={"navbar"} className="header-content nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link href={'/'} className="nav-link px-2" style={{color: "yellow"}}>Homepage</Link></li>
    </ul>
}
