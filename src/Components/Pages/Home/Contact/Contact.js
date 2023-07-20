import React from 'react';

const Contact = () => {
    return (
        <div className='mb-28 lg:w-11/12 lg:mx-auto'>
            <h1 className='font-bold md:text-5xl text-center'>If you want to know something, then contact us</h1>
            <div className='border-2 mx-auto md:w-11/12 md:p-20 p-10 shadow-2xl rounded-xl mt-20 '>
                <h1 className='font-bold text-center text-xl md:text-3xl'>Give your opinion</h1>
                <div className="text-center">
                    <input type="text" placeholder="Type here" className="input input-bordered contact-input md:w-96 mt-8 " /> <button className='btn btn-neutral px-6 ms-2'>SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;