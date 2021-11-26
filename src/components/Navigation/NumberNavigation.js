import useSelect from '../../hooks/useSelect';

import './NumberNavigation.css';

const NumberNavigation = (props) => {

    const { isSelected, selectItemHandler } = useSelect(props.getSelectedItem);

    return (
        <div className="number-indicators flex">
            <button aria-selected={isSelected('0')} id="0" onClick={selectItemHandler} className="ff-serif fs-600 text-white bg-dark">1</button>
            <button aria-selected={isSelected('1')} id="1" onClick={selectItemHandler} className="ff-serif fs-600 text-white bg-dark">2</button>
            <button aria-selected={isSelected('2')} id="2" onClick={selectItemHandler} className="ff-serif fs-600 text-white bg-dark">3</button>
        </div>
    );
}

export default NumberNavigation;