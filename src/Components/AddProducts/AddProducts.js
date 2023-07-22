import React from 'react';
import Form from './Form';

const AddProducts = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-bold text-center'>You add your product</h1>
            <div className='mt-16 mb-20'>
                <Form />
            </div>
        </div>
    );
};

export default AddProducts;