// components/About.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className='about-page'>
            <div className="about-page-content">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="about-page-cta">
                    <h3>Your destination is waiting.Your van is ready.</h3>
                    <Link  to="/vans">Explore our vans</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
