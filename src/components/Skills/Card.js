import React from 'react'
import './Skills.css'

export default function Card(props) {
    return (
        <div id={props.img} className="col-4 card p-0" style={{ width: "251px", margin: '10px' }}>
            <div className='cardBox'>
                <img src={process.env.PUBLIC_URL + `/images/${props.img}.svg`} className="" width="250px" height="250px" alt="..." draggable="false" />
            </div>

            <div className="card-body" align="center">
                <h5 className="card-title" style={{color: "#14213D"}}>{props.title}</h5>
            </div>
        </div>
    )
}
