import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "../../node_modules/react-router-dom/dist/index";



const VendorLayout: React.FC = () => {
    return (
        <div className="vendor-layout">
            <nav className="vendor-layout-nav">
                <NavLink
                    to="."
                    // end={true}
                >Dashboard</NavLink>
                <NavLink
                    to="income"
                >Income</NavLink>
                <NavLink
                    to="vans"
                >Vans</NavLink>
                <NavLink
                    to="reviews"
                >Reviews</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}

export default VendorLayout;