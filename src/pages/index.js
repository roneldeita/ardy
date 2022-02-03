import * as React from "react"
import Layout from "../components/layout"
import Collapse from "../components/concepts/Collapse"
import Marquee from "../components/concepts/Marquee"
import TextWaterWave from "../components/concepts/TextWaterWave"
import SlantCards from "../components/concepts/SlantCards"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <Collapse
        id="bt"
        title="Concept: Marquee"
        desc="This concept is super simple yet a bit tricky in terms of animating it through CSS(or maybe because I am not an expert with CSS animation :D). Composed of three lines of Marquee. The first and third lines move from right to left, and the second one is going left from right. https://codepen.io/jamesbarnett/pen/kfmKa"/>
      <Marquee text="Apple Apple Apple Apple" anotherText="Aon Aon Aon Aon Aon Aon" yetAnotherOne="Ardy Ardy Ardy Ardy Ardy"/>
      <br/><br/>
      <Collapse 
        id="tfww"
        title="Concept: Text water wave"
        desc="This cool concept was inspired from this tutorial, https://www.youtube.com/watch?v=G4CRBvx-pac"/><br/>
      <TextWaterWave text="ARDY"/>
      <Collapse 
        id="sc"
        title="Concept: Tilt cards/tiles"
        desc="I often encounter this kind of style from websites that are showcasing their UI designs. A group of cards rotated a little bit."/><br/>
      <SlantCards />
      <br/><br/><br/>
    </Layout>
  )
}

export default IndexPage
