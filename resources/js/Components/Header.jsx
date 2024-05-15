import LoginBar from "@/Components/LoginBar.jsx";
import NavBar from "@/Components/NavBar.jsx";
import {Link} from "@inertiajs/react";

export default function Header() {
    return <div className={"fixed-top"}>
        <header className="border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className={'header-content'}>
                        <Link className="nav-link px-2" style={{color: "yellow"}} href={"/"}><h1>Assignment URL shortener</h1></Link>
                    </div>
                    <NavBar></NavBar>
                    <LoginBar></LoginBar>
                </div>
            </div>
        </header>
    </div>
}
