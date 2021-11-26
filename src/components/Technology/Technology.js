import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import NumberNavigation from '../Navigation/NumberNavigation';

import getData from '../../services/fetchServices';

import './Technology.css';

const Technology = () => {

    const [techInfo, setTechInfo] = useState({});
    const [selectedTech, setSelectedTech] = useState();

    const getSelectedTechHandler = (techId) => {
        setSelectedTech(techId);
    }

    useEffect(() => {
        const fetchData = async () => {
            const techData = await getData('technology', selectedTech);
            setTechInfo(techData);
        }

        fetchData();
    }, [selectedTech]);

    return (
        <div className="technology">
            <Link to="#main" className="skip-to-content">Skip to content</Link>
            <Header />
            <main id="main" className=" grid-container grid-container--technology flow">
                <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

                <NumberNavigation getSelectedItem={getSelectedTechHandler} />
                <article className="terminology-info">
                    <div className="flow flow-space--small ">
                        <h2 className="ff-sans-cond letter-spacing-3 fs-200 text-light uppercase">The terminology...</h2>
                        <p className="ff-serif fs-700 uppercase">{techInfo.name}</p>
                        <p className="text-light">
                            {techInfo.description}
                        </p>
                    </div>
                </article>

                <picture>
                    <source media="(max-width: 720px)" srcSet={techInfo.landscapeImg} type="image/jpg" />
                    <source media="(min-width: 720px)" srcSet={techInfo.portraitImg} type="image/jpg" />
                    <img src="/assets/technology/image-launch-vehicle-portrait.jpg" alt={techInfo.name} />
                </picture>
            </main>
        </div>
    )
}

export default Technology;