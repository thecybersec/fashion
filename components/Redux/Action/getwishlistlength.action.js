import axios from "axios";

const GET_WISHLIST_LENGTH = (uid) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: `/api/user/getWishlistLength/${uid}`,
      });
      dispatch({
        type: "GET_WISHLIST_LENGTH",
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default GET_WISHLIST_LENGTH;
