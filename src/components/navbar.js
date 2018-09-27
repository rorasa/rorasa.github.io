import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import './style.css'

class Navbar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      navbarActive: false
    }
    this.handleNavChange = this.handleNavChange.bind(this)
  }

  handleNavChange(){
    this.setState({
      navbarActive: !this.state.navbarActive
    })
  }

  render(){
    return(
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                navbar {
                  text
                  href
                }
              }
            }
          }
        `}
        render={data=>{
          const classname = (this.state.navbarActive)?"navbar navbar-active":"navbar"
          const navmenuLocation = (this.state.navbarActive)?"0":"-100%"

          return(
            <div>
              <div className={classname} onClick={this.handleNavChange}>
                <div className="bar1"/>
                <div className="bar2"/>
                <div className="bar3"/>
              </div>
              <div className="navmenu" style={{
                right: navmenuLocation
              }}>
                {data.site.siteMetadata.navbar.map((item,index)=>{
                  return(
                    <div key={index} className="navmenu-item">
                      <Link to={item.href}>
                        {item.text}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }}
      />
    )
  }
}


export default Navbar
