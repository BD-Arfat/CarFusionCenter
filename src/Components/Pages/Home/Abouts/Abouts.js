import React from 'react';
import aboutImage from '../../../../images/car-shop.gif'

const Abouts = () => {
    return (
        <div className=' lg:w-11/12 lg:mx-auto'>
            <h1 className='font-bold text-center  md:text-5xl'>Abouts Suzuki Motor</h1>
            <div className="hero md:mt-28">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={aboutImage} alt='' className=" w-full md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='md:w-1/2 w-full md:ms-3 text-left'>
                        <h1 className="text-4xl font-bold">Suzuki Motor Corporation</h1>
                        <p className="py-6 text-justify">In 1909, Michio Suzuki (1887–1982) founded the Suzuki Loom Works in the small seacoast village of Hamamatsu, Japan. Business boomed as Suzuki built weaving looms for Japan's giant silk industry. In 1929, Michio Suzuki invented a new type of weaving machine, which was exported overseas. The company's first 30 years focused on the development and production of these machines.

                            Despite the success of his looms, Suzuki believed that his company would benefit from diversification and he began to look at other products. Based on consumer demand, he decided that building a small car would be the most practical new venture. The project began in 1937.</p>
                        <button className="btn  w-full md:w-44 font-bold items-cards">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouts;