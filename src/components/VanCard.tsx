import React from "react";
import { Link } from "react-router-dom";


const VanCard: React.FC = () => {
    return (
        <Link to="1" className="van-card">
            <img src={`https://assets.scrimba.com/advanced-react/react-router/green-wonder.png`} alt="" />
            <div className="info">
                <h3>Modest Explorer</h3>
                <h3>$ 60 /day</h3>
            </div>
            <span className="van-type">Rugged</span>
        </Link>
    )
}


export default VanCard;