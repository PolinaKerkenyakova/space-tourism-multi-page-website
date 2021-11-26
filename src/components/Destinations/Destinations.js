import { Link } from 'react-router-dom';

import useInfo from '../../hooks/useInfo';

import Header from '../Header/Header';
import TabNavigation from '../Navigation/TabNavigation';

import './Destinations.css';

const Destinations = () => {

    const {info, getSelectedItemHandler} = useInfo('destinations')

    return (
        <div className="destinations">
            <Link to="#main" className="skip-to-content">Skip to content</Link>
            <Header />
            <main id="main" className="grid-container grid-container--destinations flow">

                <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

                <picture>
                    {/* <source srcSet={destination.images.webp || {}} type="image/webp" /> */}
                    <img src={info.image} alt={info.name} />
                </picture>

                <TabNavigation getSelectedItem={getSelectedItemHandler} />

                <article className="destination-info">
                    <h2 className="ff-serif uppercase fs-800">{info.name}</h2>
                    <p className="text-light">{info.description}</p>
                    
                    <div className="destination-meta flex">
                        <div>
                            <h3 className="ff-sans-cond uppercase letter-spacing-3 text-light fs-200">Avg. distance</h3>
                            <p className="ff-serif uppercase">{info.distance}</p>
                        </div>
                        <div>
                            <h3 className="ff-sans-cond uppercase letter-spacing-3 text-light fs-200">Est. travel time</h3>
                            <p className="ff-serif uppercase">{info.travel}</p>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Destinations;