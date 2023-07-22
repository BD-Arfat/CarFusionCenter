import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const naveigate = useNavigate()
    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        const data = {
            name,
            email,
            password,
            image
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                
                form.reset();
                fetch("http://localhost:5000/users", {
                    method: "POST", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    toast.success('successfull you Register !!!!!!!!')
                    naveigate('/')
                })
            })
            .catch(error => {
                toast.error(error.massage)
                console.error(error)
            })
    }

    return (
        <div>
            <div className="flex flex-col items-center md:my-8 pt-6 sm:justify-center sm:pt-0">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Register Now
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleRegister}>

                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 text-left"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1  rounded-md shadow-sm border p-4 border-black"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 text-left"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    required
                                    type="email"
                                    name='email'
                                    className="block w-full mt-1  rounded-md shadow-sm border p-4 border-black"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 text-left "
                            >
                                Image url
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    required
                                    type="url"
                                    name="image"
                                    className="block w-full mt-1 border border-black rounded-md p-4"
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
                                    required
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border border-black rounded-md p-4"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-4 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Have you created an account before?{" "}
                        <span>
                            <Link to={'/login'} className="text-purple-600 hover:underline" href="#">
                                Login
                            </Link>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;