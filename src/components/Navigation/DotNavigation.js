import useSelect from '../../hooks/useSelect';

import './DotNavigation.css';

const DotNavigation = (props) => {

    const { isSelected, selectItemHandler } = useSelect(props.getSelectedItem);

    return (
        <div className="flex dot-indicators">
            <button data-selected={isSelected('0')} id="0" onClick={selectItemHandler}><span className="sr-only">Commander</span></button>
            <button data-selected={isSelected('1')} id="1" onClick={selectItemHandler}><span className="sr-only">Mission Specialist</span></button>
            <button data-selected={isSelected('2')} id="2" onClick={selectItemHandler}><span className="sr-only">Pilot</span></button>
            <button data-selected={isSelected('3')} id="3" onClick={selectItemHandler}><span className="sr-only">Flight Engineer</span></button>
        </div>
    );
}

export default DotNavigation;