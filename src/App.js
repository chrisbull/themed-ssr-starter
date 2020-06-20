import React from "react";
import ThemeProvider, { Reset } from "./theme";
import { jsx, Layout, Styled } from "theme-ui";

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <Layout sx={{ p: 3 }}>
        <Reset />
        <Styled.h1 sx={{ color: "primary", mb: 3 }}>Hello Theme UI</Styled.h1>
        <Styled.p>Start editing to see some magic happen!</Styled.p>
      </Layout>
    </ThemeProvider>
  );
}
