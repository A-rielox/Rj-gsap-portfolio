import React, { useEffect } from "react";

import RightArrow from "./RightArrow";
import styled from "styled-components";

import gsap from "gsap";

const Top = ({ contactModalToggler, loaded }) => {
	useEffect(() => {
		if (!loaded) {
			const tlTop = gsap.timeline();

			tlTop
				.to(".span", {
					visibility: "visible",
					duration: 0.1,
				})
				.from(".span", {
					y: 100,
					ease: "power4.out",
					delay: 1,
					stagger: {
						amount: 1,
					},
					duration: 1.8,
				})
				.to(".btn", {
					left: 0,
					duration: 1.5,
					delay: 1,
				});

			return () => {
				tlTop.kill();
			};
		} else {
			gsap.to(".span", {
				visibility: "visible",
				duration: 0.1,
			});
			gsap.to(".btn", {
				left: 0,
				duration: 0.1,
			});
		}
	}, []);

	return (
		<MainContainer>
			<Content>
				<div className="line">
					<span className="span">
						Hi, I'm Ariel Godoy and I do web development
					</span>
				</div>

				<div className="line">
					<span className="span">in JavaScript environment.</span>
				</div>

				<div className="btn-container">
					<div className="btn" onClick={contactModalToggler}>
						Contact me!
						<RightArrow />
					</div>
				</div>
			</Content>
		</MainContainer>
	);
};

export default Top;

const MainContainer = styled.section`
	min-width: 100vw;
	height: 50vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: "Ubuntu Mono", monospace;
`;

const Content = styled.div`
	// padding-top: 10rem; // padding top 💥
	display: flex;
	flex-direction: column;
	padding-left: 1rem;
	width: 70%;

	@media screen and (max-width: 1100px) {
		width: 85%;
	}

	@media screen and (max-width: 500px) {
		width: 95%;
	}

	.line {
		height: 5rem;
		font-size: 2rem;
		line-height: 4.2rem;
		font-weight: 700;
		z-index: 10;
		color: white;
		/* color: ${(props) => props.theme.text}; */
		mix-blend-mode: difference; /* ⭐⭐⭐ */

		position: relative;
		overflow: hidden; /* ⭐⭐⭐ p el efecto de aparición */

		span {
			position: absolute;
			visibility: hidden;
		}

		@media screen and (max-width: 1100px) {
			font-size: 1.5rem;
		}

		@media screen and (max-width: 700px) {
			font-size: 1.2rem;
			height: 4rem;
		}

		@media screen and (max-width: 500px) {
			font-size: 1rem;
			height: 3rem;
		}
	}

	.btn-container {
		overflow: hidden;
		margin-top: 1rem;
	}

	.btn {
		width: 256px;
		position: relative;
		left: -300px;
		z-index: 2;

		font-size: 1.6rem;
		/* color: ${(props) => props.theme.text}; */
		color: black;
		display: flex;
		align-items: center;
		font-weight: 600;
		cursor: pointer;

		@media screen and (max-width: 700px) {
			font-size: 1.2rem;
		}

		@media screen and (max-width: 500px) {
			font-size: 1rem;
		}

		svg {
			margin-left: 16px;

			padding: 12px;
			height: 54px;
			width: 54px;
			/* fill: ${(props) => props.theme.text}; */
			color: black;
			border: 2px solid black;
			border-radius: 100px;
			transition: 0.4s ease-in-out;

			@media screen and (max-width: 700px) {
				padding: 6px;
				height: 30px;
				width: 30px;

				border: 1px solid black;
			}
		}

		&:hover {
			svg {
				background: ${(props) => props.theme.text};
				border: 2px solid ${(props) => props.theme.text};
				color: ${(props) => props.theme.body};
			}
		}
	}
`;
