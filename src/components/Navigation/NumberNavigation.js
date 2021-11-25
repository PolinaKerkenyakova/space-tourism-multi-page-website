import { useState } from 'react';

import './NumberNavigation.css';

const NumberNavigation = (props) => {
    const [selectedTech, setSelectedTech] = useState('0');

    const selectTechHandler = (e) => {
        props.getSelectedTech(e.target.id);
        setSelectedTech(e.target.id);
    }

    const isSelected = (techId) => selectedTech === techId ? 'true' : 'false';

    return (
        <div className="number-indicators flex">
            <button aria-selected={isSelected('0')} id="0" onClick={selectTechHandler} className="ff-serif fs-600 text-white bg-dark">1</button>
            <button aria-selected={isSelected('1')} id="1" onClick={selectTechHandler} className="ff-serif fs-600 text-white bg-dark">2</button>
            <button aria-selected={isSelected('2')} id="2" onClick={selectTechHandler} className="ff-serif fs-600 text-white bg-dark">3</button>
        </div>
    )
}

export default NumberNavigation;