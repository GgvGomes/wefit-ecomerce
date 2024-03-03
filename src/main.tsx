import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Router } from "@context/router/index.tsx";

import { theme } from "@context/styles/theme_styles.ts";
import { ThemeProvider } from "styled-components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
