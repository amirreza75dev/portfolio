import './skills.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
const Skills = () => {
    return ( 
        <section className="skills" id="skills" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000" data-aos-offset="400"  data-aos-mirror="true" >
                 <h5>What Skills I Have</h5>
                 <h2>My Experience</h2>

                 <div className="skills-main">
                     <div className="skill-left">
                         <h4>Front-End Development</h4>
                        <div className="front-skills">
                            <p>
                                <AiOutlineCheckCircle />
                                Html
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                Css
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                javascript
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                React
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                BootStrap
                            </p>
                        </div>
                     </div>
                     <div className="skill-right">
                         <h4>Soft Skills</h4>
                        <div className="soft-skills">
                            <p>
                                <AiOutlineCheckCircle />
                                 Teamwork
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                Problem-Solving
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                Time Management
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                Fast Learner
                            </p>
                            <p>
                                <AiOutlineCheckCircle />
                                Work ethic
                            </p>
                        </div>
                     </div>


                     
                 </div>




        </section>
     );
}
 
export default Skills;