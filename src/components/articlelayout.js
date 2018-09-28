import React from 'react'

import Navbar from '../components/navbar'
import './style.css'

const ArticlePage = (props) => (
  <div className="articlePage">
    <div className="articleHeader" style={{
      backgroundColor: props.backgroundColor,
      color: props.textColor
    }}>
      <h1>{props.title}</h1>
    </div>
    <div className="articleBody">
      {props.children}
    </div>
    <Navbar/>
  </div>
)

export default ArticlePage
