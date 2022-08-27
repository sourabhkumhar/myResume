import React from 'react'
import Card from './Card'

export default function Skills() {
  return (
    <>
      <h1 className="heading text-center m-5" style={{fontSize: "20px"}}>What Do I Know?</h1>

      <div className='row justify-content-center'>
        <h1 className="subHeading text-center ">Basics</h1>

        <Card img="html" title="HTML" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="css" title="CSS" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />

        <Card img="js" title="JavaScript" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad, incidunt ullam sed optio deserunt ipsum mollitia nemo obcaecati magni!" />
      </div>
    </>
  )
}