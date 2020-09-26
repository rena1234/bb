import React, { useState, useContext } from 'react';
import style from './App.module.scss';
import TopBar from 'Components/top-bar/TopBar.js';
import CardsContainer from 'Components/cards-container/CardsContainer.js';
import { SearchProvider } from 'Contexts/Context.js';

function App (props) {
	return(
    <SearchProvider value={[]}>
      <div>
        <TopBar/>
        <CardsContainer/>
      </div>
    </SearchProvider>
	);
}

export default App;
