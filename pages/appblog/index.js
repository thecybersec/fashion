import React from "react";

import AppBlogGrid from "../../components/Blog/AppBlogGrid";

import axios from "axios";

const Blog = ({ data }) => {
  return (
    <>
      <AppBlogGrid data={data} />
    </>
  );
};

export default Blog;

export const getServerSideProps = async () => {
  const response = await axios({
    method: "GET",
    url: "/api/blog/get",
  });

  return {
    props: {
      data: response.data,
    },
  };
};
