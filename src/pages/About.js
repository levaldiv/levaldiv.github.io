import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import '../components/WidthLimit.scss';

const About = () => {
    const profile = (
        <Image 
        alt='logo'
        width='160'
        height='180'
        src={process.env.PUBLIC_URL + 'Valdivia.jpg'}
        className="mb-3"
        rounded
    />
    );
    
    return (
        <ListGroup>
            <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
                {profile}
                <h4 className="text-white mb-4">
                    <strong>About Me..</strong>
                </h4>
                <h5 className="text-white mb-5 max-button">
                    Dedicated, organized, and self-directed team player. Learning
                    to code one language at a time. I enjoy coding, socializing with friends, 
                    and outdoor activities.
                </h5>
                <Button 
                    variant="outline-light" 
                    href={process.env.PUBLIC_URL + 'Resume2.pdf'}
                    size="lg"
                    download
                >
                    My Resume
                </Button>
            </div>
        </ListGroup>
    );
};

export default About;