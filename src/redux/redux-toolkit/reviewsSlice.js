import { createSlice } from "@reduxjs/toolkit";
import { createReview, fetchReviews } from "./asyncThunks";

const initialState = {
  isLoading: false,
  reviews: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createReview.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = [...state.reviews, action.payload.reviewBody];
    });

    builder.addCase(createReview.rejected, (state, action) => {
      state.isLoading = false;
      state.reviews = action.error.message;
    });

    builder.addCase(fetchReviews.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    });

    builder.addCase(fetchReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.reviews = action.error.message;
    });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
