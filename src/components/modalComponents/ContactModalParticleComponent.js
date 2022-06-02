import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import styled from "styled-components";

//particle config
import configLight from "./contactModalConfigLight.json";
import configStars from "./contactModalConfigStars.json";

const ParticleComponent = ({ config }) => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		// console.log(container);
	};

	return (
		<Box>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={config === "about" ? configStars : configLight}
			/>
		</Box>
	);
};

export default ParticleComponent;

const Box = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
`;
