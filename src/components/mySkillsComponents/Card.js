import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

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
         // type: 'spring',
         // bounce: 0.2,
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

   border-radius: 20px;
   background-color: #fff;
   -webkit-box-shadow: 0px 0px 16px 5px ${props => props.theme.text};
   box-shadow: 0px 0px 16px 5px ${props => props.theme.text};
   /* box-shadow: 0px 0px 16px 5px #000000bd; */

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
   color: ${props => props.theme.text};
`;
