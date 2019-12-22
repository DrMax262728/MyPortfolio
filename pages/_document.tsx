import * as React from "react";
// components
import Document, { Html, Head, Main, NextScript } from "next/document";
// libs
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet() as any;

  try {
    const initialProps = (await Document.getInitialProps(ctx)) as any;

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;