import React from 'react'

const Social = (props) => {
    const { site, gmail } = props;
    return (
        <>
            {(site !== "gmail" && site !== "Linkedin") && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/sourabhkumhar`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}

            {site === "Linkedin" && <a className='pe-3' rel="noreferrer" target="_blank" href={`https://${site}.com/in/sourabhkumhar`}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}

            {site === "gmail" && <a href={"mailto:" + gmail}>
                <img src={process.env.PUBLIC_URL + `/images/${site}.png`} width="35px" alt={site} />
            </a>}
        </>
    )
}

export default Social
