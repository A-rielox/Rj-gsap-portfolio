import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Backdrop from './ContactModalBackdrop';

import TheContent from './Content';
import ContactModalParticleComponent from './ContactModalParticleComponent';
import XClose from './XClose';

const dropIn = {
   hidden: {
      // y: '-100vh',
      opacity: 0,
      scale: 0,
   },
   visible: {
      // y: 0,
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.5,
         delay: 0.5,
      },
   },
   exit: {
      /* x: '-100vw', */ opacity: 0,
      scale: 1,
   },
};

const ContactModal = ({ isContactModal, contactModalToggler }) => {
   return (
      <Backdrop onClick={contactModalToggler}>
         <Content
            onClick={e => e.stopPropagation()}
            className="MODAL"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <ParticleWrapper
               className="PARTICLE WRAPPER"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.5 } }}
            >
               <ContactModalParticleComponent />
            </ParticleWrapper>

            <TheContent />

            <Button onClick={contactModalToggler}>
               <XClose width={30} height={30} />
            </Button>
         </Content>
      </Backdrop>
   );
};

export default ContactModal;

const Bounce = keyframes`
   from {  transform: scale(1.1);   }
   to {  transform: scale(1);   }
`;

const Content = styled(motion.div)`
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   align-items: center;

   background: ${props => props.theme.body};
   position: relative;

   z-index: 2000000;
`;

const ParticleWrapper = styled(motion.div)``;

const Button = styled.button`
   z-index: 999;

   position: absolute;
   top: 20px;
   right: 20px;

   display: flex;
   justify-content: center;
   align-items: center;

   background-color: ${props => props.theme.body};
   padding: 0.5rem;
   border-radius: 12px;
   cursor: pointer;

   svg {
      padding: 0.5rem;
      fill: ${props => props.theme.text};
   }

   animation: ${Bounce} 0.5s linear infinite alternate;

   &:hover {
      background-color: ${props => props.theme.text};
      color: ${props => props.theme.body};
      /* border: 3px solid var(--red-light); */

      svg {
         fill: ${props => props.theme.body};
      }
   }
`;
