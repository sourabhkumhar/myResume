import React from 'react'

const Social = (props) => {
    const { site, gmail } = props;
    return (
        <>
            {site === "Github" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/sourabhkumhar`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}
            
            {site === "Instagram" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/sourabh__kumhar`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}

            {site === "Linkedin" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/in/sourabhkumhar`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}

            {site === "gmail" && <a className='pe-3' href={"mailto:" + gmail}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}
        </>
    )
}

export default Social
