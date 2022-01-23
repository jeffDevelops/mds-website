import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import * as LinkListStyles from "./linkList.module.css"
import LinkItem from "../LinkItem"

const LinkList = data => {

  return (
    <div>
      <h1>May Day Strike Links</h1>
      <h4>This FAQ list is continually evolving and non-exhaustive. Updates will be added as more questions are brought to our attention. Thank you for standing in solidarity with us!</h4>
      <ul className={LinkListStyles.linkUnorderedList}>
        {data.allListLinksYaml.edges[0].node.listOfLinks.map((link) => (
          <li className={LinkListStyles.linkUnorderedListItem}>
            <LinkItem
              linkTitle={link.linkTitle}
              linkURL={link.linkURL}
              linkDescription={link.linkDescription}
            />
          </li>
        ))}
      </ul>
      <Link to="/">Back to Homepage</Link>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query linkListQuery {
        allListLinksYaml {
          edges {
            node {
              listOfLinks {
                linkTitle
                linkURL
                linkDescription
              }
            }
          }
        }
      }
    `}
    render={LinkList}
  />
)
