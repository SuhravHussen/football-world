import React, { useEffect, useState } from 'react';
import SingleClub from '../SingleClub/SingleClub';
import './AllClubs.css'
const AllClubs = () => {
    const [clubs,setClubs]=useState([])
    useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    .then(res=>res.json())
    .then(data=>setClubs(data.teams))
    },[])
   
    
    return (<div>
         <div className="header">
            <h1>Inside Football World</h1>
        </div>
        <div className='allClubs-container'>

           {
               clubs.map(club =><SingleClub info={club}></SingleClub>)
           }
        </div>
        </div>
    );
};

export default AllClubs;