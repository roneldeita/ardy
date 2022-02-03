import * as React from "react"
import { div, left, right } from './Marquee.module.scss'
 

const Marquee = ({text, anotherText, yetAnotherOne}) => {
    return (
        <div><br/>
            <div className={div}>
                <div className={left}>
                    <p>{text}</p>
                    <p>{text}</p>
                </div>
            </div>
            <div className={div}>
                <div className={right}>
                    <p>{anotherText}</p>
                    <p>{anotherText}</p>
                </div>
            </div>
            <div className={div}>
                <div className={left}>
                    <p>{yetAnotherOne}</p>
                    <p>{yetAnotherOne}</p>
                </div>
            </div>
        </div>
    )
}

export default Marquee