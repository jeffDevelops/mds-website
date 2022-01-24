import React from "react"

import * as LinkItemStyles from "./linkItem.module.css"

export default (props) => (
  <div>
    { !props.hidden && 
      <div>
        <p><span><a className={LinkItemStyles.linkAnchor} href={ props.linkURL } target="_blank" rel="noopener noreferrer">{ props.linkTitle }</a></span> - { props.linkDescription }</p>
        <hr />
      </div>
    }
  </div>
)