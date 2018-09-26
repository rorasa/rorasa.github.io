import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from './layout'
import './layout.css'

const ArticlePage = ({ children }) => (
  <div>
    {children}
  </div>
)

export default ArticlePage
