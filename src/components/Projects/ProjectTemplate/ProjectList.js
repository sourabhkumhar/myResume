import React from 'react'

export default function ProjectList(props) {
    const { id, name, desc, github, tags } = props;
    const badge = {
        background: "black",
        padding: "3px 6px",
        borderRadius: "10px",
        fontSize: "12px",
        color: "white"
    }

    return (
        <>
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#open${id}`} aria-expanded="false" aria-controls={`open${id}`}>
                    {name}
                </button>
            </h2>
            <div id={`open${id}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                    <span style={badge}><i>Technologies:</i> &nbsp; {tags}</span>
                    <br />
                    {desc}
                    
                    <div className='d-flex gap-2 mt-2'>
                        <span className='fw-bold'>Visit: </span>
                        <a rel="noreferrer" target="_blank" href={github}><img src={process.env.PUBLIC_URL + "/images/github.png"} width="20px" height="20px" alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
