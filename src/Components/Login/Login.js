import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { toast } from 'react-hot-toast';

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const naveigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       
        loginUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log(user)
            toast.success('successfull you Login !!!!!!!!')
            form.reset();
            naveigate('/')
        })
        .catch(error => {
            toast.error(error.massage)
        })
    }

    return (
        <div>
            <div className="flex flex-col items-center md:my-28 pt-6 sm:justify-center sm:pt-0">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Login now
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 text-left"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1  rounded-md shadow-sm border p-4 border-black"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 text-left "
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border border-black rounded-md p-4"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-4 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                    Don't have an account??{" "}
                        <span>
                            <Link to={'/register'} className="text-purple-600 hover:underline" href="#">
                                Register
                            </Link>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;