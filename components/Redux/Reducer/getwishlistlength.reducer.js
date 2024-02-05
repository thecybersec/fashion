const Model = {
  data: [],
};

const GET_WISHLIST_LENGTH = (state = Model, action) => {
  if (action.type === "GET_WISHLIST_LENGTH") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default GET_WISHLIST_LENGTH;
