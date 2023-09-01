import React from 'react';
import web from '../images/about.jpg';
// import { Link } from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About page"
                lastname=""
                imgsrc={web}
                visit='/contact'
                btnName='Contact Now'
                content={`Hey there! I'm a frontend developer from India. I've built various user-friendly websites that look fantastic. Take a peek into my journey, explore my projects, and see how I blend design and tech to create impressive online experiences. Let's dive into the world of web development together!`}
            />

        </>
    );
}

export default About;
