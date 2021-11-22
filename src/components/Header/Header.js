import PrimaryNavigation from '../Navigation/PrimaryNavigation';
import './Header.css';

const Header = () => {
    return (
        <header className="primary-heading flex">
            <div>
                <img src="/assets/shared/logo.svg" alt="Space tourism logo" className="logo" />
            </div>
            <PrimaryNavigation />
        </header>
    );
}

export default Header;