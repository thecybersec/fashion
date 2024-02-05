import axios from "axios";

const GET_ALL_CATEGORY = () => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: "/api/category/getcategory",
      });
      dispatch({
        type: "GET_ALL_CATEGORY",
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default GET_ALL_CATEGORY;
