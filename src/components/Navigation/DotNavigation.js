import { useState } from 'react';

import './DotNavigation.css';

const DotNavigation = (props) => {

    const [crewMember, setCrewMember] = useState('0')

    const selectCrewMemberHandler = (e) => {
        setCrewMember(e.target.id);
        props.getSelectedMember(e.target.id)
    }

    const isSelected = (memberId) => crewMember === memberId ? 'true' : 'false';

    return (
        <div className="flex dot-indicators">
            <button aria-selected={isSelected('0')} id="0" onClick={selectCrewMemberHandler}><span className="sr-only">Commander</span></button>
            <button aria-selected={isSelected('1')} id="1" onClick={selectCrewMemberHandler}><span className="sr-only">Mission Specialist</span></button>
            <button aria-selected={isSelected('2')} id="2" onClick={selectCrewMemberHandler}><span className="sr-only">Pilot</span></button>
            <button aria-selected={isSelected('3')} id="3" onClick={selectCrewMemberHandler}><span className="sr-only">Flight Engineer</span></button>
        </div>
    )
}

export default DotNavigation;