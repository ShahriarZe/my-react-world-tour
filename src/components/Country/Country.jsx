import { useState } from 'react';
import './Country.css'
const Country = ({ country,handleVisitedCountry,handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: visited ? 'Purple' : 'White' }}>Name:{name?.common}</h3>
            <img style={{width:'300px'}} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} km</p>
            <p><small>code:{cca3}</small></p>
            <button onClick={()=> handleVisitedCountry(country)} style={{ marginBottom: '5px' }}>Mark Visited</button><br />
            <button onClick={()=> handleVisitedFlags(flags)} style={{ marginBottom: '5px' }}>Mark Flag</button><br />
            <button style={{ marginRight: '10px' }} onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'Visited This Country' : 'Wanto To Visit'}
        </div>
    );
};

export default Country;