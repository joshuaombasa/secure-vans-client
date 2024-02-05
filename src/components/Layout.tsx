import React from "react";
import { Outlet } from "../../node_modules/react-router-dom/dist/index";
import Footer from "./Footer";
import Header from "./Header";


const Layout: React.FC = () : JSX.Element => {
    return (
        <div className="layout">
            <Header />
            <div className="layout-content">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;