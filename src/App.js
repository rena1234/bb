import React, { useState, useContext } from 'react';
import style from './App.module.scss';
import TopBar from 'Components/top-bar/TopBar.js';
import CardsContainer from 'Components/cards-container/CardsContainer.js';
import { SearchProvider } from 'Contexts/Context.js';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

function App (props) {

  const theme = createMuiTheme({
    overrides: {
      MuiInput: {
        underline: {
          "&:after": {
            borderBottom: "3px solid gray"
          }
        },
      },
    },
  });

	return(
    <SearchProvider value={[]}>
      <div className={style['app']}>
        <ThemeProvider theme={theme}>
          <TopBar/>
        </ThemeProvider>
        <CardsContainer pageSize={8}/>
      </div>
    </SearchProvider>
	);
}

export default App;
