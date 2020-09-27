import React, { useContext, useEffect, useState } from 'react';
import SearchContext from 'Contexts/Context';
import Card from 'Components/card/Card.js';
import style from './CardsContainer.module.scss';

function CardsContainer({pageSize}) {
  const { search, setSearch } = useContext(SearchContext);
  const [ characters, setCharacters] = useState([[]]);
  const [ page, setPage ] = useState(0);

  const getPages = (items, pageSize) => {
    if(items.length <= pageSize){
      return [items]
    }
    const chunk = items.splice(0, pageSize);
    return [chunk, ...getPages(items, pageSize)]
  }

  const getCharacters = (searchString) => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${searchString}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(getPages(data, pageSize))
      });
  }

  useEffect(() => {
    setPage(0);
    getCharacters(search);
  }, [search]);

	return(
    <div className={style['cards-container']}>
      <div>
        { React.Children.toArray(
           characters[page].map( (c) => <Card name={c.name}/>)
           )}
      </div>
      <div>
        { React.Children.toArray(
           characters.map( 
             (page, index) => <button id={`page-button-${index}`} onClick={() => setPage(index)}>{index + 1}</button>
           )
           )}
      </div>
    </div>
	);
}

export default CardsContainer;
