import React from 'react'
import ArticlePage from '../components/articlelayout'

const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark
  return(
    <ArticlePage>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </ArticlePage>
  )
}

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: { eq: $slug }}) {
      html
      frontmatter{
        title
      }
    }
  }
`

export default ArticleTemplate
