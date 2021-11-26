import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import NumberNavigation from '../Navigation/NumberNavigation';

import useInfo from '../../hooks/useInfo';

import './Technology.css';

const Technology = () => {

    const {info, getSelectedItemHandler} = useInfo('technology');

    return (
        <div className="technology">
            <Link to="#main" className="skip-to-content">Skip to content</Link>
            <Header />
            <main id="main" className=" grid-container grid-container--technology flow">
                <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

                <NumberNavigation getSelectedItem={getSelectedItemHandler} />
                <article className="terminology-info">
                    <div className="flow flow-space--small ">
                        <h2 className="ff-sans-cond letter-spacing-3 fs-200 text-light uppercase">The terminology...</h2>
                        <p className="ff-serif fs-700 uppercase">{info.name}</p>
                        <p className="text-light">
                            {info.description}
                        </p>
                    </div>
                </article>

                <picture>
                    <source media="(max-width: 720px)" srcSet={info.landscapeImg} type="image/jpg" />
                    <source media="(min-width: 720px)" srcSet={info.portraitImg} type="image/jpg" />
                    <img src="/assets/technology/image-launch-vehicle-portrait.jpg" alt={info.name} />
                </picture>
            </main>
        </div>
    )
}

export default Technology;