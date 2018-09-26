import React from 'react'
import { Link } from 'gatsby'

import CoverPage from '../components/coverlayout'

const IndexPage = () => (
  <CoverPage nextPage="/mainmenu/">
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </CoverPage>
)

export default IndexPage
