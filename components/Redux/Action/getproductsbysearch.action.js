import axios from "axios";

const GET_PRODUCTS_BY_SEARCH = (value) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/product/search",
        data: {
          search_key: value,
        },
      });
      dispatch({
        type: "GET_PRODUCTS_BY_SEARCH",
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default GET_PRODUCTS_BY_SEARCH;
