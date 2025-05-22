import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from '../assets/images/logo.png';

const MobileMenu = () => {
    const [isActive, setIsActive] = useState({ status: false, key: "" });
    const [isSubActive, setSubIsActive] = useState({ status: false, key: "" });

    const handleClick = (key) => {
        setIsActive((prevState) =>
            prevState.key === key ? { status: false, key: "" } : { status: true, key }
        );
    };

    const handleSubClick = (key) => {
        setSubIsActive((prevState) =>
            prevState.key === key ? { status: false, key: "" } : { status: true, key }
        );
    };

    return (
        <ul className="">
            {/* Home Section */}
            <li className="">
                <Link to="/">Home</Link>
            </li>

            {/* Single Links */}
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li className="logo">
                <Link to="/"><img src={logo2} alt="Wendola" title="Wendola" /></Link>
            </li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/rsvp">RSVP</Link></li>
        </ul>
    );
};

export default MobileMenu;
