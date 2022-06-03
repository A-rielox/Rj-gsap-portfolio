import React from "react";
import styled from "styled-components";

const Content = () => {
	return (
		<ContentWrapper className="CONTENT WRAPPER">
			<Title>Ariel Godoy</Title>

			<Description>You can contact me at any time through:</Description>

			<Datos>
				<Description>
					the mail:
					<p>
						<strong>arielox.ag@gmail.com</strong>
					</p>
				</Description>

				<Description>
					or through the phone/WhatsApp:
					<p>
						<strong>+56 9 7234 7525</strong>
					</p>
				</Description>
			</Datos>
		</ContentWrapper>
	);
};

export default Content;

const ContentWrapper = styled.div`
	color: ${(props) => props.theme.text};
	max-width: 700px;
	height: auto;
	padding: calc(2rem + 2vw);

	font-family: "Ubuntu Mono", monospace;
	display: flex;
	flex-direction: column;
	cursor: pointer;
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	margin-top: 1rem;
	margin-bottom: 2rem;
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.6em + 1vw);
	padding: 0.5rem 0;

	strong {
		margin-bottom: 1rem;
		padding-top: 1rem;
		display: block;
	}

	p {
		margin-left: 2rem;
	}
`;

const Datos = styled.span`
	margin: 0 auto;
	padding-top: 2rem;

	@media screen and (max-width: 700px) {
		padding-top: 1rem;
	}
`;
