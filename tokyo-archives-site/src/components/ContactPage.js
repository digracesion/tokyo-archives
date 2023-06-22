import { Parallax } from 'react-parallax';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import img from '../img/background/bg4.JPG';

const ContactPage = () => {

    const contactForm = useRef();

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, contactForm.current, process.env.PUBLIC_KEY)
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.error(error);
            });
    };
    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="Contact Page" strength={800}>
        <div classname='content'>
            <p>
                Have a question or want to get involved? Contact us today.
            </p>

            <form ref={contactForm} onSubmit={sendEmail}>
                    <label>Name:
                        <input type='text' name='name'/>
                    </label>
                   
                    <label>Email Address:
                        <input type='email' name='email@service.com'/>
                    </label>
                    
                    <label>Message:
                        <textarea type='textarea' name='Message'/>
                    </label>
                <input type='submit' name='Submit' value='Submit'/>
            </form>
        </div>
    </Parallax>

};

export default ContactPage;