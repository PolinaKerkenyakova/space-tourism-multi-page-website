import './DotNavigation.css';

const DotNavigation = () => {
    return (
        <div className="flex dot-indicators">
            <button aria-selected="true"><span className="sr-only">Commander</span></button>
            <button aria-selected="false"><span className="sr-only">Mission Specialist</span></button>
            <button aria-selected="false"><span className="sr-only">Pilot</span></button>
            <button aria-selected="false"><span className="sr-only">Flight Engineer</span></button>
        </div>
    )
}

export default DotNavigation;