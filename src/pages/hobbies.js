import React from 'react'

import GridPage from '../components/gridlayout'
import PageCard from '../components/pageCard'
import Navbar from '../components/navbar'

import background from '../images/cover-4.jpg'

const hobbies = ({ data }) => (
  <GridPage>
    <div style={{
      height: "100vh",
      width: "100%",
      backgroundImage: "url("+background+")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
      <PageCard title="Music" href="/music/"/>
      <PageCard title="Arts" href="/arts/"/>
      <PageCard title="Calligraphy" href="/calligraphy/"/>
      <PageCard title="Collections" href="/collections/"/>
      <Navbar/>
    </div>
  </GridPage>
)

export default hobbies
