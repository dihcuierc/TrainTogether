import {Outlet, Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
    <>
        <nav className="navbar navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet/>
    </>
    )
}

export default Navbar;