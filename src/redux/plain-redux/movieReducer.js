import { FETCH_MOVIE } from "./actions";

const initialState = [];

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return action.payload;

    default:
      return state;
  }
};
