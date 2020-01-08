import React from 'react'
import Footer from '../../components/Footer';
import MovieResult from '../../components/MovieResult/MovieResult';
import { Route, Switch } from 'react-router-dom';
import MovieSearchPage from "../../pages/MovieSearchPage";
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import MovieDetailsContainer from '../../containers/MovieDetailsContainer/MovieDetailsContainer';
import MovieResultContainer from '../../containers/MovieResultContainer/MovieResultContainer';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function Layout(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={MovieSearchPage} />
        <Route path="/search/" component={MovieSearchPage} />
        <Route path="/movie/:id" component={MovieDetailsContainer} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer></Footer>
    </React.Fragment>
  )
}
