import React from 'react'

import GridPage from '../components/gridlayout'
import PageCard from '../components/pageCard'


import background from '../images/cover-4.jpg'
import menu1 from '../images/menu-1.jpg'
import menu2 from '../images/menu-2.jpg'
import menu3 from '../images/menu-3.jpg'
import menu4 from '../images/menu-4.jpg'
import menu5 from '../images/menu-5.jpg'

const mainmenu = ({ data }) => (
  <GridPage>
    <div style={{
        height: "100vh",
        width: "100%",
        backgroundImage:"url("+background+")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }}>
      <PageCard title="Research" href="/research/" backgroundUrl={menu1} textColor="white">
        <p>Academic activities</p>
      </PageCard>
      <PageCard title="Development" href="/development/" backgroundUrl={menu2} textColor="white">
        <p>Software projects</p>
      </PageCard>
      <PageCard title="Business" href="/business/" backgroundUrl={menu3} textColor="white">
        <p>Professional experience</p>
      </PageCard>
      <PageCard title="Hobbies" href="/hobbies/" backgroundUrl={menu4} textColor="white">
        <p>Arts and Music</p>
      </PageCard>
      <PageCard title="Contact" href="/contact/" backgroundUrl={menu5} textColor="white"/>
    </div>
  </GridPage>
)

export default mainmenu
