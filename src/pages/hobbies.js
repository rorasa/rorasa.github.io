import React from 'react'

import GridPage from '../components/gridlayout'
import PageCard from '../components/pageCard'
import Navbar from '../components/navbar'

import background from '../images/cover-4.jpg'
import menu1 from '../images/menu-4.jpg'
import menu2 from '../images/hobbies-1.jpg'
import menu3 from '../images/hobbies-2.jpg'
import menu4 from '../images/hobbies-3.jpg'
import menu5 from '../images/hobbies-4.jpg'

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
      <PageCard title="Music" href="hobbies/music/" backgroundUrl={menu1} textColor="white"/>
      <PageCard title="Arts" href="hobbies/arts/" backgroundUrl={menu2} textColor="white"/>
      <PageCard title="Religion" href="hobbies/religion/" backgroundUrl={menu5} textColor="white"/>
      <PageCard title="Collections" href="hobbies/collections/" backgroundUrl={menu4} textColor="white"/>
      <PageCard title="Calligraphy" href="hobbies/calligraphy/" backgroundUrl={menu3} textColor="white"/>
      <Navbar/>
    </div>
  </GridPage>
)

export default hobbies
