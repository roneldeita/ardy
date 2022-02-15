import * as React from "react"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ConceptTitle } from './Collapse.module.scss'
 

const Collapse = ({id, title, desc}) => {
    return (
        <div className="container full-width fw-lighter fs-5">
            <p>
            <button 
                className="btn btn-lighter btn-sm" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={`#${id}`} 
                aria-expanded="false" 
                aria-controls="collapseExample">
                <i className="bi bi-info-circle fs-5"></i>
                <span className={`${ConceptTitle} fw-lighter fs-5`}><u>{title}</u></span>
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