import React from "react";
import styled from "styled-components";

// import LogoMainPage from './subComponents/LogoMainPage';

import TheEndSign from "./mySkillsComponents/TheEndSign";
import { useViewportScroll } from "framer-motion";

const WorkPage = () => {
	const { scrollYProgress } = useViewportScroll();

	return (
		<Wrapper>
			{/* <LogoMainPage color="light" /> */}
			WorkPage
			<TheEndSign scrollprogress={scrollYProgress} />
		</Wrapper>
	);
};

export default WorkPage;

const Wrapper = styled.div`
	height: 200vh;
`;
