import React from "react";
require("../styles/globals.less");

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
