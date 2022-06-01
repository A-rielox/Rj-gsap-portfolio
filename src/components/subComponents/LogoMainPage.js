import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Logo as MainLogo } from "../AllSvgs";
import Menu from "./Menu";

const LogoMainPage = ({ loaded }) => {
	const location = useLocation();
	const [initialLoad, setInitialLoad] = useState(true);
	const [menuState, setMenuState] = useState(false);
	// PARA PAGE CHANGES
	useEffect(() => {
		if (!initialLoad) {
			setMenuState(!menuState);
		}
	}, [location]);

	useEffect(() => {
		setInitialLoad(false);

		gsap.from(".logo-wrapper", {
			opacity: 0,
			delay: 4,
			duration: 2,
		});
	}, []);

	let atHome = location.pathname === "/";

	const pathVariants = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,

			transition: {
				duration: !loaded ? 4 : 0,
				ease: "easeInOut",
				delay: !loaded ? 5 : 0,
			},
		},
	};

	const textVariants = {
		hidden: {
			opacity: 0,
			x: -50,
		},
		visible: {
			opacity: 1,
			x: -10,

			transition: {
				duration: !loaded ? 2 : 0,
				delay: !loaded ? 5 : 0,
				ease: "easeInOut",
			},
		},
	};

	const noTextVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,

			transition: {
				duration: !loaded ? 2 : 0,
				delay: !loaded ? 5 : 0,
				ease: "easeInOut",
			},
		},
	};

	return (
		<Container color={location.pathname} atHome={atHome}>
			<div className="logo-wrapper">
				<MainLogo
					onClick={() => setMenuState(!menuState)}
					/* width, height y fill en styled.div */
					variants={pathVariants}
					initial={"hidden"}
					animate={"visible"}
				/>

				{atHome && (
					<Text
						color={location.pathname}
						variants={textVariants}
						initial="hidden"
						animate="visible"
					>
						-rielox
					</Text>
				)}
			</div>
			<TextNoHome
				color={location.pathname}
				variants={noTextVariants}
				initial="hidden"
				animate="visible"
			>
				Menu
			</TextNoHome>

			<Menu menuState={menuState} />
		</Container>
	);
};

export default LogoMainPage;

const Container = styled.div`
	position: fixed;
	top: 2rem;
	left: 2rem;
	z-index: 100;
	width: 150px;

	.logo-wrapper {
		display: ${(props) => (props.atHome === true ? "flex" : null)};
		align-items: center;
		/* justify-content: center; */
		cursor: pointer;
	}

	svg {
		width: calc(2em + 1vw);
		height: auto;
		fill: ${(props) =>
			props.color === "/about"
				? `rgba(${props.theme.bodyRgba},0.8)`
				: `rgba(${props.theme.textRgba},0.2)`};

		overflow: visible;
		stroke-linejoin: round;
		stroke-linecap: round;

		path {
			stroke: ${(props) =>
				props.color === "/about"
					? `rgba(${props.theme.bodyRgba},0.8)`
					: `rgba(${props.theme.textRgba},0.8)`};
		}
	}
`;

const Text = styled(motion.span)`
	/* font-size: 2rem; */
	font-size: calc(1em + 0.5vw);

	color: ${(props) =>
		props.color === "/about"
			? `rgba(${props.theme.bodyRgba},0.8)`
			: `rgba(${props.theme.textRgba},1)`};
`;

const TextNoHome = styled(motion.div)`
	display: flex;
	align-items: center;
	font-size: calc(0.7em + 0.1vw);
	margin-left: 0.5rem;
	margin-top: 0.3rem;

	color: ${(props) =>
		props.color === "/about"
			? `rgba(${props.theme.bodyRgba},0.8)`
			: `rgba(${props.theme.textRgba},0.5)`};

	svg {
		font-size: calc(0.4em + 0.1vw);
	}
`;
