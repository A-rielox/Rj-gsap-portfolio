import React, { useEffect } from "react";

import RightArrow from "./RightArrow";

import styled from "styled-components";

import gsap from "gsap";

const Top = ({ contactModalToggler }) => {
	useEffect(() => {
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
				duration: 1,
				delay: 3,
			});

		return () => {
			tlTop.kill();
		};
	}, []);

	return (
		<MainContainer>
			<Content>
				<div className="line">
					<span className="span">
						Hola, soy Ariel Godoy y hago desarrollo web
					</span>
				</div>

				<div className="line">
					<span className="span">en ambiente JavaScript.</span>
				</div>

				<div className="btn-container">
					<div className="btn" onClick={contactModalToggler}>
						Contáctame!
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
	}

	.btn-container {
		overflow: hidden;
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
