import { ADD_REVIEW } from "./actions";

const initialState = [];

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...state,
        reviews: [...state.reviews, action.payload.reviewBody],
      };

    default:
      return state;
  }
};
