import React, { useState } from 'react';
import Modal from './Modal';

export default function PokemonList({ pokemon }) {
  const [info, setInfo] = useState();

  if (info != null) {
    return <Modal id={info} setInfo={setInfo} />;
  }

  return (
    <>
      <div className='list'>
        {pokemon.map((item) => {
          let id = item.url.slice(34, -1);
          return (
            <div className='card' key={id} onClick={() => setInfo(id)}>
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                alt=''
              />
              <h4 className='pokemon-name'>{item.name}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
