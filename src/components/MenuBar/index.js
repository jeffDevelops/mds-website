import React from "react"
import { Link } from "gatsby"

import * as MenuBarStyles from "./menuBar.module.css"

const MenuBar = () => (
  <nav className={MenuBarStyles.menuBarContainer}>
    <ul className={MenuBarStyles.menuBarList}>
      <li>
        <Link className={MenuBarStyles.menuBarItemLink} to="/">Home</Link>
      </li>
      <li>
        <Link className={MenuBarStyles.menuBarItemLink} to="/faq">FAQ</Link>
      </li>
      <li>
        <Link className={MenuBarStyles.menuBarItemLink} to="/links">Links</Link>
      </li>
    </ul>
  </nav>
)

export default MenuBar
