import React, { useContext } from 'react'
import './services.css'
import developer from '../images/developer.webp'
import skill from '../images/certi.jpg'
import Card from '../card/Card'
import Res from './res/Devika-Ks-Resume__D.pdf'
import { themeContxt } from '../../context'


function Services() {
    const theme=useContext(themeContxt)
    const darkMode=theme.state.darkMode
    return (

        <>
            <div className='skills ms-5'id='Services'>

                <div className='awe'>
                    <span style={{color:darkMode?'white':''}}>My Skills</span>
                    <span style={{fontSize:'13x'}}>
                        Proficient in ReactJS for building dynamic user interfaces.<br/>
                        Experienced in crafting visually appealing designs with CSS and Bootstrap.<br/>
                        Skilled in frontend development using HTML, CSS,Js and React Js.<br/>
                        Competent in backend development with MongoDB, Express, and Node.js.<br/>
                        Familiar with creating responsive and mobile-friendly layouts.<br/>
                        Knowledgeable about RESTful API design and implementation.<br/>
                        Comfortable with version control systems like Git for collaborative development.
                       
                        <br />
                        Continuously learning and adapting to new technologies and frameworks in web development.
                    </span>
                    <a href={Res} download>
                        <button className='s-button '>Download CV</button>
                    </a>

                    <div className='blur s-blur1' style={{ background: "var(--violet)" }}></div>
                </div>
                <div className="cards" >
                    <div style={{color:darkMode?'white':''}}>
                        <Card develop={developer} 
                            heading={'Develops'}
                            detail={"Country Website,Tourist Website,Login System,Counter App,Weather App"}
                        />
                    </div>
                    {/* second card */}
                    <div className='icard d-flex' style={{ position: 'absolute', left: '-13rem', top: '-1rem', bottom: '-10rem' }}>
                        <Card sk={skill}
                            heading={"FrontEnd Skills"}
                            detail={"Html,Css,Javascript,React"}
                        />
                    </div>
                    <div className='icard d-flex' style={{ position: 'absolute', left: '-13rem', top: '12rem', bottom: '-10rem' }}>
                        <Card sk={skill}
                            heading={"Backend Skills"}
                            detail={"Node js,Mongo DB,Mysql"}
                        />
                    </div>

                    <div className='blur s-blur2' style={{ background: "#ABF1FF94" }}></div>
                </div>
            </div>
        </>
    )
}

export default Services