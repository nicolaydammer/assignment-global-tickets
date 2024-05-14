// import Header from "@/components/Header.jsx";
// import Footer from "@/components/Footer.jsx";

export default function Layout({children}) {
    return (
        <div>
            {/*<Header></Header>*/}
            <main>{children}</main>
            {/*<Footer></Footer>*/}
        </div>
    )
}
