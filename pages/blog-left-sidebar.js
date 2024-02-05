import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import BlogWithLeftSidebar from "../components/Blog/BlogWithLeftSidebar";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";

const BlogLeftSidebar = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageTitle
        pageTitle="Blog Left Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog"
      />

      <BlogWithLeftSidebar />

      <SubscribeForm />

      <Footer />
    </>
  );
};

export default BlogLeftSidebar;
