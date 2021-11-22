import { Link } from 'react-router-dom';

import './PrimaryNavigation.css';

const PrimaryNavigation = () => {
    return (
        <nav>
            <ul className="primary-navigation underline-indicators flex">
                <li className="active"><Link to="/" className="uppercase letter-spacing-2 text-white"><span>00</span>Home</Link></li>
                <li><Link to="/destinations" className="uppercase text-white letter-spacing-2"><span>01</span>Destinations</Link></li>
                <li><Link to="/crew" className="uppercase text-white letter-spacing-2"><span>02</span>Crew</Link></li>
                <li><Link to="/technology" className="uppercase text-white letter-spacing-2"><span>03</span>Technology</Link></li>
            </ul>
        </nav>
    )    
}

export default PrimaryNavigation;