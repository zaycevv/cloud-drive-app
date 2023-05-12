import { AppProps } from "next/app";
import Head from "next/head";
import { Global, MantineProvider } from "@mantine/core";

const MyGlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        body: {
          backgroundColor: "#ECF0F2",
          color: "#19191B",
          fontSize: "16px",
        },
        a: {
          textDecoration: "none",
          color: "#33A5FD",
        },
      })}
    />
  );
};

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <MyGlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
