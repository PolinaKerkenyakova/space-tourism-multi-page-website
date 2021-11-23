import Header from "../Header/Header";
import TabNavigation from "../Navigation/TabNavigation";

import './Destinations.css';

const Destinations = () => {
    return (
        <div className="destinations">
            <a class="skip-to-content" href="#main">Skip to content</a>
            <Header />
            <main id="main" className="grid-container grid-container--destinations">
                <div>
                    <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
                    <div>
                        <img src="/assets/destination/image-moon.png" alt="" />
                    </div>
                </div>
                <TabNavigation />
                <article>
                    <h2 className="ff-serif uppercase fs-800">Moon</h2>
                    <p>
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help
                        regain perspective and come back refreshed. While you’re there, take in some history
                        by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>
                    <div className="flex">
                        <div>
                            <h3 className="ff-sans-cond uppercase letter-spacing-3 text-light fs-200">Avg. distance</h3>
                            <p className="ff-serif fs-500 uppercase">384,400 km</p>
                        </div>
                        <div>
                            <h3 className="ff-sans-cond uppercase letter-spacing-3 text-light fs-200">Est. travel time</h3>
                            <p className="ff-serif fs-500 uppercase">3 days</p>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Destinations;