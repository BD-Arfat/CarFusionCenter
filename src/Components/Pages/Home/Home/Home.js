import React from 'react';
import Banner from '../Banner/Banner';
import Abouts from '../Abouts/Abouts';
import SellProducts from '../SellProducts/SellProducts';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Abouts/>
            <SellProducts/>
            <Contact/>
        </div>
    );
};

export default Home;