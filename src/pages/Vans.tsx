import React from "react";
import VanCard from "../components/VanCard";


const Vans: React.FC = () : JSX.Element => {
    return (
        <div className="vans-page">
            <div className="home-page-content">
                <h1>Explore our van options</h1>
                <div className="vans-parent">
                    <VanCard/>
                    <VanCard/>
                    <VanCard/>
                    <VanCard/>
                    <VanCard/>
                    <VanCard/>
                    <VanCard/>
                    <VanCard/>
                </div>
            </div>
        </div>
    )
}

export default Vans;