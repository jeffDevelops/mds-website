import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import * as FAQListStyles from "./faqList.module.css"
import FAQItem from "../FAQItem"

const FAQList = data => (
  <div className={FAQListStyles.faqListContainer}>
    <h1>Frequently Asked Questions</h1>
    This FAQ list is continually evolving and non-exhaustive. Updates will be added as more questions are brought to our attention. Thank you for standing in solidarity with us!
    <ol>
      {data.allListFaqsYaml.edges[0].node.listOfQuestions.map((question) => (
        <li>
          <FAQItem
            question={question.question}
            answer={question.answer}
            unorderedListItem1={question.unorderedListItem1}
            unorderedListItem2={question.unorderedListItem2}
            unorderedListItem3={question.unorderedListItem3}
            unorderedListItem4={question.unorderedListItem4}
            unorderedListItem5={question.unorderedListItem5}
            afterUnorderedList={question.afterUnorderedList}
            secondUnorderedListItem1={question.secondUnorderedListItem1}
            secondUnorderedListItem2={question.secondUnorderedListItem2}
            secondUnorderedListItem3={question.secondUnorderedListItem3}
            secondUnorderedListItem4={question.secondUnorderedListItem4}
            relatedLink1={question.relatedLink1}
            relatedLink2={question.relatedLink2}
            relatedLink3={question.relatedLink3}
            secondUnorderedList={question.secondUnorderedList}
            relatedLink1Title={question.relatedLink1Title}
            relatedLink2Title={question.relatedLink2Title}
            relatedLink3Title={question.relatedLink3Title}
          />
        </li>
      ))}
    </ol>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query faqListQuery {
        allListFaqsYaml {
          edges {
            node {
              listOfQuestions {
                question
                answer
                unorderedListItem1
                unorderedListItem2
                unorderedListItem3
                unorderedListItem4
                unorderedListItem5
                afterUnorderedList
                secondUnorderedListItem1
                secondUnorderedListItem2
                secondUnorderedListItem3
                secondUnorderedListItem4
                relatedLink1
                relatedLink2
                relatedLink3
                relatedLink1Title
                relatedLink2Title
                relatedLink3Title
              }
            }
          }
        }
      }
    `}
    render={FAQList}
  />
)
