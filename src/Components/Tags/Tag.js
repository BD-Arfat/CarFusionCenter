import React from 'react';
import { useDispatch } from 'react-redux';
import { productTag } from '../../features/filters/FilterSlices';

const Tag = ({items}) => {

    const dispatch = useDispatch()

    return (
        <div>
            <button className="btn btn-outline px-5">{items}</button>
        </div>
    );
};

export default Tag;