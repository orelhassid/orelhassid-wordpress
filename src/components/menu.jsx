import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default () => (
  //   const menu = data.allWpMenuItem.edges

  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={(data) => {
      console.log("Menu", data.allWpMenuItem.edges)
      return (
        <ul className="menu-main">
          {data.allWpMenuItem.edges.map(({ node }) => (
            <Link to={node.url}>
              <li>{node.label}</li>
            </Link>
          ))}
        </ul>
      )
    }}
  />
)
