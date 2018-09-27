import React from 'react'
import { Link } from 'gatsby'

const PageCard = (props) => (
  <Link className="pageCard" to={props.href} style={{
    backgroundImage: "url("+props.backgroundUrl+")",
    color: props.textColor
  }}>
    <div className="pageCardContent">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  </Link>
)

export default PageCard
