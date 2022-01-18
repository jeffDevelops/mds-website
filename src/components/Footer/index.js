import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faFacebook, faInstagram, faRedditAlien, faSnapchatGhost, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

import * as FooterStyles from "./footer.module.css"

const Footer = ({ siteTitle }) => (
  <div className={FooterStyles.footer}>
    <section className={FooterStyles.ftMain}>
    <div className={FooterStyles.ftMainItem}>
      <StaticImage
        src="../../images/mayday-logo-circle.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
      <div className={FooterStyles.ftMainItem}>
        <h2 className={FooterStyles.ftTitle}>Connect With Us</h2>
        <ul>
          <li className={FooterStyles.socialsListItem}><a href="https://discord.gg/7ScvDppASV"><FontAwesomeIcon icon={faDiscord} /> Discord</a></li>
          <li className={FooterStyles.socialsListItem}><a href="https://www.reddit.com/r/MayDayStrike/"><FontAwesomeIcon icon={faRedditAlien} /> Reddit</a></li>
          <li className={FooterStyles.socialsListItem}><a href="https://twitter.com/MayDayStrike22"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
        </ul>
      </div>
      <div className={FooterStyles.ftMainItem}>
        <h2 className={FooterStyles.ftTitle}>Follow Us</h2>
        <ul>
          <li className={FooterStyles.socialsListItem}><a href="https://www.instagram.com/MayDayStrike/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
          <li className={FooterStyles.socialsListItem}><a href="https://www.snapchat.com/add/MayDayStrike"><FontAwesomeIcon icon={faSnapchatGhost} /> Snapchat</a></li>
          <li className={FooterStyles.socialsListItem}><a href="https://www.youtube.com/channel/UC_oY2LvpK7LL36raH7J0_og"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
        </ul>
      </div>
    </section>
  </div>
)

export default Footer
