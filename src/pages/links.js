import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import LinkList from "../components/LinkList"

const LinksPage = () => (
  <Layout>
    <Seo title="MDS Links" />
    <LinkList />
  </Layout>
)

export default LinksPage
