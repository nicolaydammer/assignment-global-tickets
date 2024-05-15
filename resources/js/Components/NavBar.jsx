import {Link} from "@inertiajs/react";

export default function Navbar() {
    return <ul id={"navbar"} className="header-content nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link href={'/'} className="nav-link px-2" style={{color: "yellow"}}>Homepage</Link></li>
    </ul>
}
