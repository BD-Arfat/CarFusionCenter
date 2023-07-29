import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const UpdateForm = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const storeProduct = useLoaderData();
    const [product, setProduct] = useState(storeProduct)




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product)
        const form = e.target;
        const name = form.productName.value;
        const model = form.productModel.value;
        const price = form.ProductPrice.value;
        const image = form.productImage.value;
        const tag = form.tag.value;
        const email = form.email.value;
        const data = {
            name: name,
            model: model,
            price: price,
            image: image,
            tag: tag,
            email: email,
        };
        // console.log(data)
        fetch(`https://car-shops-server-bd-arfat.vercel.app/products/${storeProduct._id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('successfull add your Product');
                navigate('/yourProducts')
            })
    }

    return (
        // start Form
        <div>
            <form onSubmit={handleSubmit} class="w-11/12 mx-auto">
                <div class="flex flex-wrap -mx-3 mb-6">
        // Products Name
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Products Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='productName' defaultValue={storeProduct.name} placeholder="name" required />
                    </div>
        // Products Price
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Products Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" name='ProductPrice' placeholder="price" defaultValue={storeProduct.price} required />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
        // Products Model
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Products Model
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" name='productModel' placeholder="model" defaultValue={storeProduct.model} required />
                    </div>
        // Products Image Url
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Product Image Url
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="url" name='productImage' placeholder="image url" defaultValue={storeProduct.image} required />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
        // Products Tags
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Products Tags please
                        </label>
                        <select name='tag' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 select " defaultValue={storeProduct.tag} required>
                            <option>car</option>
                            <option>bus</option>
                            <option>cng</option>
                            <option>bike</option>
                        </select>
                    </div>
        // Your Emil
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-left text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Your Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" name='email' placeholder="email" defaultValue={user?.email} disabled required />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">

                    <div class="flex justify-between w-full px-3">

                        <button class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded w-full" type="submit">
                            Edit Your Products
                        </button>
                    </div>

                </div>

            </form>
        </div>
// end form
    );
};

export default UpdateForm;
