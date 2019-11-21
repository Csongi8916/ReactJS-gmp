import React from 'react';
import Logo from '../Logo/Logo';
import NxrSearchButton from '../UI/NxrSearchButton/NxrSearchButton';

import bg from '../../assets/movie_bg.jpg';
import { getYear, separateGenres } from '../../utils/movieUtility';
import './MovieDetails.scss';

export default function MovieDetails({ title, year, genres, image, rate, runtime, overview }) {
  return (
    <div className="MovieDetails" >
      <div className="MovieDetails_Header">
        <div className="MovieDetails_Logo">
          <Logo />
        </div>
        <NxrSearchButton />
      </div>
      <div className="MovieDetails_Container">
        <img src={image} width="330" height="450" />
        <div className="MovieDetails_Info">
          <span className="MovieDetails_Title">{title}</span>
          <span className="MovieDetails_Rate">{rate}</span>
          <p className="MovieDetails_Genre">{separateGenres(genres)}</p>
          <div className="MovieDetails_Time">
            <span className="MovieDetails_DateTime">{getYear(year)}</span>
            <span className="MovieDetails_DateTimeLabel">year</span>
            <span className="MovieDetails_DateTime">{runtime}</span>
            <span className="MovieDetails_DateTimeLabel">min</span>
          </div>
          <p className="MovieDetails_Description">{overview}</p>
        </div>
      </div>
    </div>
  )
}
