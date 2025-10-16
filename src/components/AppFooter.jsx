import { Link } from "react-router-dom"

export default function AppFooter() {

    return (
        <footer className="bg-black text-white">
            <div container-fluid>
                <div className="row">

                    <div col-12 col-sm-6 col-md-4>
                        <h3>Quick links</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/ChiSiamo">Chi Siamo</Link></li>
                            <li><Link to="/Prodotti">Prodotti</Link></li>
                        </ul>
                    </div>
                    <div col-12 col-sm-6 col-md-4>
                        <h3>Cookies</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/ChiSiamo">Chi Siamo</Link></li>
                            <li><Link to="/Prodotti">Prodotti</Link></li>
                        </ul>
                    </div>
                    <div col-12 col-sm-6 col-md-4>
                        <h3>Policy</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/ChiSiamo">Chi Siamo</Link></li>
                            <li><Link to="/Prodotti">Prodotti</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}