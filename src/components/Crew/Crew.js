import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getData from '../../services/fetchServices';

import Header from '../Header/Header';
import DotNavigation from '../Navigation/DotNavigation';

import './Crew.css';

const Crew = () => {

    const [memberInfo, setMemberInfo] = useState({});
    const [memberSelected, setMemberSelected] = useState();

    const getSelectedMemberHandler = (memberId) => {
        setMemberSelected(memberId);
    }

    useEffect(() => {
        const fetchData = async () => {
            const memberData = await getData('crew', memberSelected);
            setMemberInfo(memberData);
        }

        fetchData();
    }, [memberSelected]);
    
    return (
        <div className="crew">
            <Link to="#main" className="skip-to-content">Skip to content</Link>
            <Header />
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>

                <picture>
                    {/* <img src={`${memberInfo.images.webp || {}}`} alt={`${memberInfo.role}`} /> */}
                    <img src={(memberInfo.image)} alt={memberInfo.name}/>
                </picture>

                <DotNavigation getSelectedMember={getSelectedMemberHandler} />

                <article className="crew-info flow">
                    <h2 className="ff-serif uppercase fs-600 text-white">{memberInfo.role}</h2>
                    <p className="ff-serif uppercase fs-700">{memberInfo.name}</p>
                    <p className="text-light fs-400">
                        {memberInfo.bio}
                    </p>
                </article>
            </main>
        </div>
    )
}

export default Crew;