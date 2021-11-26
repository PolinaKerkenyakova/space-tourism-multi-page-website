import { Link } from 'react-router-dom';

import useInfo from '../../hooks/useInfo';

import Header from '../Header/Header';
import DotNavigation from '../Navigation/DotNavigation';

import './Crew.css';

const Crew = () => {

    const {info, getSelectedItemHandler} = useInfo('crew');

    return (
        <div className="crew">
            <Link to="#main" className="skip-to-content">Skip to content</Link>
            <Header />
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

                <picture>
                    {/* <img src={`${info.images.webp || {}}`} alt={`${info.role}`} /> */}
                    <img src={(info.image)} alt={info.name}/>
                </picture>

                <DotNavigation getSelectedItem={getSelectedItemHandler} />

                <article className="crew-info flow">
                    <h2 className="ff-serif uppercase fs-600 text-white">{info.role}</h2>
                    <p className="ff-serif uppercase fs-700">{info.name}</p>
                    <p className="text-light fs-400">
                        {info.bio}
                    </p>
                </article>
            </main>
        </div>
    );
}

export default Crew;