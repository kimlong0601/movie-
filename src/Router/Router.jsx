import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category' element={<Catalog/>}/>
        <Route path='/:category/:id' element={<Detail/>}/>
    </Routes>
  )
}

export default Router