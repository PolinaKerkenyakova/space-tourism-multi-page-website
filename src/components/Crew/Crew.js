import Header from "../Header/Header";
import DotNavigation from "../Navigation/DotNavigation";

import './Crew.css';

const Crew = () => {
    return (
        <div className="crew">
            <Header />
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

                <div className="img">

                </div>
                <img src="/assets/crew/image-douglas-hurley.png" alt="" />

                <DotNavigation />

                <article className="crew-info flow">
                    <h2 className="ff-serif uppercase fs-600 text-white">Commander</h2>
                    <p className="ff-serif uppercase fs-700">Douglas Hurley</p>
                    <p className="text-light fs-400">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                        and former NASA astronaut. He launched into space for the third time as
                        commander of Crew Dragon Demo-2.
                    </p>
                </article>

            </main>
        </div>
    )
}

export default Crew;