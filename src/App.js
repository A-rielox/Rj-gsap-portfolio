import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme /* , DarkTheme */ } from "./components/Themes";

// prettier-ignore
import { Main, AboutPage, MySkillsPage,  WorkPage } from "./components";
import LogoMainPage from "./components/subComponents/LogoMainPage";
import ScrollToTop from "./ScrollToTop";

function App() {
  const location = useLocation();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 10000);
  }, []);

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <LogoMainPage loaded={loaded} />

        <ScrollToTop>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main loaded={loaded} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
          </Routes>
        </ScrollToTop>
      </ThemeProvider>
    </>
  );
}

export default App;
