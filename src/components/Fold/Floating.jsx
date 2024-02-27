import React from 'react'
import './float.css'

function Floating({ image, txt1, txt2 }) {
  return (
    <>
      <div className='m-floating'>
        <img src={image} style={{ borderRadius: '100%' }} width={'90px'} alt="" />
        <span className='me-3'>
          {txt1}
          <br />
          {txt2}
        </span>
      </div>
    </>
  )
}

export default Floating