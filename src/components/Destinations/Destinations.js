import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import getData from '../../services/fetchServices';

import Header from '../Header/Header';
import TabNavigation from '../Navigation/TabNavigation';

import './Destinations.css';

const Destinations = () => {

    const [destination, setDestination] = useState({});
    const [selectedPlanet, setSelectedPlanet] = useState();

    const getSelectedPlanetHandler = (planetId) => {
        setSelectedPlanet(planetId);
    }

    useEffect(() => {
        const fetchData = async () => {
            const destinationData = await getData('destinations', selectedPlanet);
            setDestination(destinationData);
        }

        fetchData();
    }, [selectedPlanet]);

    return (
        <div className="destinations">
            <Link to="#main" className="skip-to-content">Skip to content</Link>
            <Header />
            <main id="main" className="grid-container grid-container--destinations flow">

                <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>

                <picture>
                    {/* <source srcSet={destination.images.webp || {}} type="image/webp" /> */}
                    <img src={destination.image} alt={destination.name} />
                </picture>

                <TabNavigation getSelectedPlanet={getSelectedPlanetHandler} />

                <article className="destination-info">
                    <h2 className="ff-serif uppercase fs-800">{destination.name}</h2>
                    <p className="text-light">{destination.description}</p>
                    
                    <div className="destination-meta flex">
                        <div>
                            <h3 className="ff-sans-cond uppercase letter-spacing-3 text-light fs-200">Avg. distance</h3>
                            <p className="ff-serif uppercase">{destination.distance}</p>
                        </div>
                        <div>
                            <h3 className="ff-sans-cond uppercase letter-spacing-3 text-light fs-200">Est. travel time</h3>
                            <p className="ff-serif uppercase">{destination.travel}</p>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Destinations;