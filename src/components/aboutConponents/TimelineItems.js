import React from "react";
import styled from "styled-components";
import items from "./textItems";

import { motion } from "framer-motion";

import SingleCard from "./SingleCard";

const TimelineItems = () => {
	return (
		<Timeline layout>
			{items.map((item) => {
				return <SingleCard key={item.id} {...item} />;
			})}
		</Timeline>
	);
};

export default TimelineItems;

const Timeline = styled(motion.div)`
	display: flex;

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}

	& p {
		margin-bottom: 0;
		padding-right: 2rem;
		font-size: calc(1em + 0.5vw);
	}
	padding-right: 7rem;
	padding-left: 7rem;

	@media screen and (max-width: 700px) {
		padding-right: 0;
		padding-left: 0;
	}
`;
