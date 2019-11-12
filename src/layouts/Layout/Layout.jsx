import React from 'react'
import Footer from '../../components/Footer/Footer'

export default function Layout(props) {
  return (
    <div>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
