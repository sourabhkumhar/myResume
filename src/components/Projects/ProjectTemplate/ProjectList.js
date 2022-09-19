import React from 'react'

export default function ProjectList(props) {
    const {id, name, desc, github} = props
    return (
        <>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#open${id}`} aria-expanded="false" aria-controls={`open${id}`}>
                        {name}
                    </button>
                </h2>
                <div id={`open${id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        {desc}
                        <a href={github}><img src={process.env.PUBLIC_URL + "/images/github.png"} width="20px" alt="" /></a>
                    </div>
                </div>
        </>
    )
}
