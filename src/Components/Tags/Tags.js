import React, { useEffect } from 'react';
import Tag from './Tag';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../features/Tags/TagsSlice';

const Tags = () => {

    const dispatch = useDispatch();
    const { tags, isLoading, isError, error } = useSelector((state) => state.tags);
    // console.log(tags)
    useEffect(() => {
        dispatch(fetchTags())
    }, [dispatch])

    let content;
    if (isLoading) content = <p className='error'>Loading...</p>;
    if (!isLoading && isError) content = <p className='error'>There was an error</p>;
    if (!isLoading && !isError && tags?.length === 0) content = <p className='error text-red-800 font-bold'>There is no tags</p>;
    if (!isLoading && !isError && tags?.length > 0) content = tags?.map(items => <Tag key={items._id} items={items.tag}/>);

    return (
        <div className='flex gap-4'>
            {content}
        </div>
    );
};

export default Tags;