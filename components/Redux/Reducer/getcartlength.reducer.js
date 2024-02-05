const Model = {
  data: [],
};

const GET_CART_LENGTH = (state = Model, action) => {
  if (action.type === "GET_CART_LENGTH") {
    return {
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default GET_CART_LENGTH;
