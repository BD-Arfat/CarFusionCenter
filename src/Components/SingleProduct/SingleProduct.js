import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const SingleProduct = () => {
    const { user } = useContext(AuthContext)
    const product = useLoaderData();
    const { _id, image, name, price, model, } = product;

    const handlepay = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const model = form.model.value;
        const price = form.price.value;
        const currency = form.currency.value;
        const postcode = form.postcode.value;

        const data = {
            service: _id,
            name: name,
            email: email,
            model: model,
            price: price,
            currency: currency,
            postcode: postcode,
            image : image,
        };
        console.log(data);

        fetch("https://car-shops-server-bd-arfat.vercel.app/orders", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => {
            window.location.replace(data.url)
        })

    }

    return (
        <div>
            <h1 className='text-4xl font-bold'>You have to make payment first</h1>
            <div className="hero my-14">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} alt='' className=" lg:w-1/2 rounded-lg" />
                    <div className='text-justify'>
                        <form onSubmit={handlepay} className="hero">
                            <div className="hero-content">

                                <div className="card  w-full md:w-96">
                                    <div className="card-body">
                                        <div className='md:flex gap-5'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Product Name</span>
                                                </label>
                                                <input type="text" name='name' defaultValue={product.name} disabled className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Product Price</span>
                                                </label>
                                                <input type="text" name='price' defaultValue={product.price} disabled className="input input-bordered" />
                                            </div>
                                        </div>
                                        <div className='lg:flex gap-5'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Product Model</span>
                                                </label>
                                                <input type="text" name='model' defaultValue={model} disabled className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Your Email</span>
                                                </label>
                                                <input type="text" name='email' defaultValue={user?.email} disabled className="input input-bordered" />
                                            </div>
                                        </div>

                                        <div className='lg:flex gap-5'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Currency</span>
                                                </label>
                                                <select name='currency' className="select select-bordered max-w-xs">
                                                    <option value={'BDT'}>BDT</option>
                                                    <option value={'USD'}>USD</option>
                                                </select>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Your Postcode</span>
                                                </label>
                                                <input type="text" name='postcode' className="input input-bordered w-full" required/>
                                            </div>
                                        </div>

                                        <div className="form-control mt-6">
                                            <button className="btn btn-neutral w-full md:w-[450px]">pay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;