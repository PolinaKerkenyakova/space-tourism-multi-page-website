import './LargeButton.css';

const LargeButton = (props) => {
    
    return (
        <a href="#" className={'large-button ' + props.classes.join(' ')}>Explore</a>
    )
}

export default LargeButton;