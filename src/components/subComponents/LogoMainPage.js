import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Logo as MainLogo } from '../AllSvgs';
import { TiArrowBackOutline } from 'react-icons/ti';

const pathVariants = {
   hidden: {
      opacity: 0,
      pathLength: 0,
   },
   visible: {
      opacity: 1,
      pathLength: 1,

      transition: {
         duration: 2,
         ease: 'easeInOut',
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
         duration: 2,
         // delay: 2,
         ease: 'easeInOut',
      },
   },
};

const LogoMainPage = ({ color }) => {
   const location = useLocation();

   let atHome = location.pathname === '/';

   return (
      <Container color={color} atHome={atHome}>
         <Link to="/">
            <MainLogo
               /* width, height y fill en styled.div */
               variants={pathVariants}
               initial={'hidden'}
               animate={'visible'}
            />

            {atHome ? (
               <Text
                  color={color}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
               >
                  -rielox
               </Text>
            ) : (
               <TextNoHome color={color}>
                  <TiArrowBackOutline />
                  Home
               </TextNoHome>
            )}
         </Link>
      </Container>
   );
};

export default LogoMainPage;

const Container = styled.div`
   position: fixed;
   top: 2rem;
   left: 2rem;
   z-index: 100;
   /* width: 20vw; */
   width: 150px;

   a {
      /* display: flex; */
      display: ${props => (props.atHome === true ? 'flex' : null)};
      align-items: center;
   }

   svg {
      /* width: 4vw; */
      width: calc(2em + 1vw);
      height: auto;
      fill: ${props =>
         props.color === 'light'
            ? `rgba(${props.theme.textRgba},0.2)`
            : `rgba(${props.theme.bodyRgba},0.8)`};
      /* fill: ${props => `rgba(${props.theme.textRgba},0.2)`}; */

      overflow: visible;
      stroke-linejoin: round;
      stroke-linecap: round;

      path {
         stroke: ${props =>
            props.color === 'light'
               ? `rgba(${props.theme.textRgba},0.8)`
               : `rgba(${props.theme.bodyRgba},0.8)`};
         /* stroke: ${props => props.theme.text}; */
      }
   }
`;

const Text = styled(motion.span)`
   /* font-size: 2rem; */
   font-size: calc(1em + 0.5vw);

   color: ${props =>
      props.color === 'light'
         ? `rgba(${props.theme.textRgba},1)`
         : `rgba(${props.theme.bodyRgba},0.8)`};
`;

const TextNoHome = styled.div`
   display: flex;
   align-items: center;
   font-size: calc(0.7em + 0.1vw);
   margin-left: -0.5rem;

   color: ${props =>
      props.color === 'light'
         ? `rgba(${props.theme.textRgba},.5)`
         : `rgba(${props.theme.bodyRgba},0.8)`};

   svg {
      font-size: calc(0.4em + 0.1vw);
   }
`;
