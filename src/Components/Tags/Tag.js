import React from 'react';
import { useDispatch } from 'react-redux';
import { productTag } from '../../features/filters/FilterSlices';

const Tag = ({items}) => {

    const dispatch = useDispatch();
  const handleFilter = (tag) => {
    dispatch(productTag(tag))
  }

    return (
        <div className='md:gap-4'>
            <button onClick={()=> handleFilter('car')} className="btn btn-outline md:px-5 ms-2">Car</button>
            <button onClick={()=> handleFilter('bus')} className="btn btn-outline md:px-5 ms-2">Bus</button>
            <button onClick={()=> handleFilter('bike')} className="btn btn-outline md:px-5 ms-2">Bike</button>
            <button onClick={()=> handleFilter('cng')} className="btn btn-outline md:px-5 ms-2">Cng</button>
            <button onClick={()=> handleFilter('')} className="btn btn-outline md:px-5 ms-2">All</button>
        </div>
    );
};

export default Tag;