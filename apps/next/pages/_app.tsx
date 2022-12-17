import "raf/polyfill";

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null;
  }
};

fixReanimatedIssue();

import { Provider } from "@acme/app";
import Head from "next/head";
import React from "react";
import type { SolitoAppProps } from "solito";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="A cross-platform weather app by Kristian Kramås"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
