import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faFacebook, faInstagram, faRedditAlien, faSnapchatGhost, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons"

import * as FooterStyles from "./footer.module.css"

const Footer = () => (
  <div className={FooterStyles.footer}>
    <section className={FooterStyles.ftMain}>
      <div className={FooterStyles.ftMainItem}>
        <div className={FooterStyles.ftColumnContent}>
          <h2 className={FooterStyles.ftTitle}>Follow Us</h2>
          <ul>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://www.instagram.com/MayDayStrike/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://www.snapchat.com/add/MayDayStrike" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSnapchatGhost} /> Snapchat</a></li>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://www.youtube.com/channel/UC_oY2LvpK7LL36raH7J0_og" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className={FooterStyles.ftMainItem}>
        <div className={FooterStyles.ftColumnContent}>
          <h2 className={FooterStyles.ftTitle}>Connect With Us</h2>
          <ul>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://discord.gg/maydaystrike" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} /> Discord</a></li>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://www.facebook.com/May-Day-Strike-110985901475308" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://www.reddit.com/r/MayDayStrike/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faRedditAlien} /> Reddit</a></li>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://twitter.com/MayDayStrike22" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className={FooterStyles.ftMainItem}>
        <div className={FooterStyles.ftColumnContent}>
          <h2 className={FooterStyles.ftTitle}>Join Us</h2>
          <ul>
            <li className={FooterStyles.socialsListItem}><a className={FooterStyles.socialsListItemLink} href="https://forms.gle/FPSGP8SMb9Ati4iT6" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHandsHelping} /> Volunteer</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default Footer
