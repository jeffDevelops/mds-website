import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import * as DemandListStyles from "./demandList.module.css"

const DemandList = data => (
  <div>
    <h1>Our Demands</h1>
    <ol>
      {data.allListDemandsYaml.edges[0].node.listOfDemands.map(item => (
        <h3>
          <li>
            {item.demand}
          </li>
        </h3>
      ))}
    </ol>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query demandListQuery {
        allListDemandsYaml {
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
