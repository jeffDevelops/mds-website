import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const DemandList = data => (
  <div>
    <h1>Our Demands</h1>
    <p>
      The following is the movement’s list of demands, including some general rewording and additions based on community suggestions.
      Please note that future posts will elaborate on each specific demand and why they’re relevant to you and this movement. We’ve included:
    </p>
    <ol>
      {data.allDemandListYaml.edges[0].node.listOfDemands.map(item => (
        <li>
          {item.demand}
        </li>
      ))}
    </ol>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query demandListQuery {
        allDemandListYaml {
          edges {
            node {
              listOfDemands {
                demand
              }
            }
          }
        }
      }
    `}
    render={DemandList}
  />
)
