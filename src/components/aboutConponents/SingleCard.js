import React, { useState } from "react";

import styled from "styled-components";

import { motion, AnimatePresence } from "framer-motion";

const SingleCard = ({ id, title, position, desc, icon, place }) => {
	const [isHover, setIsHover] = useState(false);

	// const medQ = window.matchMedia('(min-width: 700px)').matches;

	return (
		<Card
			className="caaaaaaaaard"
			onMouseOver={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<OnView>
				<Left>
					<Years>{title}</Years>

					<Place>{place}</Place>
				</Left>

				<Title>{position}</Title>

				<Icon>{icon}</Icon>
			</OnView>

			<Down>
				{/* ANIMADO */}
				<AnimatePresence>
					{isHover && (
						<EmailWrapper
							initial={{ height: 0 }}
							animate={{ height: "min-content" }}
							transition={{ duration: 0.3 }}
							exit={{ height: 0 }}
						>
							<Email
								className="Email-animado"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.3, delay: 0.2 },
								}}
								exit={{ opacity: 0 }}
							>
								{desc}
							</Email>
						</EmailWrapper>
					)}
				</AnimatePresence>

				{/* NO ANIMADO */}
				<Email className="Email">{desc}</Email>
			</Down>

			<CardFront />
		</Card>
	);
};

export default SingleCard;

const Card = styled(motion.div)`
	position: relative;
	color: black;

	height: min-content;
	/* padding: 4rem; */
	padding: calc(2rem + 2vw);
	border-radius: 10px;
	background-color: ${(props) => props.theme.text};

	display: flex;
	flex-direction: column;
	font-family: "Ubuntu Mono", monospace;

	&:not(:last-child) {
		margin-right: 1.5rem;
	}

	.Email-animado {
		display: block;
	}
	.Email {
		display: none;
	}

	@media screen and (max-width: 700px) {
		flex-direction: column;

		margin: 1rem 0.5rem 1rem 0rem;

		&:not(:last-child) {
			margin-right: 0;
		}

		.Email-animado {
			display: none;
		}
		.Email {
			display: block;
		}
	}

	@media screen and (max-width: 400px) {
		padding: 2rem 1rem 2rem 1rem;
	}
`;

const OnView = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;

	@media screen and (max-width: 700px) {
		/* width: 90%; */
	}
`;

const Left = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: flex-start;
	align-items: flex-start;
	margin-right: 1rem;

	@media screen and (max-width: 700px) {
		flex-direction: column;
		align-items: center;
		margin-bottom: 1.5rem;
		margin-right: 0;
	}
`;

const Down = styled.div``;

const CardFront = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	border: solid 2px transparent;
	z-index: 10;

	padding: 30px;
	border-radius: 10px;
	background-color: transparent;

	transition: all 0.3s linear;
	${Card}:hover & {
		border: solid 2px #cf9ce2;
		top: -10px;
		bottom: 10px;
		left: 10px;
		right: -10px;
	}

	@media screen and (max-width: 700px) {
		border: solid 2px #cf9ce2;
		top: -10px;
		bottom: 10px;
		left: 10px;
		right: -10px;
	}
`;

const Years = styled(motion.div)`
	/* font-size: 28px; */
	font-size: calc(0.7em + 0.7vw);
	width: 165px;
	color: ${(props) => props.theme.body};

	${Card}:hover & {
		font-weight: bold;
	}

	@media screen and (max-width: 700px) {
		width: min-content;
		white-space: nowrap;
		font-size: calc(1em + 0.5vw);
	}
`;
const Place = styled(motion.div)`
	/* font-size: 20px; */
	font-size: calc(0.7em + 0.5vw);
	width: min-content;
	white-space: nowrap;

	transition: all 0.3s linear;
	${Card}:hover & {
		font-weight: bold;
	}

	@media screen and (max-width: 700px) {
		font-size: calc(1em + 0.5vw);
	}
`;
const Icon = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 120%);
	font-size: 28px;
	color: ${(props) => props.theme.body};

	@media screen and (max-width: 700px) {
		width: min-content;
		font-size: 2rem;
		transform: translate(-50%, 100%);
		/* display: none; */
	}
`;

const Title = styled(motion.div)`
	/* font-size: 20px; */
	font-size: calc(0.7em + 0.5vw);
	width: 100%;
	height: 3rem;
	margin-top: 1rem;

	transition: all 0.3s linear;
	${Card}:hover & {
		font-weight: bold;
		/* align-self: center; */
	}

	@media screen and (max-width: 700px) {
		font-weight: bold;
		font-size: calc(1em + 0.5vw);
		align-self: center;
	}
`;

const EmailWrapper = styled(motion.div)``;

const Email = styled(motion.div)`
	/* font-size: 14px; */
	font-size: calc(0.8em + 0.4vw);
	padding-top: 4rem;

	@media screen and (max-width: 400px) {
		text-align: center;
	}
`;
