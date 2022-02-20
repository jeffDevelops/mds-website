import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import VolunteerForm from "../components/VolunteerForm"

const VolunteerPage = () => (
  <Layout>
    <Seo title="Volunteer" />
    <VolunteerForm />
  </Layout>
)

export default VolunteerPage
