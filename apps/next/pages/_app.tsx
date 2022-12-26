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

import "../tailwind.css";
import { Provider } from "@acme/app/provider";
import Head from "next/head";
import React from "react";
import type { SolitoAppProps } from "solito";
import { api } from "@acme/api/src/client/index.web";
import { AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }: SolitoAppProps) => {
  return (
    <>
      <Head>
        <title>Create XP App</title>
        <meta
          name="description"
          content="A cross-platform fullstack app by Kristian Kramås"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider {...pageProps}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default api.withTRPC(MyApp);
