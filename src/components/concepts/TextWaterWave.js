import * as React from "react"
import { div} from './TextWaterWave.module.scss'

const TextWaterWave = ({text}) => {
    return(
        <div className={`${div} container`}>
            <p>{text}</p>
            <p>{text}</p>
        </div>
    )
}

export default TextWaterWave