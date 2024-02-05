import axios from "axios";

const LOGOUT_CHECK = (auth) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/checktokenExpiry",
        data: {
          token: auth,
        },
      });
      dispatch({
        type: "LOGOUT_CHECK",
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default LOGOUT_CHECK;
