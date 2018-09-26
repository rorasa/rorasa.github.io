import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'
import './layout.css'

const CoverPage = ({ children }) => (
  <div style={{
    backgroundColor: 'blue',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '10%'
  }}>
    {children}
  </div>
)

export default CoverPage
