import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <Link to="/"  className="logo">VANLIFE</Link>
            <div className="nav-links">
                <NavLink 
                    to="about"
                >About</NavLink>
                <NavLink 
                    to="vans"
                >Vans</NavLink>
                <NavLink 
                    to="vendors"
                >Vendor</NavLink>
                <NavLink 
                    to="login"
                >Login</NavLink>
            </div>
        </div>
    )
}


export default Header