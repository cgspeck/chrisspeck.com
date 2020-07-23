import React from "react"

import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

function PageOnlyListLink(props) {
  if (props.fields.slug.startsWith("/post")) {
    return null
  }

  return (
    <ListLink to={props.fields.slug} key={props.id}>
      {props.frontmatter.title}
    </ListLink>
  )
}

function TopMenu({ data }) {
  return (
    <ul style={{ margin: 0, listStyle: `none` }}>
      <ListLink to="/" key="home">
        Home
      </ListLink>
      {data.allMarkdownRemark.edges.map(({ node }) => PageOnlyListLink(node))}
    </ul>
  )
}

export default function DynamicTopMenu() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: { fields: [frontmatter___title], order: ASC }
          ) {
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
      `}
      render={data => <TopMenu data={data} />}
    />
  )
}

PageOnlyListLink.propTypes = {
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  id: PropTypes.isRequired,
}

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
}
