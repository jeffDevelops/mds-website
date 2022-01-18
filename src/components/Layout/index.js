/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "../Header"
 import "./layout.css"
 import Footer from "../Footer"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <>
       <div className="container"></div>
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <div
         style={{
           margin: `0 auto`,
           maxWidth: 960,
           padding: `0 1.0875rem 1.45rem`,
         }}
       >
         <main>{children}</main>
         <footer
           style={{
             marginTop: `2rem`,
           }}
         >
        
         </footer>
       </div>
       <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 