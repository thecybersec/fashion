import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SpicyWhips - Clothing made for you</title>
      </Head> */}

      {children}

      <GoTop />
    </>
  );
};

export default Layout;
