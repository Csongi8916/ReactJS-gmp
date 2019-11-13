import React from 'react';

import classes from './MovieCard.scss';

import pic from '../../assets/testimg.jpg'

export default function MovieCard() {
  return (
    <div className="MovCard">
      <img src={pic} width="300" height="410" />
      <div className="Row">
        <span className="MovCard_MovieTitle">A film</span>
        <div className="MovCard_MovieInfo MovCard_MovieInfoBorder">2004</div>
      </div>
      <p className="MovCard_MovieInfo">Horror</p>
    </div>
  )
}
