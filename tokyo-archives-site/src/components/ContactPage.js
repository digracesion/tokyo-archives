import { Parallax } from 'react-parallax';
import { Button, Input, InputGroup } from 'reactstrap';

import img from '../img/background/bg4.JPG';

const ContactPage = () => (
    <Parallax classname='image' blur={10} bgImage={img} bgImageAlt="Contact Page" strength={800}>
        <div classname='content'>
            <p>
                Have a question or want to get involved? Contact us today.
            </p>

            <form onSubmit={this.handleSubmit}>
                <InputGroup>
                    <label>Name:</label>
                    <Input type='text' name='name'/>
                </InputGroup>
                <InputGroup>
                    <label>Email Address:</label>
                    <Input type='email' name='email@service.com'/>
                </InputGroup>
                <InputGroup>
                    <label>Message:</label>
                    <Input type='textArea' name='Message'/>
                </InputGroup>
                <Button type='submit' name='Submit' value='Submit'></Button>
            </form>
        </div>
    </Parallax>
);

export default ContactPage;