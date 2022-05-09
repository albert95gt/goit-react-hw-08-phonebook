import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const debouncedOnChange = useDebouncedCallback(value => {
    dispatch(changeFilter(value));
  }, 500);

  return (
    <>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        name="filter"
        id="filter"
        onChange={e => debouncedOnChange(e.target.value)}
      />
    </>
  );
};

export default Filter;
