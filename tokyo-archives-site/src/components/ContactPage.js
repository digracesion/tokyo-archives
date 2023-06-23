import { Parallax } from 'react-parallax';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import img from '../img/background/bg4.JPG';
import logo from '../img/background/logo.png';

const ContactPage = () => (
    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="Contact Page" strength={800}>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <img className='mx-auto h-10 w-auto' src={logo} alt='Company Logo'/>
            </div>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Have a question or want to get involved? Contact us today.
            </h2>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className='space-y-6' ref={useRef()} onSubmit={sendEmail} action='#' method='POST'>
                        <div className='flex items-center justify-between'>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Name:</label>
                            <div className='mt-2'>
                                <input id='name' name='name' type='text' required classname='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Email Address:</label>
                            <div className='mt-2'>
                                <input id='email' type='email' name='email' autoComplete='email' required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <label className='block text-sm font-medium leading-6 text-gray-900'>Message:</label>
                            <div className='mt-2'>
                                <textarea id='message' type='textarea' name='message' required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                            </div>
                        </div>
                    <button type='submit' name='submit' className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </Parallax>

);

// const contactForm = useRef();

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, useRef.current, process.env.PUBLIC_KEY)
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.error(error);
        });
};
export default ContactPage;