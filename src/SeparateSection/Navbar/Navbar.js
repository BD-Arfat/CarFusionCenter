import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/CarFusionCenter-logo.png'
import { AuthContext } from '../../Components/Context/AuthContextProvider';
import { useQuery } from 'react-query';

const Navbar = () => {

    // 

    

    // 

    const { user, logout } = useContext(AuthContext);
    const orderUrl = `https://car-shops-server.vercel.app/order?email=${user?.email}`
    const productUrl = `https://car-shops-server.vercel.app/product?email=${user?.email}`

    const { data: orders = [] } = useQuery({
        queryKey: ['order', user?.email],
        queryFn: async () => {
            const res = await fetch(orderUrl, {

            });
            const data = await res.json();
            return data;
        }
    });

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(productUrl, {

            });
            const data = await res.json();
            return data;
        }
    });


    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => { })
    }

    const items = <>
        <li><Link to={'/'} className='font-bold text-lg'>Home</Link></li>
        <li><Link to={'/about'} className='font-bold text-lg'>Abouts</Link></li>
        <li><Link to={'/products'} className='font-bold text-lg'>Products</Link></li>
        {
            user?.email ? <>
                <li><Link to={'/order'} className='font-bold text-lg'>Your Order
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{orders?.length}</span>
                            </div>
                        </label>
                    </div>
                </Link></li>
                <li><Link to={'/yourProducts'} className='font-bold text-lg'>Your Products

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{products?.length}</span>
                            </div>
                        </label>
                    </div>
                </Link></li>
            </> : null
        }
    </>


    return (
        <div className='bg-white md:overflow-hidden fixed top-0 left-0 right-0 shadow-2xl z-50'>
            <div className="navbar lg:w-11/12 lg:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <Link draggable='true' to={'/'} className=""><img src={logo} alt="" className='w-24 rounded-full' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>


                <div className="navbar-end">
                    {
                        user?.email?<Link to={'/addProducts'} className="btn btn-neutral text-white md:font-bold">+AddProducts</Link> : null
                    }
                </div>

                <div>
                    {
                        user?.email ? <>
                            <div className="ms-3">
                                <div className="w-10 rounded-full cursor-pointer">
                                    <img className='rounded-full' src={`https://ui-avatars.com/api/?name=${user?.email}`} alt='' />
                                </div>
                            </div>
                        </> : null
                    }

                    {
                        user?.email ? <div onClick={handelLogout} className="ms-4">
                            <Link to={'/login'} className="btn btn-outline btn-neutral">LogOut</Link>
                        </div> : <div className="ms-4">
                            <Link to={'/login'} className="btn btn-outline btn-neutral">Login</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;