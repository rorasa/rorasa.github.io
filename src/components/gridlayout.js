import React from 'react'

import Navbar from '../components/navbar'
import './style.css'

const GridPage = ({ children }) => (
  <div className="gridPage">
    {children}
    <Navbar/>
  </div>
)

export default GridPage
