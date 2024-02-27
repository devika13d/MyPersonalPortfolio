import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className="footer" id='Contact'>
        <img src="https://th.bing.com/th/id/OIP.3sSBGx2jp8ujwlJoGHaHqwHaEO?rs=1&pid=ImgDetMain" height={'200px'} width={'100%'} alt="" />
        <div className='website ms-5 ' style={{ width: '400px', position: 'absolute', marginTop: '-90px' }}>
          <h5 style={{ color: 'var(--blue)' }}>   <i class="fa-solid fa-file m-3 fa-1x" style={{ color: 'var(--blue)' }}></i>My Personal Portfolio</h5>
        </div>
        <div className="f-c">
          <div className='contactus ms-5' style={{ marginTop: '20px' }}>
            <h3 className='d-flex align-items-center justify-content-center'id='Contact'>Contact Me</h3>
            <span><i class="fa-solid fa-envelope fa-1x" style={{ color: 'white' }}></i> devikaks606@gmail.com</span>
            <div className="f-icons p-4">

              <Link to='https://www.instagram.com/?hl=en' target='_blank'><i class="fa-brands fa-instagram fa-2x" style={{ color: 'white' }}></i></Link>
              <Link to='https://github.com/devika13d' target='_blank'><i class="fa-brands fa-github fa-2x" style={{ color: 'white' }}></i></Link>
              <Link to='https://www.linkedin.com/in/devika-ks-9b897a233/' target='_blank'><i class="fa-brands fa-linkedin fa-2x" style={{ color: 'white' }}></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer