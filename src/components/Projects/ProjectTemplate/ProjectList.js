import React from 'react'

export default function ProjectList(props) {
    const {id, name} = props
    return (
        <>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#open${id}`} aria-expanded="false" aria-controls={`open${id}`}>
                        {name}
                    </button>
                </h2>
                <div id={`open${id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
        </>
    )
}
