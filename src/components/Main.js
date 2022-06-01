import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import ContactModal from "./modalComponents/ContactModal";

import Top from "./mainComponents/Top";
import Bottom from "./mainComponents/Bottom";
import IntroOverlay from "./mainComponents/IntroOverlay";

const Main = ({ loaded }) => {
	// --------------- para ContactModal
	const [isContactModal, setIsContactModal] = useState(false);
	const contactModalToggler = () => {
		setIsContactModal(!isContactModal);
	};
	// --------------- Fin ContactModal

	return (
		<MainContainer>
			<Container>
				<IntroOverlay loaded={loaded} />

				<Top loaded={loaded} contactModalToggler={contactModalToggler} />

				<Bottom loaded={loaded} />
			</Container>

			{/* CONTACT-MODAL */}
			<AnimatePresence>
				{isContactModal && (
					<ContactModal
						isContactModal={isContactModal}
						contactModalToggler={contactModalToggler}
					/>
				)}
			</AnimatePresence>
		</MainContainer>
	);
};

export default Main;

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	/* overflow: hidden; */

	position: relative;

	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Karla", sans-serif;
		font-weight: 500;
	}
`;

const Container = styled.div`
	/* padding: 2rem; */
`;
