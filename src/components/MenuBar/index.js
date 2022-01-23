import React, { useState, useEffect } from "react"
import Hamburger from "hamburger-react"
import { Link } from "gatsby"

import * as MenuBarStyles from "./menuBar.module.css"

const MenuBar = () => {
  const [isOpen, setOpen] = useState(false);

  let width = window.innerWidth;

  return (
    <nav>
      <div className={MenuBarStyles.hamburger} >
        <Hamburger toggled={isOpen} toggle={setOpen} size={34} duration={0.5} color="#E9DFAC" label="Show MenuBar" />
      </div>
      {isOpen && (
        <div>
          <ul className={MenuBarStyles.menuBarList}>
            <li>
              <Link className={MenuBarStyles.menuBarItemLink} to="/">{width}px</Link>
            </li>
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
        </div>
      )}
    </nav>
  )
}

export default MenuBar
