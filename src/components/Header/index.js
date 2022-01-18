import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as HeaderStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className={HeaderStyles.headerText}>
      <h1 className={HeaderStyles.headerH1}>
        <Link className={HeaderStyles.siteTitleLink} to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
