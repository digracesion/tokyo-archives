import { Parallax } from 'react-parallax';

import img from '../img/background/bg3.JPG';

import eventLogo from '../img/project-0/project-0.png';

const EventPage = () => (
    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="project 0" strength={800}>
        <div className='bg-white'>
            <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
                <div>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Project 0</h1>
                    <p className='mt-4 text-gray-500'> New Memories, New Beginnings: Archived</p>
                </div>
                <div>
                    <img src={eventLogo} alt='Project 0 Logo'/>
                    <div className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
                        <p>Project 0 is our first event, aimed at bringing together creatives from different parts of Japan in order to learn and collaborate.</p>
                        <h3 className='text-base font-semibold leading-7 text-gray-900'> What is Project 0? </h3>
                        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>Project 0 is a one-day event focused on creativity and community. Divided into two main parts: The Seminar and The Shoot</p>
                        <h3 className='text-base font-semibold leading-7 text-gray-900'>Seminar</h3>
                        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>Team activities to facilitate and encourage your own journey as a photographer, videographer, model, content creator or anything in between, lectures by professionals in the industry, and of course networking opportunities!</p>
                        <h3 className='text-base font-semibold leading-7 text-gray-900'>Shoot</h3>
                        <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>A chance to experience a studio photoshoot with professional models, a makeup artist, and official lighting equipment. Concepts have been curated beforehand, so just come with your camera to shoot and have fun with it!</p>
                        {/* add modal for photos here */}
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default EventPage;