import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";
import THEME from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Routes />
    </ThemeProvider>
  );
}
