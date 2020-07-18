import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Modal({ id, setInfo }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [stats, setStats] = useState([]);
  const [type, setType] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    Axios.get(url).then((res) => {
      setStats(res.data.stats);
      setType(res.data.types);
      setName(res.data.forms[0].name);
    });
  }, [url]);
  return (
    <>
      <div className='pokemon-info'>
        <div className='parallax'>
          <img
            id='pokemon'
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt=''
          />
        </div>
        <button className='close' onClick={() => setInfo(null)}>
          &times;
        </button>
        <div className='content'>
          <h2 className='pokemon-name'>{name}</h2>
          <div className='pokemon-type'>
            {type.map((item, index) => (
              <div className={`type-${item.type.name}`} key={index}>
                {item.type.name}
              </div>
            ))}
          </div>
          <div className='pokemon-stats'>
            {stats.map((stat, index) => (
              <div key={index}>
                <small className='stat-title'>{stat.stat.name}</small>
                <h4>{stat.base_stat}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
