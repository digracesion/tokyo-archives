import { Parallax } from 'react-parallax';

import img from '../img/background/bg3.JPG';

import eventLogo from '../img/project-0/project-0.png';

const EventPage = () => (
    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="project 0" strength={800}>
        <div class='eventlist'>
            <div classname='eventContainer'>
                <h1>Project 0</h1>
                <span classname='imgtxt'> New Memories, New Beginnings: Archived</span>
                <div classname='content'>
                    <img src={eventLogo} alt='Project 0 Logo'/>
                    <div classname='projectZero'>
                        <p>
                        Project 0 is our first event, aimed at bringing together creatives from different parts of Japan in order to learn and collaborate.
                        </p>
                        <h3> What is Project 0? </h3>
                        <p>
                        Project 0 is a one-day event focused on creativity and community. Divided into two main parts: The Seminar and The Shoot
                        </p>
                        <h3>
                            Seminar
                        </h3>
                        <p>
                            Team activities to facilitate and encourage your own journey as a photographer, videographer, model, content creator or anything in between, lectures by professionals in the industry, and of course networking opportunities!
                        </p>
                        <h3>
                            Shoot
                        </h3>
                        <p>
                            A chance to experience a studio photoshoot with professional models, a makeup artist, and official lighting equipment. Concepts have been curated beforehand, so just come with your camera to shoot and have fun with it!
                        </p>
                        {/* add modal for photos here */}
                    </div>
                </div>
            </div>
        </div>
        

        
            Content goes here. Parallax height grows with content height.
    </Parallax>
);

export default EventPage;