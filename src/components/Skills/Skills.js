import React from 'react'
import Card from './Card'

export default function Skills() {

  return (
    <>
      <h1 className="divHeading text-center my-5">What Do I Know?</h1>

      <div className='row justify-content-center'>
        <h1 className="subHeading text-center ">Basics</h1>

        <Card img="html" title="HTML" />
        <Card img="css" title="CSS" />
        <Card img="js" title="JavaScript" />
      </div>

      <hr className='w-50 text-black mx-auto' align="center" />

      <div className='row justify-content-center mt-5'>
        <h1 className="subHeading text-center">Frameworks</h1>

        <Card img="react" title="React" />
        <Card img="next" title="Next" />
        <Card img="tailwind" title="Tailwind" />
        <Card img="bootstrap" title="Bootstrap" />
      </div>

      <hr className='w-50 text-black mx-auto' align="center" />

      <div className='row justify-content-center mt-5'>
        <h1 className="subHeading text-center">Backend</h1>

        <Card img="nodejs" title="Node.js" />
        <Card img="php" title="PHP" />
      </div>

      <hr className='w-50 text-black mx-auto' align="center" />

      <div className='row justify-content-center mt-5'>
        <h1 className="subHeading text-center">Database</h1>

        <Card img="mongodb" title="MongoDB" />
        <Card img="mysql" title="MySQL" />
      </div>
    </>
  )
}