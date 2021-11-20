import './NumberNavigation.css';

const NumberNavigation = () => {
    return (
        <div className="number-indicators flex">
            <button aria-selected="true" className="ff-serif fs-600 text-white bg-dark">1</button>
            <button aria-selected="false" className="ff-serif fs-600 text-white bg-dark">2</button>
            <button aria-selected="false" className="ff-serif fs-600 text-white bg-dark">3</button>
        </div>
    )
}

export default NumberNavigation;