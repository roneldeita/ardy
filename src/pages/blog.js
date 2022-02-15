import * as React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className="container">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
      allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
          name
        }
      }
  }
`

export default BlogPage