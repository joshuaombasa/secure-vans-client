import React from "react";
import ListedVansItem from "../../components/ListedVansItem";

const ListedVans: React.FC = () : JSX.Element => {
    return (
        <div className="listed-vans-page">
            <h1>Your listed vans</h1>
            <div className="listed-vans-parent">
                <ListedVansItem/>
                <ListedVansItem/>
                <ListedVansItem/>
                <ListedVansItem/>
            </div>
        </div>
    )
}
export default ListedVans