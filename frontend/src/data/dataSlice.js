import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import api from '../services/Api';

const initialState = {
  blogs: [],
};

const getData = createAsyncThunk('/blogs', async () => {
  useEffect(() => {
    api.get('/api/blogs').then((response) => {
      console.log(response.data);
    });
  }, []);
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,

  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
