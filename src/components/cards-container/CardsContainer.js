import React, { useContext, useEffect, useState } from 'react';
import SearchContext from 'Contexts/Context';
import Card from 'Components/card/Card.js';

function CardsContainer(props) {
  const { search, setSearch } = useContext(SearchContext);
  const [ characters, setCharacters] = useState([]);

  const getCharacters = (searchString) => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${searchString}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
      });
  }

  useEffect(() => {
    getCharacters(search);
  }, [search]);

	return(
    <div>
      { React.Children.toArray(
         characters.map( (c) => <Card name={c.name}/>)
         )}
    </div>
	);
}

export default CardsContainer;
