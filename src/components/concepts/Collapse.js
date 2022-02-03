import * as React from "react"
//import { div, p } from './BigTextConcept.module.scss'
 

const Collapse = ({id, title, desc}) => {
    return (
        <div className="font-monospace fw-lighter">
            <p>
            <button 
                className="btn btn-outline-info btn-sm" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#${id}`} 
                aria-expanded="false" 
                aria-controls="collapseExample">
                {title}
            </button>
            </p>
            <div className="collapse" id={id}>
                <div className="card card-body">
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default Collapse