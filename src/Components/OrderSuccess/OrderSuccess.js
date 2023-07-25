import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const OrderSuccess = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const transactionId = query.get('transactionId');
    console.log(transactionId)

    const [order, setOrder] = useState({});
    useEffect(() => {
        fetch(`https://car-shops-server-bd-arfat.vercel.app/orders/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [transactionId])
    console.log(order)

    return (
        <div>
            <h1 className='font-bold text-3xl'>You are able to pay for the product in any way</h1>
            <h2 className='font-bold mt-7'>Your transaction id : { order.transactionId}</h2>
            <div>
                <div className="overflow-x-auto mt-16 mb-20">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Transaction Id</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Pay Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>{order.transactionId}</td>
                                <td>{order.name}</td>
                                <td>{order.price}$</td>
                                <td>{order.paidAt}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
                    <h1 className='font-bold text-3xl mb-20 mt-16'>Please keep the screenshot</h1>
        </div>
    );
};

export default OrderSuccess;