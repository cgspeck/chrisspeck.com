import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
// import { rhythm } from "../utils/typography"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <h1>Hello Gatsby!</h1>
      What a world
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
