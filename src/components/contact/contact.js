import './contacct.css'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3m6seuv', 'template_o2vmjng', form.current, 'vjW4dZbEg3MoQS-0j')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  };
    return ( 
        <section className="contact" id="contact" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="1000" data-aos-offset="400">
                <h5>Get in Touch</h5>
                 <h2>Contact Me</h2>

                <div className="contact-main">
                    <div className="contact-left">
                        <div className="contact-social">
                            <AiOutlineMail />
                            <p>Email</p>
                            <p>Amirreza.gh75@gmail.com</p>
                            <a href="mailto:amirreza.gh75@gmail.com">Send a message</a>

                        </div>
                        <div className="contact-social">
                            <AiOutlineWhatsApp />
                            <p>WhatsApp</p>
                            <p>+989385617628</p>
                            <a href="https://wa.me/989385617628" target="_blank">Send a message</a>

                        </div>

                    </div>
                    <div className="contact-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Full Name" required/>
                            <input type="email" name="email" placeholder="Your Email" required/>
                            <textarea name="message" placeholder="Your message" name="" id="" cols="30" rows="10"></textarea>
                            <input className="submit" type="submit" value="Send" />

                        </form>

                    </div>
                </div>

        </section>
     );
}
 
export default Contact;