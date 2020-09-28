import React, { useState, useContext, useEffect } from 'react';
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

  const getPageSize = (width) => {
    if(width > 1024) {
      return 10;
    } else if(width > 768 ){
      return 8;
    } else {
      return 4;
    }
  }

  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [pageSize, setPageSize] = useState(getPageSize(window.innerWidth));

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setPageSize(getPageSize(window.innerWidth));
  }


  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

	return(
    <SearchProvider value={[]}>
      <div className={style['app']}>
        <ThemeProvider theme={theme}>
          <TopBar className={style['app__top-bar']}/>
        </ThemeProvider>
        <CardsContainer pageSize={pageSize}/>
      </div>
    </SearchProvider>
	);
}

export default App;
