import { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { motion } from "framer-motion";

import { DarkTheme } from "./Themes";
import TimelineItems from "./aboutConponents/TimelineItems";
// import LogoMainPage from './subComponents/LogoMainPage';
import Plane from "./aboutConponents/Plane";
import Wind from "./aboutConponents/Wind";
import UpArrow from "./mySkillsComponents/UpArrow";

import ContactModalParticleComponent from "./modalComponents/ContactModalParticleComponent";
import BackgroundTitle from "./subComponents/BackgroundTitle";

const AboutPage = () => {
	const ref = useRef(null);
	const refPlane = useRef(null);
	const [contentWidth, setContentWidth] = useState(null);

	// WINDOW RESIZE
	const [resize, setResize] = useState(null);
	useEffect(() => {
		const handleWindowResize = () => setResize(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	// para la cantidad de viento
	const [numbers, setNumbers] = useState(0);

	const medQ = window.matchMedia("(min-width: 700px)").matches;

	useEffect(() => {
		// cantidad de viento
		let num = (window.innerWidth - 100) / 25;
		setNumbers(parseInt(num));

		// element es el timeline y agarro su ancho
		let element = ref.current;
		setContentWidth(element.getBoundingClientRect().width);

		// reseteo el desplazamiento cuando se van a mobil
		if (!medQ) {
			element.style.transform = `translateX(0px)`;
		}

		const moveX = () => {
			// para mover el content
			element.style.transform = `translateX(-${window.pageYOffset}px)`;

			// para mover el avion
			let scrollPosition = window.pageYOffset;
			let windowSize = window.innerHeight;
			let bodyHeight = document.body.offsetHeight;

			let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
			let diffP = (diff * 100) / (bodyHeight - windowSize);

			refPlane.current.style.transform = `translateX(${-diffP}%)`;
		};

		if (medQ) {
			window.addEventListener("scroll", moveX);

			return () => {
				window.removeEventListener("scroll", moveX);
			};
		}

		// eslint-disable-next-line
	}, [resize]);

	const scrollTop = () => {
		return window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<ThemeProvider theme={DarkTheme}>
			<MainContainer
				contentwidth={contentWidth}
				className="MAIN CONTAINER"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 1.5 } }}
				exit={{ opacity: 0, transition: { duration: 0.5 } }}
			>
				<ParticleWrapper
					className="PARTICLE WRAPPER"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 1.5 } }}
				>
					<ContactModalParticleComponent config="about" />
				</ParticleWrapper>

				{/* <LogoMainPage color="light" /> */}

				<Content className="COOOOONTENT" ref={ref}>
					<TimelineItems />
				</Content>

				{medQ ? (
					<Svg ref={refPlane}>
						{[...Array(numbers)].map((x, id) => {
							return (
								<Wind
									key={id}
									width={25}
									height={40}
									// fill="currentColor"
								/>
							);
						})}

						<Plane width={70} height={70} />
					</Svg>
				) : null}

				<SvgBackTop
					className="UpArrow"
					onClick={scrollTop}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
					viewport={{ once: false, amount: 0.7 }}
				>
					<UpArrow width={50} height={50} />
				</SvgBackTop>

				<BackgroundTitle text="ABOUT" top="70%" left="5rem" />
			</MainContainer>
		</ThemeProvider>
	);
};

export default AboutPage;

const Bounce = keyframes`
   from {  transform:translate(-50%, -50%) rotate(-90deg)  scale(1.2);   }
   to {  transform: translate(-50%, -50%) rotate(-90deg) scale(1);   }
`;

const MainContainer = styled(motion.div)`
	min-width: 100vw;
	min-height: 100vh;
	/* height: 300vh; */
	height: calc(100vh + (${(props) => `${props.contentwidth}px`} - 100vw));
	position: relative;

	background-color: ${(props) => props.theme.body};

	@media screen and (max-width: 700px) {
		height: 100%;
	}
`;

const Content = styled.div`
	display: flex;
	justify-content: center;

	gap: 5vw;

	margin-top: 10rem; // padding top 💥
	padding-bottom: 10rem;
	padding-left: 5vw;
	padding-right: 5vw;

	position: fixed;
	color: ${(props) => props.theme.text};

	@media screen and (max-width: 700px) {
		justify-content: center;

		position: relative;
		/* background-color: red; */
		margin-top: 0;
		padding-top: 10rem;
	}
`;

const ParticleWrapper = styled(motion.div)``;

const Svg = styled(motion.div)`
	position: fixed;
	top: 70vh;

	transform: translateX(-100%);

	cursor: pointer;
	z-index: 10;
	display: flex;
	align-items: center;

	svg {
		fill: ${(props) => props.theme.text};

		path {
			stroke: ${(props) => props.theme.text};
		}
	}
`;

const SvgBackTop = styled(motion.div)`
	position: absolute;
	bottom: -20px;
	left: 50%;
	cursor: pointer;
	z-index: 10;

	svg {
		fill: ${(props) => props.theme.text};
	}

	animation: ${Bounce} 0.5s linear infinite alternate;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

/* 
import { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { DarkTheme } from './Themes';
import TimelineItems from './aboutConponents/TimelineItems';
import LogoMainPage from './subComponents/LogoMainPage';
import Plane from './aboutConponents/Plane';
import Wind from './aboutConponents/Wind';

import ContactModalParticleComponent from './modalComponents/ContactModalParticleComponent';

const AboutPage = () => {
   const ref = useRef(null);
   const refPlane = useRef(null);
   const [contentWidth, setContentWidth] = useState(null);

   // para la cantidad de viento
   const [numbers, setNumbers] = useState(0);

   const medQ = window.matchMedia('(min-width: 700px)').matches;

   useEffect(() => {
      let num = (window.innerWidth - 100) / 25;
      setNumbers(parseInt(num));
   }, []);

   // para desplazamiento del avion y contenido
   useEffect(() => {
      let element = ref.current;
      setContentWidth(element.getBoundingClientRect().width);

      const moveX = () => {
         // para mover el content
         element.style.transform = `translateX(-${window.pageYOffset}px)`;

         // para mover el avion
         let scrollPosition = window.pageYOffset;
         let windowSize = window.innerHeight;
         let bodyHeight = document.body.offsetHeight;

         let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
         let diffP = (diff * 100) / (bodyHeight - windowSize);

         refPlane.current.style.transform = `translateX(${-diffP}%)`;
      };

      if (medQ) {
         window.addEventListener('scroll', moveX);

         return () => {
            window.removeEventListener('scroll', moveX);
         };
      }
      // eslint-disable-next-line
   }, []);

   return (
      <ThemeProvider theme={DarkTheme}>
         <MainContainer
            contentwidth={contentWidth}
            className="MAIN CONTAINER"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
         >
            <ParticleWrapper
               className="PARTICLE WRAPPER"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.5 } }}
            >
               <ContactModalParticleComponent config="about" />
            </ParticleWrapper>

            <LogoMainPage color="light" />

            <Content className="COOOOONTENT" ref={ref}>
               <TimelineItems />
            </Content>

            {medQ ? (
               <Svg ref={refPlane}>
                  {[...Array(numbers)].map((x, id) => {
                     return (
                        <Wind
                           key={id}
                           width={25}
                           height={40}
                           // fill="currentColor"
                        />
                     );
                  })}

                  <Plane width={70} height={70} />
               </Svg>
            ) : null}
         </MainContainer>
      </ThemeProvider>
   );
};

export default AboutPage;

const MainContainer = styled(motion.div)`
   min-width: 100vw;
   min-height: 100vh;
   height: calc(100vh + (${props => `${props.contentwidth}px`} - 100vw));
   position: relative;

   background-color: ${props => props.theme.body};

   @media screen and (max-width: 700px) {
      height: 100%;
   }
`;

const Content = styled.div`
   display: flex;
   justify-content: center;

   gap: 5vw;

   margin-top: 10rem; // padding top 💥
   padding-bottom: 10rem;
   padding-left: 5vw;
   padding-right: 5vw;

   position: fixed;
   color: ${props => props.theme.text};

   @media screen and (max-width: 700px) {
      justify-content: center;

      position: relative;
      margin-top: 0;
      padding-top: 10rem;
   }
`;

const ParticleWrapper = styled(motion.div)``;

const Svg = styled(motion.div)`
   position: fixed;
   top: 70vh;

   transform: translateX(-100%);

   cursor: pointer;
   z-index: 10;
   display: flex;
   align-items: center;

   svg {
      fill: ${props => props.theme.text};

      path {
         stroke: ${props => props.theme.text};
      }
   }
`;

*/
