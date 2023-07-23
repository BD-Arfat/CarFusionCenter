import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';

const Product = ({ items }) => {

    const {name, _id, price, model, image} = items;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()

    const data = {
        servicId : _id,
        name : name,
        price : price,
        model : model,
        image : image,
        email : user?.email
    }

    const handleadd = () => {
        fetch("https://car-shops-server.vercel.app/orders", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            toast.success('successfull your Order');
            navigate('/order')
        })
    }
// end
    return (

        <div className="card w-[300px] mx-auto md:w-[280px] h-[380px] bg-base-100 border-2 hover:scale-110 transform transition duration-700 border-blue-700 shadow-xl">
            <div className="card-body">
                <img src={items.image} className='h-[150px]' alt="" />
                <h2 className="text-center text-lg font-bold">{items.name}</h2>
                <p>Price : {items.price}</p>
                <p>Model : {items.model}</p>
                <button onClick={handleadd} className='w-full btn-sm btn btn-info mt-2'>Order now</button>
            </div>
        </div>
    );
};

export default Product;