import axios from "axios";

const GET_CART_TOTAL = (uid, isBuy) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/getCartTotal/${uid}`,
        data: {
          isBuy: isBuy,
        },
      });
      dispatch({
        type: "GET_CART_TOTAL",
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default GET_CART_TOTAL;
