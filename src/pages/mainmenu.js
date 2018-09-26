import React from 'react'
import { Link } from 'gatsby'

import GridPage from '../components/gridlayout'
import PageCard from '../components/pageCard'

import cover1 from '../images/cover-1.jpg'

const mainmenu = ({ data }) => (
  <GridPage>
    <PageCard title="Research" href="/research/" backgroundUrl={cover1} textColor="white">
      <p>Information about my research</p>
    </PageCard>
    <PageCard title="Development" href="/development/">
      <p>Information about my development projects</p>
    </PageCard>
    <PageCard title="Development" href="/development/"/>
  </GridPage>
)

export default mainmenu
