import React from 'react'
import Footer from '../../components/Footer';
import MovieResult from '../../components/MovieResult/MovieResult';

export default function Layout(props) {
  return (
    <React.Fragment>
      {props.children}
      <Footer></Footer>
    </React.Fragment>
  )
}
