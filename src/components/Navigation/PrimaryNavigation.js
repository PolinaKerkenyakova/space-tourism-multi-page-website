import { useState } from 'react';
import { Link } from 'react-router-dom';
import openMenu from './assets/icon-hamburger.svg';
import closeMenu from './assets/icon-close.svg';

import './PrimaryNavigation.css';

const PrimaryNavigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const showMenuHandler = (e) => {
        setIsMenuVisible(!isMenuVisible);
    }

    const ShowMenu = (
        <>
            <button onClick={showMenuHandler} className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="true">Menu</span><img src={closeMenu} alt="" /></button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                    <li><Link to="/" className="ff-sans-cond uppercase letter-spacing-2 text-white"><span>00</span>Home</Link></li>
                    <li><Link to="/destinations" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>01</span>Destinations</Link></li>
                    <li><Link to="/crew" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>02</span>Crew</Link></li>
                    <li><Link to="/technology" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>03</span>Technology</Link></li>
                </ul>
            </nav>
        </>
    )

    const HideMenu = (
        <>
            <button onClick={showMenuHandler} className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span><img src={openMenu} alt="" /></button>
            <nav>
            </nav>
        </>
    )

    return (
        isMenuVisible ? ShowMenu : HideMenu
    );
}

export default PrimaryNavigation;