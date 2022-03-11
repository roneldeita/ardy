import  React, { useState} from "react"
import {div} from './SlantCards.module.scss'
//import { StaticImage } from "gatsby-plugin-image"
//import { arrow, computeStyles } from "@popperjs/core"
 

const SlantCards = ({text}) => {

    const arrCard =[{
        id:1,
        src:"https://image.freepik.com/free-vector/flat-design-abstract-background_23-2149116123.jpg",
        title:"first card",
        description:"first card description"
      },
      {
        id:2,
        src:"https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large",
        title:"second card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:3,
        src:"https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large",
        title:"third card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:4,
        src:"https://image.freepik.com/free-vector/colorful-abstract-background_23-2148463479.jpg",
        title:"fourth card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:5,
        src:"https://image.freepik.com/free-vector/geometric-wallpaper_23-2148701210.jpg",
        title:"fifth card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:6,
        src:"https://image.freepik.com/free-vector/colorful-abstract-background-with-geometric-shapes_23-2148458576.jpg",
        title:"sixth card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:7,
        src:"https://image.freepik.com/free-vector/colorful-abstract-background_23-2148463479.jpg",
        title:"seventh card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:8,
        src:"https://image.freepik.com/free-vector/colorful-abstract-background-with-geometric-shapes_23-2148458576.jpg",
        title:"seventh card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:9,
        src:"https://image.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg",
        title:"seventh card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:10,
        src:"https://image.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg",
        title:"seventh card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:11,
        src:"https://image.freepik.com/free-vector/flat-abstract-wireframe-background_23-2148995803.jpg",
        title:"seventh card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
      {
        id:12,
        src:"https://image.freepik.com/free-vector/flat-design-abstract-background_23-2149102272.jpg",
        title:"seventh card",
        description:"his is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      },
    ]

    const [arr, setArr] = useState(arrCard)
      

    const Shuffle = ( () => {
        let newArr = [...arr]
        const shuffle = newArr.sort(() => Math.random() - newArr.length )
        setArr(shuffle)

    })
    return (
        <div className="container" > 
        <button onClick={() => Shuffle()} className="btn btn-primary">Shuffle cards</button>
        <br/><br/>
        <div className={`${div} container`}>
            
            <div className="row row-cols-md-4 g-4 d-none d-sm-none d-md-flex">
                {arr.map((item) => {
                    return <div className="col" key={item.id}> 
                        <div className="card h-100 shadow-sm fw-light" style={{top:`20%`}}>
                        <img className="card-img-top" src={item.src} alt={item.description} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                        </div>
                    </div>
                    })}
            </div>
        </div>
        </div>
    )
}

export default SlantCards