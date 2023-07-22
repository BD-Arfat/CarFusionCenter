import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({items}) => {
    
    return (
        <Link>
            <div className="card w-68 h-[350px] bg-base-100 border-2 hover:scale-110 transform transition duration-700 border-blue-700 shadow-xl">
                <div className="card-body">
                    <img src={items.image} className='h-[150px]' alt="" />
                    <h2 className="text-center text-lg font-bold">{items.name}</h2>
                    <p>Price : {items.price}</p>
                    <p>Model : {items.model}</p>
                </div>
            </div>
        </Link>
    );
};

export default Product;