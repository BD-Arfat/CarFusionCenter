import React, { useEffect } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../features/Products/ProductsSlice';

const Products = () => {

    const dispatch = useDispatch();
    const { products, isLoading, isError, error } = useSelector((state) => state.products);
    const { tag, search, sort } = useSelector((state) => state.filter)
    // console.log(products)
    useEffect(() => {
        dispatch(fetchProducts(tag))
    }, [dispatch, tag])

    let content;
    if (isLoading) content = <p className='error'>Loading...</p>;
    if (!isLoading && isError) content = <p className='error'>There was an error</p>;
    if (!isLoading && !isError && products?.length === 0) content = <p className='error text-red-800 font-bold'>There is no products</p>;
    if (!isLoading && !isError && products?.length > 0) content = products?.filter(items => {
        if (tag === 'car') {
            return (items.tag === tag)
        }
        else if (tag === 'bus') {
            return (items.tag === tag)
        }
        else if (tag === 'bike') {
            return (items.tag === tag)
        }
        else if (tag === 'cng') {
            return (items.tag === tag)
        }
        else {
            return items
        }
    }).filter(items => items.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'lowToHigh') { return (Number(a.price) - Number(b.price)) }
            else if (sort === 'highToLow') { return (Number(b.price) - Number(a.price)) }
            else { return null }
        })
        .map(items => <Product key={items._id} items={items} />);

    return (
        // products map
        <div>
            <div className='grid mt-20 gap-5 md:w-11/12 md:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16'>
                {content}
            </div>
        </div>
    );
};

export default Products;