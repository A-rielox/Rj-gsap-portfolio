import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { useViewportScroll } from "framer-motion";

import LeftContent from "./mySkillsComponents/LeftContent";
import RightContent from "./mySkillsComponents/RightContent";
import TheEndSign from "./mySkillsComponents/TheEndSign";
import UpArrow from "./mySkillsComponents/UpArrow";

import SwiperFront from "./mySkillsComponents/SwiperFront";
import SwiperBack from "./mySkillsComponents/SwiperBack";

const MySkillsPage = () => {
	const { scrollYProgress } = useViewportScroll();

	// const medQ = window.matchMedia('(min-width: 700px)').matches;

	const scrollTop = () => {
		return window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<MainContainer
			className="MAIN CONTAINER"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1.5 } }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
		>
			<Content className="COOOOONTENT">
				<LeftContent />

				<RightContent />
			</Content>

			<SwiperFront />
			<SwiperBack />

			<Svg
				className="UpArrow"
				onClick={scrollTop}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
				viewport={{ once: false, amount: 0.7 }}
			>
				<UpArrow width={70} height={70} />
			</Svg>

			<TheEndSign scrollprogress={scrollYProgress} />
		</MainContainer>
	);
};

export default MySkillsPage;

const Bounce = keyframes`
   from {  transform:translate(-50%, -50%) rotate(-90deg)  scale(1.2);   }
   to {  transform: translate(-50%, -50%) rotate(-90deg) scale(1);   }
`;

const MainContainer = styled(motion.div)`
	min-width: 100vw;
	min-height: 100vh;
	position: relative;

	.SwiperBack {
		display: none;
	}

	.SwiperFront {
		display: none;
	}

	.UpArrow {
		display: inline-block;
	}

	@media screen and (max-width: 700px) {
		.right-WRAPPER {
			display: none;
		}

		.SwiperBack {
			display: inline-block;
		}

		.SwiperFront {
			display: inline-block;
		}
		.TheEndSign {
			display: none;
		}

		.UpArrow {
			display: none;
		}
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;

	gap: 5vw;
	position: relative;

	padding-top: 10rem; // padding top 💥
	padding-left: 5vw;
	padding-right: 5vw;

	@media screen and (max-width: 700px) {
		justify-content: center;
		align-items: flex-start;

		padding-top: 7rem;
	}
`;

const Svg = styled(motion.div)`
	position: absolute;
	bottom: -20px;
	left: 50%;
	cursor: pointer;
	z-index: 10;

	svg {
		fill: ${(props) => props.theme.text};
	}

	animation: ${Bounce} 0.5s linear infinite alternate;
`;
