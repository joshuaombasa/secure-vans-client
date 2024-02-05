import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () : JSX.Element => {
    return (
        <div className="not-found-page">
            <div className="not-found-content">
                <h1>Sorry, the page you were looking for was not found.</h1>
                <Link to="/">Return to home</Link>
            </div>
        </div>
    )
}


export default NotFound