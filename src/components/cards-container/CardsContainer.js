import React, { useContext, useEffect, useState } from 'react';
import SearchContext from 'Contexts/Context';
import Card from 'Components/card/Card.js';
import style from './CardsContainer.module.scss';

function CardsContainer({pageSize}) {
  const { search, setSearch } = useContext(SearchContext);
  const [ characters, setCharacters] = useState([[]]);
  const [ page, setPage ] = useState(0);
  const [ title, setTitle] = useState('Personagens');

  const getPages = (items, pageSize) => {
    if(items.length <= pageSize){
      return [items]
    }
    const chunk = items.splice(0, pageSize);
    return [chunk, ...getPages(items, pageSize)]
  }

  const updateCharacters = (searchString) => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${searchString}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(getPages(data, pageSize))
      });
  }

  const updateTitle = (searchString) => {
    if(searchString != '') {
      setTitle(`Você pesquisou por "${searchString}"`);
    } else {
      setTitle('Personagens');
    }
  }

  useEffect(() => {
    setPage(0);
    updateCharacters(search);
    updateTitle(search);
  }, [search]);

	return(
    <div className={style['cards-container']}>
      <div className={style['cards-container__title']}>
        {title}
      </div>
      <div className={style['cards-container__cards']}>
        { React.Children.toArray(
           characters[page].map( (c) => 
             <Card className={style['cards-container__cards__card']} character={c}/>)
           )}
      </div>
      <div className={style['cards-container__paginator']}>
        { React.Children.toArray(
           characters.map( 
             (p, index) => 
               <button 
                 className={`${style['cards-container__paginator__button']} ${page === index? style['highlight']: ''}` } id={`page-button-${index}`} onClick={() => setPage(index)}>
                 {index + 1}
               </button>
           )
         )}
      </div>
    </div>
	);
}

export default CardsContainer;
