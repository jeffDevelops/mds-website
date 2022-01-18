import React from "react"

import * as FAQItemStyles from "./faqItem.module.css"

export default (props) => (
  <div>
    { !props.hidden && 
      <div>
        <h3>{ props.question }</h3>
        { props.answer && <p>{ props.answer }</p> }
        { props.unorderedListItem1 &&
          <div className={FAQItemStyles.answerList}>
            <ul>
              <li className={FAQItemStyles.answerListItems}>{ props.unorderedListItem1}</li>
              { props.unorderedListItem2 &&
                <li className={FAQItemStyles.answerListItems}>{ props.unorderedListItem2}</li>
              }
              { props.unorderedListItem3 &&
                <li className={FAQItemStyles.answerListItems}>{ props.unorderedListItem3}</li>
              }
              { props.unorderedListItem4 &&
                <li className={FAQItemStyles.answerListItems}>{ props.unorderedListItem4}</li>
              }
              { props.unorderedListItem5 &&
                <li className={FAQItemStyles.answerListItems}>{ props.unorderedListItem5}</li>
              }
            </ul>
          </div>
        }
        { props.afterUnorderedList && <p>{ props.afterUnorderedList }</p> }
        { props.secondUnorderedListItem1 &&
          <div className={FAQItemStyles.answerList}>
            <ul>
              <li className={FAQItemStyles.answerListItems}>{ props.secondUnorderedListItem1}</li>
              { props.secondUnorderedListItem2 &&
                <li className={FAQItemStyles.answerListItems}>{ props.secondUnorderedListItem2}</li>
              }
              { props.secondUnorderedListItem3 &&
                <li className={FAQItemStyles.answerListItems}>{ props.secondUnorderedListItem3}</li>
              }
              { props.secondUnorderedListItem4 &&
                <li className={FAQItemStyles.answerListItems}>{ props.secondUnorderedListItem4}</li>
              }
            </ul>
          </div>
        }
        { props.relatedLink1 &&
          <div className={FAQItemStyles.relatedLinks}>
            <h3>Related Links:</h3>
            <ul>
              <li className={FAQItemStyles.answerListLink}>
                <a href={ props.relatedLink1 } target="_blank" rel="noopener noreferrer">{ props.relatedLink1Title }</a>
              </li>
              { props.relatedLink2 &&
                <li className={FAQItemStyles.answerListLink}>
                  <a href={ props.relatedLink2 } target="_blank" rel="noopener noreferrer">{ props.relatedLink2Title }</a>
                </li> 
              }
              { props.relatedLink3 &&
                <li className={FAQItemStyles.answerListLink}>
                  <a href={ props.relatedLink3 } target="_blank" rel="noopener noreferrer">{ props.relatedLink3Title }</a>
                </li> 
              }
            </ul>
          </div>
        }
        <hr />
      </div>
    }
  </div>
)