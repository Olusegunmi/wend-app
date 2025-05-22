import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
       
        <ul className="navigation">
            <li className="">
                <Link to="/">Home</Link>
                
            </li>
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/rsvp">RSVP</Link></li>
        </ul>

    );
}
export default Navigation;
