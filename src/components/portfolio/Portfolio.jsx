import React, { useContext, useState } from 'react'
import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import projectsData from '../projects.json';
import { themeContxt } from '../../context';


function Portfolio() {
    const theme = useContext(themeContxt)
    const darkMode = theme.state.darkMode
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleProjectDetails = (projectId) => {
        if (expandedProject === projectId) {
            setExpandedProject(null);
        } else {
            setExpandedProject(projectId);
        }
    };
    return (
        <>
            <div className="portfolio m-5" id='Portfolio'>
                <div className='blur s-blur1' style={{ background: "var(--blue)", width: '80rem' }}></div>
                <span style={{color:darkMode?'white':''}}>My Recent Projects</span>
                <span>Portfolio</span>

                <Swiper spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className='portfolio-slider'>
                    {projectsData.map(project => (
                        <SwiperSlide key={project.id}>
                            <div className="project">
                                <div className='blur s-blur1' style={{ background: "var(--violet)", width: '80rem' }}></div>
                                <h2>{project.title}</h2>
                                <button className='btn text-primary' onClick={() => toggleProjectDetails(project.id)}>
                                    {expandedProject === project.id ? 'Hide Data' : 'Learn More...'}
                                </button>
                                {expandedProject === project.id && (
                                    <div className="additional-details">
                                        <p>{project.description}</p>
                                    </div>
                                )}

                                <img src={project.image} alt="" />
                                <a href={project.link}>View Project</a>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Portfolio