import React from 'react'

export default function Card(props) {
    return (
        <div className="col-4 card p-0" style={{ width: "250px", margin: '10px' }}>
            <div className='cardBox'>
                <img src={process.env.PUBLIC_URL + `/images/${props.img}.svg`} className="" width="250px" height="250px" alt="..." />
            </div>

            <div className="card-body" align="center">
                <h5 className="card-title" style={{color: "#14213D"}}>{props.title}</h5>
                <p className="card-text text-justify">{props.desc}</p>
                <button disabled={!props.projectLink} href="/" className="btn btn-primary">See Projects</button>
            </div>
        </div>
    )
}
