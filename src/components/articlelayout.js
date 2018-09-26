import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './style.css'

const ArticlePage = (props) => (
  <div>
    <div className="articleHeader" style={{
      backgroundColor: props.backgroundColor,
      color: props.textColor
    }}>
      <h1>{props.title}</h1>
    </div>
    <div className="articleBody">
      {props.children}
    </div>
  </div>
)

export default ArticlePage
