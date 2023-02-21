import React from 'react'
import { BrowserRouter } from "react-router-dom";
import MainLayout from './components/MainLayout';




const App = () => {
  return (
    <BrowserRouter>
      <MainLayout/>
    </BrowserRouter>
  )
}

export default App