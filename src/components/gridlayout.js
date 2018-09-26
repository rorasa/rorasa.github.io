import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './style.css'

const GridPage = ({ children }) => (
  <div className="gridPage">
    {children}
  </div>
)

export default GridPage
