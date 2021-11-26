import Header from "../Header/Header";
import LargeButton from "../Navigation/NavigationButtons/LargeButton";

import './Home.css';

const Home = () => {

    return (
        <div className="home">
            <a class="skip-to-content" href="#main">Skip to content</a>
            <Header />
            <main id="main" className="grid-container grid-container--home flow">
                <div>
                    <div className="flow flow-space--small">
                        <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to <span className="d-block fs-900 ff-serif text-white">space</span></h1>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                </div>
                <div>
                    <LargeButton classes={['uppercase', 'ff-serif', 'text-dark', 'bg-white']} />
                </div>
            </main>
        </div>
    )
}

export default Home;