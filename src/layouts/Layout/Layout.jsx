import React from 'react'
import Footer from '../../components/Footer';
import MovieResult from '../../components/MovieResult/MovieResult';
import { Route } from 'react-router-dom';
import MovieSearchPage from "../../pages/MovieSearchPage";
import MovieDetailsPage from '../../pages/MovieDetailsPage';

export default function Layout(props) {
  return (
    <React.Fragment>
      {/* props.children */}
      <Route path="/" exact component={MovieSearchPage} />
      <Route path="/movie" component={MovieDetailsPage} />
      <Footer></Footer>
    </React.Fragment>
  )
}
