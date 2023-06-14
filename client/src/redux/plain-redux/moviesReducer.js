import { FETCH_MOVIES } from "./actions";

const initialState = [];

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;

    default:
      return state;
  }
};
