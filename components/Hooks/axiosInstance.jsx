import Cookies from "universal-cookie";

const setHeader = () => {
  const Cookie = new Cookies();
  const Auth = Cookie.get("Auth");
  const t0k3n = `Bearer ${Auth}`;
  return t0k3n;
};

export default setHeader;
