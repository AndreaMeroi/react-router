import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

export default function Defaultlayout() {

    return (
        <div>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </div>

    )

}