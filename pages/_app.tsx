import * as React from "react";
// components
import App from "next/app";
// hoc(s)
import withRedux from "next-redux-wrapper";
// libs
import { Provider } from "react-redux";
import createStore from "libs/createStore";
import makeStore from "store";
// styles
import GlobalStyles from "styles/globalStyles";

class AppComponent extends App {
  getInitialProps = async ({ ctx, Component }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps } as any;
  };

  render(): JSX.Element {
    const { Component, pageProps, store }: any = this.props;

    return (
      <>
        <GlobalStyles />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore(makeStore()))(AppComponent);
