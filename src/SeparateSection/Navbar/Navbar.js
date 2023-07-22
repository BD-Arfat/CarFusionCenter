import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/CarFusionCenter-logo.png'
import { AuthContext } from '../../Components/Context/AuthContextProvider';
import { useQuery } from 'react-query';

const Navbar = () => {

    const items = <>
        <li><Link to={'/'} className='font-bold text-lg'>Home</Link></li>
        <li><Link to={'/about'} className='font-bold text-lg'>Abouts</Link></li>
        <li><Link to={'/products'} className='font-bold text-lg'>Products</Link></li>
        <li><Link className='font-bold text-lg'>Your Products</Link></li>
    </>
    const { user, logout } = useContext(AuthContext);
    const url = `http://localhost:5000/user?email=${user?.email}`;

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {

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

    return (
        <div>
            <div className="navbar bg-base-100 lg:w-11/12 lg:mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <Link draggable='true' to={'/'} className=""><img src={logo} alt="" className='w-20 rounded-full' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {items}
                    </ul>
                </div>



                <div className="navbar-end">
                    <Link className="btn btn-neutral text-white md:font-bold">+AddProducts</Link>
                </div>

                <div className="ms-3">
                    {
                        orders?.map(order => <div className="avatar">
                            <abbr title={order.name}>
                                <div className="w-10 rounded-full cursor-pointer">
                                    <img src={order.image} alt='' />
                                </div>
                            </abbr>

                        </div>)
                    }
                </div>

                {
                    user?.email ? <div onClick={handelLogout} className="ms-4">
                        <Link to={'/login'} className="btn btn-outline btn-neutral">LogOut</Link>
                    </div> : <div className="ms-4">
                        <Link to={'/login'} className="btn btn-outline btn-neutral">Login</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;