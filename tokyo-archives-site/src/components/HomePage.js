import { Parallax } from 'react-parallax';

import { Button } from 'reactstrap';

import img from '../img/background/bg1.JPG';
import logo from '../img/background/logo.png';

const HomePage = () => (

    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="the home background" strength={800}>
        <div classname='content'>
            <div classname='logo'>
                <img src={logo} alt="Tokyo Archives logo"/>
                <span classname='imgtxt'>“Framing memories, crafting stories, building community one creative at a time”</span>
            </div>
            <Button type='button' classname='pageBtn' onClick={handleButtonClick}>
                <label classname='buttonLabel'>Learn More</label>
            </Button>
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