const Model = {
  data: [],
};

const GET_PRODUCTS_BY_SEARCH = (state = Model, action) => {
  if (action.type === "GET_PRODUCTS_BY_SEARCH") {
    return {
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default GET_PRODUCTS_BY_SEARCH;
