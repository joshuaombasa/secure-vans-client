import React from "react";
import { Outlet } from "../../node_modules/react-router-dom/dist/index";
import Header from "./Header";


const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default Layout;