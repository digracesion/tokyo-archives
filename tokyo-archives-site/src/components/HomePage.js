import { Parallax } from 'react-parallax';

import img from '../img/background/bg1.JPG';
import logo from '../img/background/logo.png';

const HomePage = () => (

    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="the home background" strength={800}>
        <div className='mx-auto max-w-2xl px-6 lg:px-8 text-center justify-center'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
                <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'> Tokyo Archives </h2>
                <img src={logo} alt="Tokyo Archives logo"/>
                <p className='mt-6 text-lg leading-8 text-gray-300'>"Framing memories, crafting stories, building community one creative at a time”</p>
            </div>
            <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
                <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
                    <a href='#team'> Meet the Team <span aria-hidden="true">&rarr;</span></a>
                    <a href='#events'> Our Events <span aria-hidden="true">&rarr;</span></a>
                    <a href='#contact'> Contact us<span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
        </div>
    </Parallax>
);
function getCurrentURL(){
    return window.location.href;
}

const handleButtonClick = () => {
    let path = getCurrentURL();
    let newPath = path + '/home';
    window.location.replace(newPath);
}
export default HomePage;