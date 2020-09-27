import React, { useState, useContext } from 'react';
import style from './TopBar.module.scss';
import TextField from '@material-ui/core/TextField';
import SearchContext from 'Contexts/Context';

function TopBar(props) {
  const { search, setSearch } = useContext(SearchContext);

  const handleInputChange = (event) => {
    event.persist();
    setSearch(event.target.value);
  }

	return(
    <div className={style['top-bar']}>
      <div className={style['top-bar__logo']}>
      </div>
      <TextField
        id="search-input"
        name="city"
        type="text"
        placeholder="Personagens"
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
	);
}

export default TopBar;
