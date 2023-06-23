import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.css"
const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">

                <Link to="/">
                    <div className="nav-btn">
                        What am I ?
                    </div>
                </Link>

                <Link to="/who">
                    <div className="nav-btn">
                        Who am I ?
                    </div>
                </Link>

                <Link to="/why">
                    <div className="nav-btn">
                        Why am I ?
                    </div>
                </Link>

                <Link to="/where">
                    <div className="nav-btn">
                        Where am I ?
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;