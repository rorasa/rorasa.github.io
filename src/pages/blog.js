import React from 'react'

import ArticlePage from '../components/articlelayout'

const Blog = ()=>{
  return (
    <ArticlePage
      title="Blog"
      backgroundColor="black"
      textColor="white">
      <h2>Rorasa's Blog</h2>

      <p>
        An old blog of Wattanit can be found at
        <a href="http://rorasa.wordpress.com" target="_blank">http://rorasa.wordpress.com</a>
      </p>
    </ArticlePage>
  )
}

export default Blog
