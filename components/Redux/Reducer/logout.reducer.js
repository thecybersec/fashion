const Model = {
  data: [],
};

const LOGOUT_CHECK = (state = Model, action) => {
  if (action.type === "LOGOUT_CHECK") {
    return {
      ...state,
      data: action.payload,
    };
  } else {
    return state;
  }
};

export default LOGOUT_CHECK;
