import React from 'react'
import { useState } from 'react';
import ProjectList from './ProjectList';
import './ProjectTemplate.css';

export default function ProjectTemplate(props) {
    const [mySite, setMySite] = useState("https://sourabhkumhar.vercel.app/")

    const myProjects = [
        {
            name: "iNotebook",
            link: "https://inotebook-coral.vercel.app/login",
            tags: ["MERN Stack"],
            description: "This is a MERN stack site"
        },
        {
            name: "PostMan Clone",
            link: "https://inotebook-coral.vercel.app/login",
            tags: ["HTML", "CSS", "JavaScript"],
            description: "This is a MERN stack site"
        }
    ]


    return (
        <>
            <div className="row">
                <div className="col-md-6 mb-5">
                    <div className="accordion accordion-flush shadow-lg" id="accordionFlushExample">
                        {/* Need to create map now */}
                        <div className="accordion-item">
                            <ProjectList id="1" name="Resume Site" />
                        </div>
                        <div className="accordion-item" onClick={() => setMySite("https://inotebook-coral.vercel.app/login")} >
                            <ProjectList id="2" name="iNotebook" />
                        </div>
                    </div>
                </div>

                <div className="smartphone col-md-6">
                    <div className="content">
                        <iframe title="iNotebook" src={mySite}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
