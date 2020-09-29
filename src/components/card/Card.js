import React, { useContext } from 'react';
import  style from './Card.module.scss';

function Card({character}) {
  const backgroundImgStyle = {
    backgroundImage: `url(${character.img})`
  }

  const getStatusColorStyle = (status) => {
    let color;
    if(status === 'Alive') {
      color = '#0c7743';
    } else if(status === 'Deceased') {
      color = '#f56523';
    } else {
      color = '#415271';
    }
    return {
      'background': color
    }
  }

  const occupation = character.occupation.join(', ');

	return(
    <div className={style['card']}>
      <div className={style['card__img']} style={backgroundImgStyle}>
        <div className={style['card__img__status']} style={getStatusColorStyle(character.status)}>
          {character.status}
        </div>
        <div>
          <span className={`${style['card__img__name']} character-name`}>{character.name}</span>
        </div>
      </div>
      <div className={style['card__info']}>
        <div className={style['card__info__birthday']}>
          <span>&#9733; </span>
          <span className={style['card__info__birthday__date']}>{character.birthday}</span>
        </div>
        <span className={style['card__info__desc']}>{occupation}</span>
      </div>
    </div>
	);
}

export default Card;
