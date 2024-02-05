import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/fontawesome.min.css";
import "../styles/footer.css";
import "../styles/header.css";
import "react-tabs/style/react-tabs.css";
import "react-image-lightbox/style.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../styles/style.css";
import "../styles/responsive.css";
import storage from "../components/Redux/storage";
import Layout from "../components/_App/Layout";
import { Provider } from "react-redux";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Provider store={storage}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
};

export default MyApp;
