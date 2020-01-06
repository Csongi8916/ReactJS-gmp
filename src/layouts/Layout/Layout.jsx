import React from 'react'
import Footer from '../../components/Footer';
import MovieResult from '../../components/MovieResult/MovieResult';
import { Route } from 'react-router-dom';
import MovieSearchPage from "../../pages/MovieSearchPage";
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import MovieDetailsContainer from '../../containers/MovieDetailsContainer/MovieDetailsContainer';
import MovieResultContainer from '../../containers/MovieResultContainer/MovieResultContainer';

export default function Layout(props) {
  return (
    <React.Fragment>
      <Route path="/" exact component={MovieSearchPage} />
      <Route path="/movie/:id" component={MovieDetailsContainer} />
      <Footer></Footer>
    </React.Fragment>
  )
}
