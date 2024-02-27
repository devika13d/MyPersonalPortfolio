import React, { useContext } from 'react'
import js from '../images/js.png'
import rea from '../images/react.png'
import ht from '../images/html.png'
import cs from '../images/css.png'
import mo from '../images/mongo.png'
import './work.css'
import { themeContxt } from '../../context'


function Work() {
    const theme=useContext(themeContxt)
    const darkMode=theme.state.darkMode
    return (
        <>
            <div className="work m-4" id='Work'>
                <div className='awe'>
                    <span style={{color:darkMode?'white':''}}>Works for all these</span>
                    <span>
                        I've been working on different things as a developer. I've made websites using React, HTML, CSS, 
                        <br/>
                        and also worked on the behind-the-scenes stuff using MongoDB, Express, and Node.js.
                        <br />
                        It's been a journey where I've learned how to make things look good with CSS and Bootstrap, and how 
                        <br/>to make them work smoothly with ReactJS.
                        <br />
                        I've also used React Bootstrap to add some extra coolness. <br/>If you want to see what I've been up to, check out my portfolio!

                    </span>
                   
                    <div className='blur s-blur1' style={{ background: "var(--violet)", width: '80rem' }}></div>
                </div>
                <div className='m-r'>
                    <div className='main-c'>
                        <div className='sec-c'>
                            <img src={js} alt="" />
                        </div>
                        <div className='sec-c'>
                            <img src={ht} alt="" />
                        </div>
                        <div className='sec-c'>
                            <img src={cs} alt="" />
                        </div>
                        <div className='sec-c'>
                            <img src={rea} alt="" />
                        </div>
                        <div className='sec-c'>
                            <img src={mo} alt="" />
                        </div>
                    </div>
                    <div className='back-cir y-cir'></div>
                    <div className='back-cir b-cir'></div>
                </div>
            </div>
        </>
    )
}

export default Work