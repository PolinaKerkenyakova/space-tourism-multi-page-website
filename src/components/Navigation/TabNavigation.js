import useSelect from '../../hooks/useSelect';

import './TabNavigation.css';

const TabNavigation = (props) => {
    
    const { isSelected, selectItemHandler } = useSelect(props.getSelectedItem);

    return (
        <div className="flex tab-navigation underline-indicators">
            <button data-selected={isSelected('0')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectItemHandler} id="0">Moon</button>
            <button data-selected={isSelected('1')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectItemHandler} id="1">Mars</button>
            <button data-selected={isSelected('2')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectItemHandler} id="2">Europa</button>
            <button data-selected={isSelected('3')} className="text-white uppercase letter-spacing-3 ff-sans-cond" onClick={selectItemHandler} id="3">Titan</button>
        </div>
    );
}

export default TabNavigation;