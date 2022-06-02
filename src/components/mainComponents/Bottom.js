import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";

import front from "../../assets/Images/frontImage.jpg";
import back from "../../assets/Images/backImage.jpg";
import aprender from "../../assets/Images/aprender.jpg";

const Bottom = ({ loaded }) => {
	useEffect(() => {
		if (!loaded) {
			const tlDown = gsap.timeline();

			tlDown.from(".square-image img", {
				scale: 1.4,
				ease: "expo.easeInOut",
				stagger: {
					amount: 0.6,
				},
				duration: 1.6,
				delay: 4.5,
			});

			return () => {
				tlDown.kill();
			};
		}
		// eslint-disable-next-line
	}, []);

	return (
		<MainContainer>
			<Content>
				<div className="square">
					<div className="square-details">
						<span>Some years as</span>
						<h2>Frontend Developer</h2>
					</div>

					<div className="square-image">
						<img src={front} alt="frontend developer" />
					</div>
				</div>

				<div className="square">
					<div className="square-details">
						<span>I have also made applications with</span>
						<h2>MERN stack</h2>
					</div>

					<div className="square-image">
						<img src={back} alt="frontend developer" />
					</div>
				</div>

				<div className="square">
					<div className="square-details">
						<span>Willing to learn</span>
						<h2>New technologies</h2>
					</div>

					<div className="square-image">
						<img src={aprender} alt="frontend developer" />
					</div>
				</div>
			</Content>
		</MainContainer>
	);
};

export default Bottom;

const MainContainer = styled.div`
	min-width: 100vw;
	height: 50vh;
	position: relative;

	font-family: "Ubuntu Mono", monospace;
`;

const Content = styled.div`
	// padding-top: 10rem; // padding top 💥
	display: flex;
	width: 100%;

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}

	.square {
		position: relative;
		background: #36254e;
		/* background: black; */
		cursor: pointer;

		@media screen and (max-width: 700px) {
			height: calc(50vh / 3);
		}

		&:hover {
			.square-image {
				opacity: 0.3;
			}
		}

		.square-details {
			width: 33.3333vw;
			height: 50vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 32px;
			box-sizing: border-box;
			z-index: 1;
			position: relative;

			@media screen and (max-width: 700px) {
				width: 100vw;
				height: calc(50vh / 3);
			}

			span {
				margin-top: 156px;
				font-size: 1.6rem;
				opacity: 0.8;
				color: ${(props) => props.theme.body};
				font-weight: 600;

				@media screen and (max-width: 1100px) {
					font-size: 1.3rem;
				}

				@media screen and (max-width: 700px) {
					margin-top: 10px;
					font-size: 1.2rem;
				}
			}

			h2 {
				font-size: 2.4rem;
				line-height: 3.4rem;
				width: 85%;
				margin-top: 16px;
				color: ${(props) => props.theme.body};

				font-family: "Ubuntu Mono", monospace;

				@media screen and (max-width: 1100px) {
					font-size: 2rem;
				}

				@media screen and (max-width: 700px) {
					margin-top: 10px;
					font-size: 2rem;
					line-height: 2.2rem;
				}
			}
		}

		.square-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			opacity: 0.45;
			transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);

			img {
				height: 100%;
				width: 100%;
				object-fit: cover;

				@media screen and (max-width: 700px) {
					display: none;
				}
			}
		}
	}
`;
