import React from 'react';
import Products from '../Pages/Products/Products'
import Tags from '../Tags/Tags';
import InputFilter from '../InputFilter/InputFilter';

const ProductsPages = () => {
    return (
        <div>
            <h1 className='md:text-4xl font-bold mt-5'>All our products are here</h1>
            <div className='mt-14 flex justify-between w-11/12 mx-auto'>
                <div>
                    <Tags/>
                </div>
                <div>
                    <InputFilter/>
                </div>
                <div></div>
            </div>
            <div>
                <Products/>
            </div>
        </div>
    );
};

export default ProductsPages;