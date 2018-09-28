import React from 'react'

import ArticlePage from '../components/articlelayout'

const Blog = ()=>{
  window.location.href = "http://rorasa.wordpress.com"
  return (
    <ArticlePage
      title="Blog"
      backgroundColor="black"
      textColor="white">
    </ArticlePage>
  )
}

export default Blog
