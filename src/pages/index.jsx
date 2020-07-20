import React from "react"
import { Link } from "gatsby"

export default ({ data }) => {
  console.log(data.allWpMenuItem.edges)
  const menu = data.allWpMenuItem.edges
  return (
    <div>
      {menu.map(({ node }) => (
        <Link to={node.url}>
          <li>{node.label}</li>
        </Link>
      ))}
      <h1>Hello</h1>
    </div>
  )
}

export const query = graphql`
  query ALL_CONTENT_NODES {
    allWpMenuItem {
      edges {
        node {
          id
          url
          label
        }
      }
    }
  }
`
