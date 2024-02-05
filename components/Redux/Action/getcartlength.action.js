import axios from "axios";

const GET_CART_LENGTH = (uid) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/getCartLength/${uid}`,
      });
      dispatch({
        type: "GET_CART_LENGTH",
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default GET_CART_LENGTH;
