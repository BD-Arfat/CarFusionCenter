import React from 'react';
import Products from '../Pages/Products/Products'
import Tags from '../Tags/Tags';
import InputFilter from '../InputFilter/InputFilter';

const ProductsPages = () => {
    return (
        <div>
            <h1 className='md:text-4xl font-bold mt-5'>All our products are here</h1>
            <div className='mt-14 md:flex md:justify-between w-11/12 mx-auto'>
                <div className='mb-8'>
                    <Tags/>
                </div>
                <div>
                    <InputFilter/>
                </div>
            </div>
            <div>
                <Products/>
            </div>
        </div>
    );
};

export default ProductsPages;