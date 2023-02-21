import React from 'react'
import Router from '../Router/Router';
import Footer from './footerComponent/Footer';

import Header from './headerComponents/Header';

const MainLayout = () => {
  return (
   <>
        <Header/>
        <Router/>
        <Footer/>
   </>
  )
}

export default MainLayout