import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const cardVariants = {
	offscreen: {
		opacity: 0,
		x: -500,
		rotate: -10,
	},
	onscreen: {
		opacity: 1,
		x: 0,
		rotate: 0,

		transition: {
			duration: 0.3,
		},
	},
};

const Card = ({ icon, name }) => {
	return (
		<Wrapper
			variants={cardVariants}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: false, amount: 0.7 }}
		>
			<Icon src={icon} alt={name} />

			<Title>{name}</Title>
		</Wrapper>
	);
};

export default Card;

const Wrapper = styled(motion.div)`
	width: 100%;
	height: 20rem;
	z-index: 2;

	background-color: ${(props) => props.theme.body};
	border-radius: 10px;

	-webkit-box-shadow: 3px 3px 15px 5px
		${(props) => `rgba(${props.theme.textRgba},0.46)`};
	box-shadow: 3px 3px 15px 5px
		${(props) => `rgba(${props.theme.textRgba},0.46)`};

	&:not(:last-child) {
		margin-bottom: 2rem;
	}

	position: relative;

	@media screen and (max-width: 900px) {
		height: 15rem;
	}
`;

const Icon = styled.img`
	width: 50%;
	height: auto;

	padding: 2rem;

	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 1100px) {
		width: 90%;
	}
`;

const Title = styled.h3`
	width: 80%;
	text-align: center;
	/* white-space: nowrap; */
	position: absolute;
	top: 80%;
	left: 50%;
	transform: translate(-50%, -50%);

	text-transform: capitalize;
	color: ${(props) => props.theme.text};
`;
