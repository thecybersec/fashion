import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
const ProductArticles = ({ content }) => {
  const design = (
    <>
      <div className="subscribe-area pb-100">
        <div className="container">{ReactHtmlParser(content)}</div>
      </div>
    </>
  );
  return design;
};

export default ProductArticles;
