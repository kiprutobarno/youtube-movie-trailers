import api from "../api/axiosConfig";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";
export const ADD_REVIEW = "ADD_REVIEW";

export const fetchMovie = (id) => async (disptach) => {
  try {
    const { data } = await api.get(`/api/v1/movies/${id}`);
    disptach({
      type: FETCH_MOVIE,
      payload: data,
    });
  } catch (error) {}
};

export const fetchMovies = () => async (dispatch) => {
  try {
    const { data } = await api.get("/api/v1/movies");
    dispatch({
      type: FETCH_MOVIES,
      payload: data,
    });
  } catch (error) {}
};

export const createReview = (reviewBody, imdbId) => async (dispatch) => {
  try {
    await api.post("/api/v1/reviews", { reviewBody, imdbId });
    dispatch({
      type: ADD_REVIEW,
      payload: { reviewBody, imdbId },
    });
  } catch (error) {}
};
