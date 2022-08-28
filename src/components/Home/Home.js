import React from 'react'
import Social from '../Social'
import './Home.css'

export default function Home() {
  return (
    <div className='container mt-4'>
      <div className="row row-1 ">

        <div className="col-12 col-md-6 column-1">

          <h1 className='heading'>Sourabh Kumhar</h1>
          <h2 className='subHeading'>( Web Developer )</h2>
          <p className='para'>A passionate individual who always thrives to work on end to end products which develop sustainable and highly scalable social and technical systems to create impact.</p>

          <div className="d-flex justify-content-between w-50 pb-4 mt-4">
            <Social site="Instagram" />
            <Social site="Linkedin" />
            <Social site="Github" />
            <Social site="gmail" gmail="dev.sourabhkumhar@gmail.com" />
          </div>

          <div className='mb-5'>
            <a className='myBtnLink' target="_blank" rel="noreferrer" href='https://github.com/sourabhkumhar?tab=repositories'>
              <button className="btn myBtn">GitHub Repositories</button>
            </a>
          </div>

        </div>

        <div className="col-12 col-md-6 column-2">
          <img className='introImg' src={process.env.PUBLIC_URL + '/images/intro.svg'} alt="intro" />
        </div>
      </div>

    </div>
  )
}
