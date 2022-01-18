import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404 Message</h1>
    <h3>Page Not Found</h3>
    <p>Sorry, but we can't seem to find the page you're looking for. Try going back to the previous page or visit our <Link to="/faq">FAQ page</Link> for more information.</p>
  </Layout>
)

export default NotFoundPage
