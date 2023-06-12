import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "./asyncThunks";

const initialState = {
  movies: [],
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });

    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.movies = action.error.message;
    });
  },
});

export const moviesReducer = moviesSlice.reducer;
