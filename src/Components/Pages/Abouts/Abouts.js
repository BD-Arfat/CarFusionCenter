import React from 'react';
import { Link } from 'react-router-dom';

const Abouts = () => {
    return (
        <div className='md:w-11/12 md:mx-auto'>
            <div className='bg-black md:-mt-12 p-7'>
                <h1 className='text-justify text-white font-bold text-3xl md:text-4xl'>About Us</h1>
            </div>
            <div className='mt-10 mb-20 gap-4 md:mx-0 md:flex mx-3'>
                <div className='text-justify w-full md:w-9/12'>
                    <h1 className='font-bold'>Thank you for visiting <Link to={'/'} className='text-amber-500' href="">CarFashionCenter.com</Link></h1>
                    <h1 className='font-bold my-3'>Your source for used vehicles in Victoria</h1>
                    <p className='text-[18px] my-4'>
                        Ina Motors offers a pre-owned inventory that ranges from economic cars to luxury vehicles at affordable prices. With almost daily inventory updates, we strive to find you the vehicle you’ve been looking for. Please follow us on Facebook: <a target='blank' className='font-bold text-amber-500' href="https://www.facebook.com/profile.php?id=100053190180040">https://www.facebook.com/inamotors</a> to receive inventory updates. Please call us: <span className="font-bold text-amber-400">778-406-0610</span>
                    </p>
                    <p className='text-[18px] my-4'>
                        All vehicles at Ina Motors are mechanically inspected and come with a CarProof/ICBC report. A $699 documentation fee is applied to every vehicle. We also offer a variety of affordable extended warranty options giving you confidence and peace of mind with your purchase.
                    </p>
                    <p className='text-[18px] my-4'>
                        Please note, we do have a secondary storage facility to house our cars. If you have visited after hours and don’t see a specific unit, please call and one of our friendly staff will be able to assist you.
                    </p>
                    <p className='text-[20px]'>
                        Please visit our dealership at:
                    </p>
                    <p className='my-3 font-bold text-[17px]'>Westshore</p>
                    <p className='text-[18px]'>
                        719 Station Ave <br />
                        Langford, BC V9B 4M1 <br />
                        <p className='text-amber-500 font-bold'>778-406-0610</p>
                    </p>
                </div>
                <div className='text-justify w-full md:w-96 md:-mt-10 mt-7 bg-slate-200'>
                    <h1 className='bg-red-700 text-center font-bold text-white p-4'>Contact Us</h1>
                    <h1 className='bg-slate-700 text-center font-bold text-white p-2'>Finance Application</h1>
                    <div className='ps-5 mt-5'>
                        <h1 className='text-[18px]'>Contact us</h1>
                        <p className='mt-3 text-[15px] mb-3'>
                            <p>719 Station Ave,</p>
                            <p> Victoria, BC</p>
                            <p className='mt-1'><span className='font-bold'>Local</span> (778) 406-0610</p>
                            <p className='mt-1'><span className="font-bold">Toll Free</span> 1(877) 665-4264</p>
                        </p>
                        <h1 className='text-[18px] my-3'>
                            Hours of Operation
                        </h1>
                        <div>
                        
                            <p className='flex justify-between px-2 pb-16 pt-2'>
                                <div>
                                    <h1 className='font-bold'>Monday</h1>
                                    <h1 className='font-bold'>Tuesday</h1>
                                    <h1 className='font-bold'>Wednesday</h1>
                                    <h1 className='font-bold'>Thursday</h1>
                                    <h1 className='font-bold'>Friday</h1>
                                    <h1 className='font-bold'>Saturday</h1>
                                    <h1 className='font-bold'>Sunday</h1>
                                </div>
                                <div>
                                    <h1 className='font-bold'>7:30am - 5:30pm</h1>
                                    <h1>7:30am - 5:30pm</h1>
                                    <h1>7:30am - 5:30pm</h1>
                                    <h1>7:30am - 5:30pm</h1>
                                    <h1>7:30am - 5:30pm</h1>
                                    <h1>By Appointment</h1>
                                    <h1>Closed</h1>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouts;