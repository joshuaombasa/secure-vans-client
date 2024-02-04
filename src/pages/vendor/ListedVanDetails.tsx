import React from "react";


const ListedVansDetails: React.FC = () => {
    return (
        <div className="listed-van-details">
            <div className="top-area">
            <img src={`https://assets.scrimba.com/advanced-react/react-router/green-wonder.png`} alt="" />
            <div className="l">
                <span>Simple</span>
                <h3>Modest Explorer</h3>
                <h4>$60/day</h4>
            </div>
            </div>
            <div className="bottom-area"></div>
        </div>
    )
}

export default ListedVansDetails