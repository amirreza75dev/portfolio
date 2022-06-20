import {AiOutlineFieldTime} from 'react-icons/ai'
import {BsPersonBoundingBox} from 'react-icons/bs'
import {MdWorkOutline} from 'react-icons/md'
import './about.css'

import { Link as LinkS, animateScroll as scroll,  } from 'react-scroll'
import { useEffect } from 'react';
const About = () => {

    return ( 
        <section data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-mirror="true"
        
        className="about" id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="about-main" data-aos="slide-left" data-aos-delay="50" data-aos-duration="1000">
                <div className="about-img" data-aos="slide-right" data-aos-delay="50" data-aos-duration="1000">
                    <img src="/assets/programming.svg" alt=""/>
                </div>
                <div className="about-detail">
                    <div className="about-boxs" >
                        <div>
                            <AiOutlineFieldTime />
                            <h3>Experience</h3>
                            <p>junior Developer</p>

                        </div>
                        <div>
                            <BsPersonBoundingBox />
                            <h3>Clients</h3>
                            <p>Several projects</p>

                        </div>
                        <div>
                            <MdWorkOutline />
                            <h3>Projects</h3>
                            <p>Check the Github</p>

                        </div>

                    </div>
                    <div className="about-text">
                        <p>I am a self-taught programmer interested in web development and designing websites. Also, I am passionate about
learning new technologies related to web development. I am motivated to collaborate with other programmers to
develop new software.</p>

                    </div>

                    <button className="btn-two"><LinkS activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                        Let's Talk
                     </LinkS></button>
                </div>
            </div>
        </section>
     );
}
 
export default About;