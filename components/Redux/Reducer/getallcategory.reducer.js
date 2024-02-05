const Model = {
  data: [],
};

const GET_ALL_CATEGORY = (state = Model, action) => {
  if (action.type === "GET_ALL_CATEGORY") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default GET_ALL_CATEGORY;
