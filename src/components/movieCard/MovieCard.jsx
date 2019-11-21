import React from 'react';

import { getYear, separateGenres } from '../../utils/movieUtility';
import './MovieCard.scss';

//import pic from '../../assets/testimg.jpg'

export default function MovieCard({ title, year, genres, image }) {

  return (
    <div className="MovCard">
      <img src={image} width="300" height="410" />
      <div className="Row">
        <span className="MovCard_MovieTitle">{title}</span>
        <div className="MovCard_MovieInfo MovCard_MovieInfoBorder">{getYear(year)}</div>
      </div>
      <p className="MovCard_MovieInfo">{separateGenres(genres)}</p>
    </div>
  )
}
