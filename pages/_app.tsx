import { AppProps } from "next/app";
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";

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
          color: "#19191B",
          backgroundColor: "#ECF0F2",
          fontSize: "16px",
        },
        a: {
          textDecoration: "none",
          color: "#33A5FD",
        },
        ".file": {
          marginRight: "15px",
          marginBottom: "15px",
          border: "2px solid transparent",
          borderRadius: "10px",
        },
        ".file.active": {
          backgroundColor: "rgb(0 113 206 / 5%)",
          border: "2px solid #0073CC",
        },
      })}
    />
  );
};

interface Props extends AppProps {
  Component: AppProps["Component"] & {
    getLayout: (page: React.ReactElement) => React.ReactNode;
  };
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  const [colorScheme, setColorScheme] = React.useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return getLayout(
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Oxygen, sans-serif",
        colorScheme: "light",
        colors: {
          primary: [
            "#CCEEFF",
            "#7FC6FD",
            "#33A5FD",
            "#008FFD",
            "#7FC6FD",
            "#33A5FD",
            "#008FFD",
            "#0073CC",
          ],
          secondary: ["#ECF0F2"],
        },
        primaryColor: "primary",
      }}
    >
      <Notifications />
      <MyGlobalStyles />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
