import React from 'react';
import Logo from '../Logo/Logo';

import classes from './MovieDetails.scss';

//import pic from '../../assets/testimg.jpg'

export default function MovieDetails() {
  return (
    <div className="MovieDetails">
      <div className="MovieDetails_Logo">
        <Logo />
      </div>
      <div className="MovieDetails_Container">
        <img src="https://image.tmdb.org/t/p/w300/ldoY4fTZkGISMidNw60GHoNdgP8.jpg" className="MovieDetails_Img" />
        <div className="MovieDetails_Info">
          <span className="MovieDetails_Title">Guardians of the Galaxy Vol. 3</span>
          <span className="MovieDetails_Rate">4.3</span>
          <p className="MovieDetails_Description">Pulp Fiction is a 1994 American[4] crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[5] Starring John Travolta,
          Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp
          magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.</p>
        </div>
      </div>
    </div>
  )
}
