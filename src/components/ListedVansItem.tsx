import React from "react";
import { Link } from "react-router-dom";

const ListedVansItem: React.FC = () : JSX.Element => {
    return (
        <Link to="1" className="listed-vans-item">
            <img src={`https://assets.scrimba.com/advanced-react/react-router/green-wonder.png`} alt="" />
            <div className="item-info">
                <h3>Modest Explorer</h3>
                <h4>$60/day</h4>
            </div>
        </Link>
    )
}

export default ListedVansItem