import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { gsap } from "gsap";

const Menu = ({ menuState }) => {
	let menu = useRef(null);
	let revealMenu = useRef(null);
	let revealMenuBackground = useRef(null);
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);
	let link4 = useRef(null);

	useEffect(() => {
		if (!menuState) {
			gsap.to([revealMenu, revealMenuBackground], {
				duration: 0.8,
				height: 0,
				ease: "power3.inOut",
				stagger: {
					amount: 0.07,
				},
			});

			gsap.to(menu, { duration: 1, css: { display: "none" } });
		} else if (menuState) {
			gsap.to(menu, { duration: 0, css: { display: "block" } });

			gsap.to([revealMenuBackground, revealMenu], {
				duration: 0,
				opacity: 1,
				height: "100%",
			});

			gsap.from([revealMenuBackground, revealMenu], {
				duration: 0.8,
				height: 0,
				transformOrigin: "right top",
				skewY: 2,
				ease: "power3,inOut",
				stagger: {
					amount: 0.1,
				},
			});

			gsap.from([link1, link2, link3, link4], {
				duration: 0.8,
				y: 200,
				delay: 0.5,
				ease: "power3,inOut",
				stagger: {
					amount: 0.3,
				},
			});
		}
		// eslint-disable-next-line
	}, [menuState]);
	return (
		<MainContainer className="MENU---------">
			<div className="menu" ref={(el) => (menu = el)}>
				<div
					className="menu-secondary-background-color"
					ref={(el) => (revealMenuBackground = el)}
				></div>

				<div className="content" ref={(el) => (revealMenu = el)}>
					<nav>
						<span>
							<Link ref={(el) => (link1 = el)} to="/">
								Home
							</Link>
						</span>

						<span>
							<Link ref={(el) => (link2 = el)} to="/skills">
								Skills
							</Link>
						</span>

						<span>
							<Link ref={(el) => (link3 = el)} to="/about">
								About
							</Link>
						</span>

						<span>
							<Link ref={(el) => (link4 = el)} to="/work">
								Work
							</Link>
						</span>
					</nav>

					<div className="footer-div">
						<span>
							&copy; {new Date().getFullYear()} My portfolio - All rights
							reserved.
						</span>

						<span className="heart">
							Made with &nbsp;<div className="beat">💓</div>&nbsp; by
							&nbsp;
							<a href=" " target="_blank" rel="noopener noreferrer">
								A-rielox
							</a>
						</span>
					</div>
				</div>
			</div>
		</MainContainer>
	);
};

export default Menu;

const beat = keyframes`
   from {  transform:  scale(1) }
   to {  transform:  scale(1.5) }
`;

const MainContainer = styled.section`
	.menu {
		display: none;
		z-index: 9;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;

		.menu-secondary-background-color {
			background: #36254e;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			position: fixed;
			height: 100%;
			width: 100%;
		}

		.content {
			position: relative;
			background: #cf9ce2;
			height: 100%;
			overflow: hidden;

			display: flex;
			justify-content: center;
			align-items: center;

			nav {
				display: flex;
				flex-direction: column;

				span {
					font-size: 6rem;
					font-weight: 700;
					cursor: pointer;
					overflow: hidden;
					position: relative;
					height: 125px;
					width: 300px;

					display: block;

					a {
						position: absolute;

						color: #fcf6f4;
						text-decoration: none;

						&:hover {
							color: #36254e;
						}
					}
				}
			}

			.footer-div {
				position: absolute;
				bottom: 50px;
				right: 50px;

				display: flex;
				flex-direction: column;
				align-items: flex-end;

				span {
					display: flex;
				}

				.beat {
					display: inline-block;
					animation: ${beat} 0.8s linear infinite alternate;
				}
			}
		}
	}
`;
