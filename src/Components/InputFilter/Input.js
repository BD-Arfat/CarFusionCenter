import React from 'react';
import { useDispatch } from 'react-redux';
import { searchParam, sortType } from '../../features/filters/FilterSlices';

const Input = () => {

    const dispatch = useDispatch();

    return (
        <div className='flex justify-between'>
            <div className="relative flex border-2 border-gray-300 items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                    className="peer h-full w-96 outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    onChange={(e) => dispatch(searchParam(e.target.value))}
                    placeholder="Search for Products" />
            </div>


            <select onChange={(e) => dispatch(sortType(e.target.value))} id="lws-sort" name="sort" autoComplete="sort" className=" select-bordered select lg:ms-32 border-gray-500">
                <option value='default'>Default</option>
                <option value='lowToHigh'>Salary (Low to High)</option>
                <option value='highToLow'>Salary (High to Low)</option>
            </select>

        </div>
    );
};

export default Input;