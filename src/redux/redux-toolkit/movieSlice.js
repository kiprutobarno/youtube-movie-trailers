import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "./asyncThunks";

const initialState = {
  movie: [],
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movie = action.payload;
    });

    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.isLoading = false;
      state.movie = action.error.message;
    });
  },
});

export const movieReducer = movieSlice.reducer;
