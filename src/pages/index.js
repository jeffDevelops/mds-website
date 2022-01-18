import * as React from "react"
import styles from "./index.module.css"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import DemandList from "../components/DemandList"

const IndexPage = () => (
  <Layout>
    <Seo title="Coming Soon" />
    <h1>More Information Coming Soon</h1>
    <p>People have had enough. The MayDay strike is a strike being held on the 1st of May lasting 2 weeks attempting to achieve global efforts by encouraging thousands, millions of people, celebrities and unions to stand up. On May 1st 2022 workers will either quit their jobs, go on strike or do what they can. Join the subreddit or Discord to discuss the day.</p>
    <DemandList />
  </Layout>
)

export default IndexPage
