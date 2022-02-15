import React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

function AboutPage(props) {
  return (
    <Layout pageTitle="About page">
      <div className="container">
        <p>This website has been created using <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> framework with the help of the following libraries:</p>
        <ul>
          <li>Front-end toolkit <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">Bootsrap 5</a></li>
          <li>SEO <a href="https://www.npmjs.com/package/react-helmet" target="_blank" rel="noreferrer">React helmet</a></li>
          <li><a href="https://sass-lang.com/" target="_blank" rel="noreferrer">Sass</a></li>
          <li>Few of the gatsby plugins(I'm  a bit lazy, I don't feel like listing all of them right here this time LoL)</li>
          <hr/>
          <li>Repository: <a href="https://github.com/roneldeita/ardy" target="_blank" rel="noreferrer">Github</a></li>
          <li>Build and Deployment: <a href="https://www.gatsbyjs.com/products/cloud/" target="_blank" rel="noreferrer">Gatsby Cloud</a></li>
        </ul>
      {/* <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
      <div className="card" style={{width:`18em`}}>
        <StaticImage src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> */}
      </div>
    </Layout>
  )
}

export default AboutPage