const Model = {
  data: [],
};

const GET_CART_TOTAL = (state = Model, action) => {
  if (action.type === "GET_CART_TOTAL") {
    return {
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default GET_CART_TOTAL;
