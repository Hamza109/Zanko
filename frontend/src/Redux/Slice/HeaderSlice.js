// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 headerText: 'Inbox',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    headerData(state, action) {
      state.headerText = action.payload;
    },
   
  },
});

export const {headerData} = headerSlice.actions;

export default headerSlice.reducer;
