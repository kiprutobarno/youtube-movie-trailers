import { ADD_REVIEW, FETCH_REVIEWS } from "./actions";

const initialState = [];

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS:
      return action.payload;

    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload.reviewBody],
      };

    default:
      return state;
  }
};
