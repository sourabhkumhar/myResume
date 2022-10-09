import React, { useState } from 'react';
import ProjectList from './ProjectList';
import './ProjectTemplate.css';

export default function ProjectTemplate(props) {
    var Projects =  require('./Projects.json')
    const [mySite, setMySite] = useState("https://sourabhkumhar.vercel.app/")

    return (
        <>
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="accordion accordion-flush shadow-lg" id="accordionFlushExample">
                        {Projects.map((element, index) => {
                            return <div key={index} className="accordion-item" onClick={() => setMySite(element.link)} >
                                <ProjectList id={index} name={element.name} tags={(element.tags)} desc={element.description} github={element.github} link={element.link} />
                            </div>
                        })}
                    </div>
                </div>

                <div className="smartphone col-lg-6 shadow-lg">
                    <div className="content">
                        <iframe title="iNotebook" src={mySite}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
