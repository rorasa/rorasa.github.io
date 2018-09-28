import React from 'react'
import { Link } from 'gatsby'

import CoverPage from '../components/coverlayout'

import '../components/style.css'

const IndexPage = () => (
  <CoverPage nextPage="mainmenu/">
    <div style={{
      textAlign: "right",
      position: "absolute",
      bottom: "20vh",
      right: "10vw"
    }}>
      <h1 style={{
        fontFamily: "'Lora', serif",
        fontSize: "1.2em",
        letterSpacing: "2px"
      }}>WATTANIT.INFO</h1>
      <p>Personal website of Dr Wattanit Hotrakool</p>
    </div>
  </CoverPage>
)

export default IndexPage
