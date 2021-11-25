import Header from "../Header/Header";
import NumberNavigation from "../Navigation/NumberNavigation";

import './Technology.css';

const Technology = () => {
    return (
        <div className="technology">
            <a href="#main" className="skip-to-content">Skip to content</a>
            <Header />
            <main id="main" className=" grid-container grid-container--technology flow">
                <h1 className="numbered-title"><span aria-hidden="true">03</span> Space launch 101</h1>

                <NumberNavigation />
                <article className="terminology-info">
                    <div className="flow flow-space--small ">
                        <h2 className="ff-sans-cond letter-spacing-3 fs-200 text-light uppercase">The terminology...</h2>
                        <p className="ff-serif fs-700 uppercase">Launch vehicle</p>
                        <p className="text-light">
                            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to  payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                            it's quite an awe-inspiring sight on the launch pad!
                        </p>
                    </div>
                </article>

                <picture>
                    <source media="(max-width: 719px)" srcSet="/assets/technology/image-launch-vehicle-landscape.jpg" type="image/jpg" />
                    <source media="(min-width: 720px)" srcSet="/assets/technology/image-launch-vehicle-portrait.jpg" type="image/jpg" />
                    <img src="/assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
                </picture>
            </main>
        </div>
    )
}

export default Technology;