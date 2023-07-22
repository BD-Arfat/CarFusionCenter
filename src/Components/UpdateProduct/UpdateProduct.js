import React from 'react';
import UpdateForm from './UpdateForm';

const UpdateProduct = () => {
    return (
        <div><h1 className='text-center font-bold text-4xl mt-10'>Edit Your Product</h1>
            <div className='mt-16'>
                <UpdateForm/>
            </div>
        </div>
    );
};

export default UpdateProduct;