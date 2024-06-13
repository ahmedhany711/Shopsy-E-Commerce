import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AllCategories = () => {


    const products = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    return (
        <div>

        </div>
    );
}

export default AllCategories;
