import React, { useEffect } from "react";
import styled from "styled-components";

import gsap from "gsap";
// TIMELINE
// para no tener q usar ref y tener q pasarlas con prop drilling => usa clases y se hace directo

const IntroOverlay = ({ loaded }) => {
	useEffect(() => {
		if (!loaded) {
			const tlOverlay = gsap.timeline();

			tlOverlay
				.to(".overlay-top", {
					height: 0,
					ease: "expo.inOut",
					stagger: 0.4,
					duration: 1.6,
					delay: 3,
				})
				.to(".overlay-bottom", {
					width: 0,
					ease: "expo.easeInOut",
					delay: -1,
					stagger: {
						amount: 0.8,
					},
					duration: 1.6,
				})
				.to(".overlay", { css: { display: "none" } });

			return () => {
				tlOverlay.kill();
			};
		} else {
			gsap.to(".overlay", { css: { display: "none" }, duration: 0.01 });
		}
	}, []);

	return (
		<Wrapper className="overlay">
			<div className="top">
				<div className="overlay-top"></div>
				<div className="overlay-top"></div>
				<div className="overlay-top"></div>
			</div>

			<div className="bottom">
				<div className="overlay-bottom"></div>
				<div className="overlay-bottom"></div>
				<div className="overlay-bottom"></div>
			</div>
		</Wrapper>
	);
};

export default IntroOverlay;

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	.top {
		height: 50vh;
		width: 100%;
		position: absolute;
		z-index: 8;

		.overlay-top {
			position: absolute;
			height: 100%;
			width: 33.3333vw;
			background: black;
			bottom: 0;
			left: 0;

			&:nth-child(2) {
				left: 33.333%;
			}

			&:nth-child(3) {
				left: 66.666%;
			}
		}
	}

	.bottom {
		height: 50vh;
		width: 100%;
		position: absolute;
		bottom: 0;
		z-index: 8;

		.overlay-bottom {
			position: absolute;
			height: 100%;
			width: 33.3333vw;
			background: black;
			bottom: 0;
			// left: 0; no se ocupa left xq con gsap se anima el width de izq a drch
			right: 66.666%;

			@media screen and (max-width: 700px) {
				top: 0;
				right: 0;
				width: 100vw;
				height: calc(50vh / 3);
			}

			&:nth-child(2) {
				right: 33.333%;

				@media screen and (max-width: 700px) {
					width: 100vw;
					top: calc(50vh / 3);
					right: 0;
				}
			}

			&:nth-child(3) {
				right: 0;

				@media screen and (max-width: 700px) {
					width: 100vw;
					top: calc((50vh / 3) * 2);
					right: 0;
				}
			}
		}
	}
`;
