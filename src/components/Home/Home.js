import React from 'react'
import Social from '../Social'
import './Home.css'

export default function Home() {
  return (
    <div className='container'>
      <div className="row mt-5 row-1 ">

        <div className="col-12 col-md-6 column-1">

          <h1 className='heading'>Sourabh Kumhar</h1>
          <h2 className='subHeading'>( Web Developer )</h2>
          <p className='para'>A passionate individual who always thrives to work on end to end products which develop sustainable and highly scalable social and technical systems to create impact.</p>

          <div className="d-flex justify-content-between w-50 pb-4 mt-4">
            <Social site="Instagram" />
            <Social site="Linkedin" />
            <Social site="Github" />
            <Social site="gmail" gmail="mr.sourabhkumhar@gmail.com" />
          </div>

          <div className='mb-5'>
            <button className="btn myBtn">Project's Repositories</button>
          </div>

        </div>

        <div className="col-12 col-md-6 column-2">
          <img className='introImg' src={process.env.PUBLIC_URL + '/images/intro.svg'} alt="intro" />
        </div>
      </div>
    </div>
  )
}
