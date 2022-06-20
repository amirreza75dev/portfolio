import './header.css'
import {useTypeWriter} from '../useTypeWriter/useTypeWriter'

import {BsLinkedin,BsGithub,BsPerson,BsFileCode} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'
import {TbHeartHandshake} from 'react-icons/tb'
import {FaWpforms} from 'react-icons/fa'
import { Link as LinkS, animateScroll as scroll,  } from 'react-scroll'
import { useEffect, useState } from 'react'

const Header = () => {
    const scrollTOBottom = ()=>{
        scroll.scrollToBottom();
    }
    



    const occu = ["Front-End Developer", "Software Developer"]


    const job = useTypeWriter(occu)
    


    return ( 
        <section className="header" id="header">
            <div className="header-detail">
                <small>Hello i'm</small>
                <h2>  
                    Amirreza Gholami


               </h2>
                <small className="typewriter"> {job}  </small>
                <div className="btns">
                    <button className="btn-one"><a href="/assets/amirreza-gholami.pdf">Download Cv</a></button>
                    <button className="btn-two"><LinkS activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
                        Let's Talk
                     </LinkS></button>
                </div>
            </div>
            <div className="protfolio-img">
                <img src="/assets/developer.svg" alt=""/>
            </div>
            <div className="header-social">
                <a href="https://www.linkedin.com/in/amirreza75dev/" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/amirreza75dev" target="_blank"><BsGithub /></a>
                <a href="#" className="line"></a>
                
            </div>
            <div className="scroll-down">
               <p onClick={scrollTOBottom} > Scroll down</p>
            </div>
            <div className="nav">
            <LinkS activeClass="active" to="header" spy={true} smooth={true} offset={-10} duration={500}>
            <AiOutlineHome />
            </LinkS>
            <LinkS activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} >
            <BsPerson />
            </LinkS>
            <LinkS activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} >
            <BsFileCode />
            </LinkS>
            <LinkS activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} >
            <TbHeartHandshake />
            </LinkS>
            <LinkS activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >
            <FaWpforms />
            </LinkS>
                    {/* <a href=""><AiOutlineHome /></a>
                    <a href=""><BsPerson /></a>
                    <a href=""><BsFileCode /></a>
                    <a href=""><TbHeartHandshake /></a>
                    <a href=""><FaWpforms /></a> */}
              
                
                
            </div>
        </section>
     );
}
 
export default Header;