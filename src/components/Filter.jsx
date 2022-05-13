import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Grid, TextField, Typography } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const debouncedOnChange = useDebouncedCallback(value => {
    dispatch(changeFilter(value));
  }, 500);

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography>Find contacts by name:</Typography>
        </Grid>

        <Grid item xs={20}>
          <TextField
            size="small"
            color="secondary"
            variant="outlined"
            label="Contact name"
            onChange={e => debouncedOnChange(e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
