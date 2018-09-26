import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

import "./style.css"

import cover1 from '../images/cover-1.jpg'
import cover2 from '../images/cover-2.jpg'
import cover3 from '../images/cover-3.jpg'

const coverDelayTime = 6000

class CoverPage extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      theme: 0,
      limit: 2
    }
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      let theme = this.state.theme+1
      if (theme > this.state.limit){
        theme = 0
      }
      this.setState({
        theme: theme
      })
    }, coverDelayTime)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }


  render(){
    let uri
    let color
    if(this.state.theme===0){
      uri = cover1
      color = "white"
    }else if (this.state.theme===1) {
      uri = cover2
      color = "white"
    }else{
      uri = cover3
      color = "white"
    }

    return (
      <div className="coverImage" style={{
        backgroundImage: "url("+uri+")",
        color: color
      }}>
        {this.props.children}
        <a className="coverArrow" href={this.props.nextPage}>
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </a>

      </div>
    )
  }
}

export default CoverPage
