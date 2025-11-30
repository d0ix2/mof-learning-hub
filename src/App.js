import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";
import MainPage from "./pages/MainPage/MainPage";

// 메인 애플리케이션
function App() {
  const [currentTheme, setCurrentTheme] = useState("default");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
