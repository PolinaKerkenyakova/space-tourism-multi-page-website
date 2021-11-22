import Header from "../Header/Header";
import LargeButton from "../Navigation/NavigationButtons/LargeButton";

const Home = () => {

    return (
        <div className="home">
            <Header />
            <div className="grid-container grid-container--home">
                <div>
                    <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to <span className="d-block fs-900 ff-serif text-white">space</span></h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div>
                    <LargeButton classes={['uppercase', 'ff-serif', 'text-dark', 'bg-white']} />
                </div>
            </div>
        </div>
    )
}

export default Home;