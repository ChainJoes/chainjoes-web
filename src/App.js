import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import { Main, PrivacyPolicy, Terms, FAQ } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/main" element={<Navigate to="/" replace />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<Terms />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="sale" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default React.memo(App);
