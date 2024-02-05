import React from "react";
import Head from "next/head";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageTitle from "../components/Common/PageTitle";
import AboutContent from "../components/About/AboutContent";
import TeamMember from "../components/Common/TeamMember";
import Facility from "../components/Common/Facility";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import Partners from "../components/Common/Partners";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";
import metaData from "../public/metadata/about.json";

const About = ({ data }) => {
  return (
    <>
      <AboutContent />

      {/* <TeamMember /> */}

      <Facility />

      <FeedbackSlider />
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  return {
    props: {
      data: metaData,
    },
  };
};
