import React from "react";
import { Link } from "react-router-dom";


const VanDetails: React.FC = () => {
    return (
        <div className="van-details-page">
            <div className="van-details-content">
                <img src={`https://assets.scrimba.com/advanced-react/react-router/green-wonder.png`} alt="" />
                <span>Simple</span>
                <h3>Modest Explorer</h3>
                <h4>$60/day</h4>
                <p>The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
                <Link to="/" className="rent-van-link">Rent this van</Link>
            </div>
        </div>
    )
}

export default VanDetails;