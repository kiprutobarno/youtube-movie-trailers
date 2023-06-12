import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const { data } = await api.get("/api/v1/movies");
  return data;
});

export const fetchMovie = createAsyncThunk("movie/fetchMovie", async (id) => {
  const { data } = await api.get(`/api/v1/movies/${id}`);
  return data;
});

export const createReview = createAsyncThunk(
  "reviews/addReview",
  async ({ reviewBody, imdbId }) => {
    try {
      const res = await api.post("/api/v1/reviews", { reviewBody, imdbId });
      return { reviewBody, imdbId };
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (id) => {
    const {
      data: { reviews },
    } = await api.get(`/api/v1/movies/${id}`);
    return reviews;
  }
);
