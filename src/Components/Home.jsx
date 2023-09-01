import React from 'react';
import web from '../images/home.jpg';
// import { Link } from 'react-router-dom';
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" lastname="CodeFusion Academy" imgsrc={web} visit='/service' btnName='Get Started' content="We are the team of talented developers making websites" />
        </>
    );
}

export default Home;
