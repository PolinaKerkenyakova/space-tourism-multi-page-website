import './TabNavigation.css';

const TabNavigation = () => {
    return (
        <div className="flex tab-navigation underline-indicators">
            <button aria-selected="true" className="text-white uppercase letter-spacing-3 ff-sans-cond">Moon</button>
            <button aria-selected="false" className="text-white uppercase letter-spacing-3 ff-sans-cond">Mars</button>
            <button aria-selected="false" className="text-white uppercase letter-spacing-3 ff-sans-cond">Europa</button>
            <button aria-selected="false" className="text-white uppercase letter-spacing-3 ff-sans-cond">Titan</button>
        </div>
    )
}

export default TabNavigation;