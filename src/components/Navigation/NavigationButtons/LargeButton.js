import { Link } from 'react-router-dom';

import './LargeButton.css';

const LargeButton = (props) => {

    return (
        <Link to="/destinations" className={'large-button ' + props.classes.join(' ')}>Explore</Link>
    )
}

export default LargeButton;