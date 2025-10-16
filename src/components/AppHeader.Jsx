import { NavLink } from "react-router-dom"

const menu = [
    {
        id: 1,
        link: "/",
        text: "Home"
    },
    {
        id: 2,
        link: "/ChiSiamo",
        text: "Chi Siamo"
    },
    {
        id: 3,
        link: "/Prodotti",
        text: "Prodotti"
    }
]

export default function AppHeader() {

    return (
        <header>
            Logo
            <nav className="nav justify-content-center  ">
                {menu.map(item => <NavLink className={"nav-link"} key={item.id} to={item.link}>{item.text}</NavLink>)}

            </nav>



        </header>
    )

}
