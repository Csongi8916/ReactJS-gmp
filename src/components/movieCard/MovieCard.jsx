import React from 'react';
import { Link } from 'react-router-dom';
import { getYear, separateGenres } from '../../utils/movieUtility';
import './MovieCard.scss';

//import pic from '../../assets/testimg.jpg'

export default function MovieCard({ id, title, year, genres, image }) {

  return (
    <div className="MovCard">
      <Link to={`/movie/${title}`} className="mov-link">
        <img src={image} width="300" height="410" />
        <div className="Row">
          <span className="MovCard_MovieTitle">{title}</span>
          <div className="MovCard_MovieInfo MovCard_MovieInfoBorder">{getYear(year)}</div>
        </div>
        <p className="MovCard_MovieInfo">{separateGenres(genres)}</p>
      </Link>
    </div>
  )
}
