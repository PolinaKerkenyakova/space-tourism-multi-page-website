import { useState } from 'react';

import './TabNavigation.css';

const TabNavigation = (props) => {
    
    const [selectedPlanet, setSelectedPlanet] = useState('0');

    const selectPlanetHandler = (e) => {
        props.getSelectedPlanet(e.target.id);
        setSelectedPlanet(e.target.id);
    }

    const isSelected = (planetId) => selectedPlanet === planetId ? 'true' : 'false';

    return (
        <div className="flex tab-navigation underline-indicators">
            <button aria-selected={isSelected('0')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectPlanetHandler} id="0">Moon</button>
            <button aria-selected={isSelected('1')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectPlanetHandler} id="1">Mars</button>
            <button aria-selected={isSelected('2')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectPlanetHandler} id="2">Europa</button>
            <button aria-selected={isSelected('3')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectPlanetHandler} id="3">Titan</button>
        </div>
    )
}

export default TabNavigation;