import React, { useContext } from 'react'
import './home.css'
import Github from './images/github.jpeg'
import Linkedin from './images/linkedin.jpeg'
import Vector1 from './images/vector.png'
import vector2 from './images/vector2.png'
import Girl from './images/cartoon-girl.png'
import Crown from './images/purple-crown-th.png'
import Emoji from './images/emoji.png'
import Em from './images/em.jpg'
import './Fold/Floating'
import Floating from './Fold/Floating'
import { themeContxt } from '../context'
import { Link } from 'react-scroll'


function Home() {
  const theme=useContext(themeContxt)
  const darkMode=theme.state.darkMode
  return (
    <>
      <div className='main-page' id='Home'>
        <div className='main-left'>
          <div className='main-name ms-5'>
            <span style={{color:darkMode?'white':''}}>Hey! I Am</span>
            <span style={{color:darkMode?'rgb(153, 81, 216)':''}}> Devika Ks</span>
            <span>
              MEARN Stack intern passionate about web development, I've self-learned and developed various projects showcased in my portfolio.  </span>
          </div>
          <Link

                to='Portfolio'
                spy={true}
                smooth={true}
              >
          <button className='button-m ms-5'>See Projects</button>
          </Link>
          <div className='main-icon mt-3'>
            <a href="https://github.com/devika13d" target='_blank'>
              <img src={Github} alt="" height={'90px'} width={'109px'} />
            </a>
            <a href="https://www.linkedin.com/in/devika-ks-9b897a233/" target='_blank'>
              <img src={Linkedin} alt="" height={'90px'} width={'90px'} />
            </a>
          </div>
        </div>
        <div className='main-right'>
          <img src={Vector1} alt="" width={'360px'} height={'500px'} />
          <img src={vector2} alt="" width={'350px'} height={'500px'} />
          <img src={Girl} alt="" width={'300px'} height={'300px'} />
          <img src={Em} width={'80px'} alt="" />
          <div style={{ top: '-16%', left: '73%' }} className='floating-div'>
            <Floating image={Crown} txt1='Full Stack' txt2='Developer' />
          </div>
          <div style={{ top: '15rem', left: '-3rem' }} className='floating-div'>
            <Floating image={Emoji} txt1='Best Design' />
          </div>
          <div className='blur' style={{ backgroundColor: "rgb(238 210 255)" }}></div>
        </div>
        <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
      </div>

    </>
  )
}

export default Home