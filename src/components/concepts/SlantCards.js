import * as React from "react"
import {div} from './SlantCards.module.scss'
import { StaticImage } from "gatsby-plugin-image"
 

const SlantCards = ({text}) => {
    return (
        <div className={`${div} container-fluid`}>
            <div className="row row-cols-md-4 g-4 d-none d-sm-none d-md-flex">
                <div className="col"> 
                    <div className="card h-100 shadow-sm fw-light" style={{top:`20%`}}>
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/flat-design-abstract-background_23-2149116123.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light">
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a short card.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{top:`20%`}}>
                    <StaticImage
                        className="card-img-top shadow-sm fw-light"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light">
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light"  style={{top:`20%`}}>
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/colorful-abstract-background_23-2148463479.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light">
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/geometric-wallpaper_23-2148701210.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light" style={{top:`20%`}}>
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/colorful-abstract-background-with-geometric-shapes_23-2148458576.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light">
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light" style={{top:`20%`}}>
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light">
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/flat-abstract-wireframe-background_23-2148995803.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100" style={{top:`20%`}}>
                    <StaticImage
                        className="card-img-top shadow-sm fw-light"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/flat-design-abstract-background_23-2149102272.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm fw-light">
                    <StaticImage
                        className="card-img-top"
                        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                        src="https://image.freepik.com/free-vector/multicolored-abstract-background_23-2148458514.jpg"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlantCards