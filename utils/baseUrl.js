const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://SpicyWhips-react.hibotheme.com"
    : "http://localhost:3000";

export default baseUrl;
