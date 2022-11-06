import React from "react";
import { withRouter } from "next/router";
import Head from "next/head";
import App from "next/app";
import GlobalStyles from "../src/styles/global";

class ParentApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <Head>
          <title key="title">The Shop Application</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default withRouter(ParentApp);
