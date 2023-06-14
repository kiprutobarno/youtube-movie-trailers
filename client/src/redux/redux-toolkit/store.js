import { combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { moviesReducer } from "./moviesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./movieSlice";
import { reviewsReducer } from "./reviewsSlice";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  reviews: reviewsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
