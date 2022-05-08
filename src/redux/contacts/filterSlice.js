import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
