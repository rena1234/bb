import React, { useContext } from 'react';
import CharactersContext from 'Contexts/Context';
import  style from './Card.module.scss';

function Card({name}) {
  const { characters, setCharacters} = useContext(CharactersContext);
	return(
    <div>
      <span className={`${style['character-name']} character-name`}>{name}</span>
    </div>
	);
}

export default Card;
