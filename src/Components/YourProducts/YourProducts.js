import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Components/Context/AuthContextProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const YourProducts = () => {

    const { user } = useContext(AuthContext)

    const url = `https://car-shops-server-bd-arfat.vercel.app/product?email=${user?.email}`

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {

            });
            const data = await res.json();
            return data;
        }
    });

    const hendelDelete = id =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`https://car-shops-server-bd-arfat.vercel.app/products/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The Order you want to delete has been successfully deleted')
                }
            })
           
        }
    }

    return (
        <div className='mb-20'>
            <h1 className='md:text-4xl text-2xl font-bold text-dark mt-16'>Everything you ordered is here</h1>
            <h1 className='text-dark mt-8 font-bold mg:text-3xl text-left md:text-center ms-3 md:ms-0'>You have added {products.length} products</h1>
            <div className='mt-12'>
                <div className="lg:mx-20">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th></th> */}
                                <th className='md:font-bold text-[5px] text-dark md:text-lg'>Image</th>
                                <th className='md:font-bold text-[5px] text-dark md:text-lg'>Name</th>
                                {/* <th className='md:font-bold text-[5px] text-dark md:text-lg'>Email</th> */}
                                <th className='md:font-bold text-[5px] text-dark md:text-lg'>Price</th>
                                <th className='md:font-bold text-[5px] text-dark md:text-lg'>Delete</th>
                                <th className='md:font-bold text-[5px] text-dark md:text-lg'>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                products.map((items, i) => <tr key={items._id}>
                                    {/* <th className='text-[7px] md:text-[15px] text-dark'>{i + 1}</th> */}
                                    <th className=''><div className="avatar">
                                        <div className="md:w-12 w-8 rounded-full">
                                            <img src={items.image} alt='' />
                                        </div>
                                    </div></th>
                                    <td className='text-[5px] font-bold md:text-[15px] text-dark'>{items.name}</td>
                                    {/* <td className='text-[5px] font-bold md:text-[15px] text-dark'>{items.email}</td> */}
                                    <td className='text-[5px] font-bold md:text-[15px] text-dark'>{items.price}$</td>
                                    <td className=''><button onClick={() => hendelDelete(items._id)} className='btn text-[5px] text-dark btn-sm btn-error md:text-[15px]'>Delete</button></td>
                                    <td><Link to={`/product/${items._id}`} className='btn text-[5px] text-dark btn-sm py-[5px] btn-success md:text-[15px]'>Edit</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default YourProducts;