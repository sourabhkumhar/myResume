import React from 'react'
import Card from './Card'

export default function Skills() {

  return (
    <>
      <h1 className="divHeading text-center my-5">What Do I Know?</h1>

      <div className='row justify-content-center'>
        <h1 className="subHeading text-center ">Basics</h1>


        <Card img="html" title="HTML" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="css" title="CSS" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="js" title="JavaScript" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />
      </div>

      <hr className='w-50 text-black mx-auto' align="center" />

      <div className='row justify-content-center mt-5'>
        <h1 className="subHeading text-center">Frameworks</h1>

        <Card img="react" title="React" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="bootstrap" title="Bootstrap" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />
      </div>

      <hr className='w-50 text-black mx-auto' align="center" />

      <div className='row justify-content-center mt-5'>
        <h1 className="subHeading text-center">Backend</h1>

        <Card img="nodejs" title="Node.js" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="php" title="PHP" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />
      </div>

      <hr className='w-50 text-black mx-auto' align="center" />

      <div className='row justify-content-center mt-5'>
        <h1 className="subHeading text-center">Database</h1>

        <Card img="mongodb" title="MongoDB" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="mysql" title="MySQL" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />
      </div>
    </>
  )
}