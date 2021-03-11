import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ClubDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { faMars } from "@fortawesome/free-solid-svg-icons";
import maleImg from "../../Images/male.png";
import femaleImg from "../../Images/female.png";
import facebook from "../../Images/Facebook.png"
import youtube from "../../Images/YouTube.png"
import twitter from "../../Images/Twitter.png"

const ClubDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setData(data.teams[0]));
  }, [id]);
  console.log(data);
  
  const {
    strTeamBadge,
    strDescriptionEN,
    strTeam,
    intFormedYear,
    strCountry,
    strStadium,
    strGender,
    strFacebook,
    strTwitter,
    strYoutube,
    strTeamFanart4,
  } = data;

  let image;

  if (strGender === "Male") {
    image = <img src={maleImg} alt="img" />;
  } else {
    image = <img src={femaleImg} alt="img" />;
  }

  return (
    <div className="full-details-body">
      <div className="head" style={{backgroundImage:`url(${strTeamFanart4})`}}>
        <img src={strTeamBadge} alt='logo'/>
      </div>
      <div className="details-body">
        <div className="info-container">
          <div>
            <h1>{strTeam}</h1>
            <h3>
              <FontAwesomeIcon icon={faMapMarker} />
              Founded:{intFormedYear}
            </h3>
            <h3>
              <FontAwesomeIcon icon={faFlag} />
              Country:{strCountry}
            </h3>
            <h3>
              <FontAwesomeIcon icon={faFutbol} />
              Stadium:{strStadium}
            </h3>
            <h3>
              <FontAwesomeIcon icon={faMars} />
              Gender:{strGender}
            </h3>
          </div>
          <div className="img">{image}</div>
        </div>
        <p>{strDescriptionEN}</p>
        <div className='footer'>
        <ul>
          <li>
            <a href={`//${strFacebook}`}><img src={facebook} alt="facebook"/></a>
          </li>
          <li>
            <a href={`//${strYoutube}`}><img src={youtube} alt="youtube"/></a>
          </li>
          <li>
            <a href={`//${strTwitter}`}><img src={twitter} alt="twitter"/></a>
          </li>
        </ul>
      </div>
      </div>
     
    </div>
  );
};

export default ClubDetails;
