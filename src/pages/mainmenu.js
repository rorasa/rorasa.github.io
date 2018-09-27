import React from 'react'

import GridPage from '../components/gridlayout'
import PageCard from '../components/pageCard'
import Navbar from '../components/navbar'

import background from '../images/cover-4.jpg'
import cover1 from '../images/cover-1.jpg'

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
      <PageCard title="Research" href="/research/" backgroundUrl={cover1} textColor="white">
        <p>Information about my research</p>
      </PageCard>
      <PageCard title="Development" href="/development/">
        <p>Information about my development projects</p>
      </PageCard>
      <PageCard title="Business and Experience" href="/business/"/>
      <PageCard title="Hobbies" href="/hobbies/"/>
      <PageCard title="Contact" href="/contact/"/>
      <Navbar/>
    </div>
  </GridPage>
)

export default mainmenu
