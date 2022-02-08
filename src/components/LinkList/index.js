import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import * as LinkListStyles from "./linkList.module.css"
import LinkItem from "../LinkItem"

const LinkList = data => {

  return (
    <div>
      <h1>Related Links</h1>
      Consider this a list of our official platforms and social accounts. If you're looking to get involved in any part of the movement, this is a fantastic place to start.
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
