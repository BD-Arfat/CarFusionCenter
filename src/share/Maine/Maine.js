import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../SeparateSection/Navbar/Navbar';
import Footer from '../../SeparateSection/Footer/Footer';

const Maine = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Maine;