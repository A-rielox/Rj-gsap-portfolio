import React from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactModalBackdrop = ({ children, onClick }) => {
   return (
      <Backdrop
         className="backdrop"
         onClick={onClick}
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: {
               duration: 0.5,
            },
         }}
         exit={{ opacity: 0 }}
      >
         {children}
      </Backdrop>
   );
};

export default ContactModalBackdrop;

const Backdrop = styled(motion.div)`
   position: fixed;
   /* position: absolute; */
   top: 0;
   left: 0;
   height: 100vh;
   width: 100%;
   background: ${props => props.theme.text};
   display: flex;
   align-items: center;
   justify-content: center;

   z-index: 1000000;
`;
