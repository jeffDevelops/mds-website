import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import * as DemandListStyles from "./demandList.module.css"

const DemandList = data => (
  <div className={DemandListStyles.demandListContainer}>
    <h2>Our Demands</h2>
    <ol>
      {data.allListDemandsYaml.edges[0].node.listOfDemands.map(item => (
        <li key={item.demand}>{item.demand}</li>
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
