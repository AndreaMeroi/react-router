import { Outlet } from "react-router-dom";
import Header from "./AppHeader.Jsx";
import Footer from "./AppFooter";


export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}