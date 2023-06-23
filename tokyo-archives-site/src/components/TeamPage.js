import { Parallax } from 'react-parallax';


import img from '../img/background/bg2.JPG';
import austinPic from '../img/team/austin.png';
import jaidaPic from '../img/team/jaida.png';
import linoaPic from '../img/team/linoa.png';
import gracePic from '../img/team/grace.png';
import louPic from '../img/team/lou.png';
import sherryPic from '../img/team/sherry.png';
import lilianPic from '../img/team/lilian.png';
import azizPic from '../img/team/aziz.png';

const team = [
    {
        name: "Austin",
        description: "This Pokemon is passionate about bringing people together and creating memories. Hobbies include taking videos and photos, and going for short walks. Its little legs are not designed for distance. (I'm 5'6)",
        image: {austinPic}
    },
    {
        name: "Jaida",
        description: "Hello all, my name is Jaida and I'm a photographer currently based in Tokyo. Specializing in analog film and creative portraits, I am to capture moments wherever and whatever that may be for my clients. In my free time I enjoy doing just fun street portraits or styled shoots! Although photography is my passion as an art form, my other job is a bank teller! I'm married with no kids yet. Looking forward to this event!",
        image: {jaidaPic}
    },
    {
        name: "Linoa",
        description: "Hi everyone! My name is Linoa Mizoguchi. I started photography during the summer of 2022, and mostly do film photography, portraits and videography. My passion for photography and the connections I've made through it have given me the desire to be part of the hosting team for Project 0!",
        image: {linoaPic}
    },
    {
        name: "Grace",
        description: "Grace is a Filipino QA Engineer who moved to Japan in 2019 for work. She likes writing, reading, meeting new people, and doing photographer in her spare time. She joined Tokyo Archives because wanted to learn more than just the technical aspects of photography, but the deeper aspects of the processes involved in making a photography event happen as well.",
        image: {gracePic}
    },
    {
        name: "Lou",
        description: "Passionate about makeup, photography, crochet and knitting. I'm seeking connections with fellow creatives in Tokyo, Japan. My chapter here might end soon but at least I'm making an impact on others' creative paths and that gives me a purpose to wake up and keep trying everyday.",
        image: {louPic}
    },
    {
        name: "Sherry",
        description: "Hi all, my name is Sherry and I moved here to Tokyo from Seattle over a year ago. I love taking pictures of people and capturing daily life moments, special and small. I also enjoy recording pretty much anything that catches my eyes. Other past times of mine include singing, drawing, laying in bed with my cat, thrifting for clothes, and avidly drinking coffee.",
        image: {sherryPic}
    },
    {
        name: "Lilian",
        description: "Hello!! I was gifted my first ever film camera in 2019 by my brother and have fallen in love with capturing candid moments on film ever since. Since then, I have also played around with shooting and making short camcorder vlogs to continue capturing and digitizing precious memories.",
        image: {lilianPic}
    },
    {
        name: "Aziz",
        description: "An adventurous soul with a passion for traveling, capturing moments through photography, and diving into the captivating world of books. I thrive on exploring new things and embracing challenges along the way. So , buckle up and join me on this exciting journey of discovery and growth!",
        image: {azizPic}
    }
]
const TeamPage = () => (
    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="the team background" strength={800}>
        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Meet the Team</h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'> Our team is made up of passionate and dedicated individuals who share a vision for a better world </p>
        <div classname='content'>
            <ul className='divide-y divide-gray-200'>
                {team.map((member) => (
                    <li key={member.name} className='py-4 flex'>
                        <image className='h-10 w-10 rounded-full' src={member.image} alt='member photo'/>
                        <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-900'>{member.name}</p>
                            <p className='text-sm text-gray-500'>{member.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </Parallax>
);

export default TeamPage;