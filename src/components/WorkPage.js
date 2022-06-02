import React from "react";
import styled from "styled-components";

import { workList } from "./workComponents/workList";
import SingleWork from "./workComponents/SingleWork";
import BackgroundTitle from "./subComponents/BackgroundTitle";

const WorkPage = () => {
	return (
		<MainContainer className="MAIN----CONTAINER">
			<div className="cap-width">
				<Content className="CONTENT--------">
					{workList.map((work) => {
						return <SingleWork key={work.id} work={work} />;
					})}
				</Content>

				<BackgroundTitle text="MY WORK" top="5rem" right="5rem" />
			</div>
		</MainContainer>
	);
};

export default WorkPage;

const MainContainer = styled.div`
	min-width: 100vw;
	min-height: 100vh;
	position: relative;

	background-color: ${(props) => props.theme.body};

	.cap-width {
		width: 80%;
		max-width: 1300px;
		margin: 0 auto;
	}

	@media screen and (max-width: 700px) {
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;

	padding-top: 10rem; // padding top 💥
	padding-bottom: 5rem;
`;
