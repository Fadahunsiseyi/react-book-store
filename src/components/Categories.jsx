import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';
import '../styles/Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);
  const handleStatus = () => {
    dispatch(checkBookStatus(status));
  };
  return (
    <div className="categories">
      <button type="button" onClick={handleStatus}>Check status</button>
      <h5>{status}</h5>
    </div>
  );
};

export default Categories;
