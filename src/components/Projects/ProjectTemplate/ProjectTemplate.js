import React from 'react'
import { useState } from 'react';
import ProjectList from './ProjectList';
import './ProjectTemplate.css';

export default function ProjectTemplate(props) {
    const [mySite, setMySite] = useState("https://sourabhkumhar.vercel.app/")

    const myProjects = [
        {
            name: "Sourabh Kumhar - Resume Site",
            link: "https://sourabhkumahar.vercel.app",
            tags: "ReactJs | CSS | Bootstrap",
            description: "This is the current site that you are accessing. This is my personal resume site and the project also. Here you will get to know about my web development skills.",
            github: "https://github.com/sourabhkumhar/myResume"
        },
        {
            name: "iNotebook",
            link: "https://inotebook-coral.vercel.app/",
            tags: "MERN Stack | Bootstrap",
            description: "The iNotebook app's user journey starts from the registration process and after login, user can save their personal notes which will be kept in MongoDB. User can access their notes anytime and also update them.",
            github: "https://github.com/sourabhkumhar/iNotebook"
        },
        {
            name: "TextUtils",
            link: "https://text-utils-beta.vercel.app/",
            tags: "ReactJs | Bootstrap",
            description: "[Need To Change] The iNotebook app's user journey starts from the registration process and after login, user can save their personal notes which will be kept in MongoDB. User can access their notes anytime and also update them.",
            github: "https://github.com/sourabhkumhar/TextUtils"
        },
        {
            name: "Tabe To JSON",
            link: "https://sourabhkumhar.github.io/table-to-json/",
            tags: "HTML | CSS | JavaScript",
            description: "[Need To Change] The iNotebook app's user journey starts from the registration process and after login, user can save their personal notes which will be kept in MongoDB. User can access their notes anytime and also update them.",
            github: "https://github.com/sourabhkumhar/table-to-json"
        },
        {
            name: "PostMan Clone",
            link: "https://sourabhkumhar.github.io/PostMan-Clone",
            tags: "HTML | CSS | JavaScript",
            description: "This is the clone version of the PostMan App which is used to fetch API. Here, users can GET data from API links and also make a POST request and get a response in the Response Box.",
            github: "https://github.com/sourabhkumhar/PostMan-Clone"
        }
    ]


    return (
        <>
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="accordion accordion-flush shadow-lg" id="accordionFlushExample">
                        {myProjects.map((element, index) => {
                            return <div key={index} className="accordion-item" onClick={() => setMySite(element.link)} >
                                <ProjectList id={index} name={element.name} tags={(element.tags)} desc={element.description} github={element.github} />
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
