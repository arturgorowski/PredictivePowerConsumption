import React from "react"
import { graphql } from 'gatsby'
import Page from '../templates/page'

const About1 = ({ data }) => {
    return (
        <div>
            <Page data={data.allGhostPage.edges[0].node} />
        </div>
    )
}

export const query = graphql`
query MyQuery {
    allGhostPage {
      edges {
        node {
          html
          title
          url
          uuid
        }
      }
    }
  }
`
export default About1