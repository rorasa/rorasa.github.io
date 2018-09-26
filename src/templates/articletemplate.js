import React from 'react'
import ArticlePage from '../components/articlelayout'

const ArticleTemplate = ({ data }) => {
  const post = data.markdownRemark
  return(
    <ArticlePage
      title={post.frontmatter.title}
      backgroundColor={post.frontmatter.backgroundColor}
      textColor={post.frontmatter.textColor}>
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
        backgroundColor
        textColor
      }
    }
  }
`

export default ArticleTemplate
