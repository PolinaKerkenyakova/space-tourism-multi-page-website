import './DotNavigation.css';

const DotNavigation = () => {
    return (
        <div className="flex dot-indicators">
            <button aria-selected="true"><span className="sr-only">Slide Title</span></button>
            <button aria-selected="false"><span className="sr-only">Slide Title</span></button>
            <button aria-selected="false"><span className="sr-only">Slide Title</span></button>
        </div>
    )
}

export default DotNavigation;