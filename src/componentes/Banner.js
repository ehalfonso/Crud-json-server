import React from 'react'

const Banner = () => {
  return (
    <div className='row'>
    <div className='col-sm-8 z-3 position-absolute p-5 rounded-3 '>
        <h1>Hola mundo</h1>
    </div>
    <div className='row sticky-sm-bottom'>

        <img src={require("../image/paisaje.jpeg")}/>
    </div>
    </div>
  )
}

export default Banner