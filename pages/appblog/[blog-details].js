import React from "react";
import Head from "next/head";
import TopHeader from "../../components/_App/TopHeader";
import Navbar from "../../components/_App/Navbar";
import AppBlogDetailsContent from "../../components/Blog/AppBlogDetailsContent";
import SubscribeForm from "../../components/Common/SubscribeForm";
import Footer from "../../components/_App/Footer";
import { useRouter } from "next/router";
import metaData from "../../public/metadata/blogdetails.json";
import axios from "axios";
const BlogDetails = ({ data }) => {
  const router = useRouter();
  const id = router.query["blog-details"];
  return (
    <>
      <AppBlogDetailsContent data={id} />
    </>
  );
};

export default BlogDetails;

export const getServerSideProps = async (context) => {
  const params = context.params["blog-details"];

  const response = await axios({
    method: "POST",
    url: "/api/blog/blogdetailslugmeta",
    data: {
      blog_slug: params,
    },
  });

  return {
    props: {
      data: response.data,
      metadata: metaData,
    },
  };
};
