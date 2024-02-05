import axios from "axios";

axios.defaults.baseURL =
  "https://spicywhips-backend-develop-gex9g.ondigitalocean.app/";

const useAxios = () => {
  return axios;
};

export default useAxios;
