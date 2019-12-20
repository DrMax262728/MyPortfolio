import * as React from "react";
// components
import App from "next/app";

class AppComponent extends App {
  getInitialProps = async ({ ctx, Component }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps } as any;
  };

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default AppComponent;
