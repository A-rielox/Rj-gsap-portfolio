import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme /* , DarkTheme */ } from "./components/Themes";

// prettier-ignore
import { Main, AboutPage, MySkillsPage, BlogPage, WorkPage } from "./components";
import LogoMainPage from "./components/subComponents/LogoMainPage";

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

				<Routes location={location} key={location.pathname}>
					<Route exact path="/" element={<Main loaded={loaded} />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/work" element={<WorkPage />} />
					<Route path="/skills" element={<MySkillsPage />} />
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
