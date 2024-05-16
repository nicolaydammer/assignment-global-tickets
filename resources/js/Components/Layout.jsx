import Header from "@/Components/Header.jsx";
import Footer from "@/Components/Footer.jsx";


export default function Layout({children}) {
    return (
        <div>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}
