import React, { useContext } from 'react'
import './card.css'
import { themeContxt } from '../../context'


function Card({develop,heading,detail,sk}) {
  const theme=useContext(themeContxt)
    const darkMode=theme.state.darkMode
  return (
    <>
    <div className='cards p-3'>
        <img src={develop} alt="" width={'160px'}/>
        <span >{heading}</span>
        <span style={{color:darkMode?'white':''}}>{detail}</span>
        <button className="c-button">Learn More</button>
    </div>
   <div className='p-2'>
    <img src={sk} alt="" width={'30px'}/>
   </div>
   <div>
    
   </div>
    </>
  )
}

export default Card