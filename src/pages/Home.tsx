import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () : JSX.Element => {
    return (
        <div className='home-page'>
            <div className="home-page-content">
                <h2>You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans">Find your van</Link>
            </div>
        </div>
    );
};

export default Home;