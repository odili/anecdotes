import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChange = e => {
    // console.log(e.target.value);
    dispatch(setFilter(e.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input value={filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
