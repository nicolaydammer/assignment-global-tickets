import {Link, router, usePage} from "@inertiajs/react";

export default function LoginBar() {

    const { auth } = usePage().props

    function logout(e) {
        e.preventDefault()
        router.post('/logout')
    }

    if (auth.user) {
        return <div className="dropdown header-content">
            <a className="btn dropdown-toggle iconColorYellow" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i>
            </a>

            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="#" onClick={logout}>Logout</Link></li>
            </ul>
        </div>
    }

    return <div className="dropdown header-content">
        <a className="btn dropdown-toggle iconColorYellow" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <i  className="fa-solid fa-user"></i>
        </a>

        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/login">Login</Link></li>
            <li><Link className="dropdown-item" href="/register">Create account</Link></li>
        </ul>
    </div>
}
