import React from 'react';
import { useHistory } from 'react-router';
import './SingleClub.css'
const SingleClub = (props) => {
    const {strTeam , strTeamBadge,strSport,idTeam} = props.info;
    let history = useHistory();
    const showTeamDetails = () => {
      history.push(`/club/${idTeam}`) 
    }
    return (
        <div className="Club-container">
            <div>
                <img src={strTeamBadge} alt=""/>
            </div>
            <div>
                <h1>{strTeam}</h1>
                <h4>Sport Type:{strSport}</h4>
                <button onClick={showTeamDetails}>Explore</button>
            </div>
        </div>
    );
};

export default SingleClub;