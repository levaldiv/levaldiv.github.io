import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
    const links = [
        'https://www.linkedin.com/in/levaldiv/',
        'https://github.com/levaldiv',
        'https://www.facebook.com/luisvaldivia05/',
        'https://twitter.com/EseValdivia',
        'https://www.instagram.com/valdivia._/',
    ];

    return (
        <ListGroup>
            <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
                <Image 
                    alt='logo'
                    width='160'
                    height='180'
                    src={process.env.PUBLIC_URL + 'Valdivia.jpg'}
                    className="mb-2"
                    rounded
                />
                <h5 className="mb-4 text-white">@Luis.Valdivia</h5>
                {links.map((link) => (
                    <LinkButton key={link} link={link} />
                ))}
            </div>
        </ListGroup>
    );
};

export default LinkList;