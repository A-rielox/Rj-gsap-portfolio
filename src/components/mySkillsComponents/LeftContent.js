import React from 'react';
import styled from 'styled-components';

const LeftContent = () => {
   return (
      <LeftWrapper className="left-WRAPPER">
         <Content>
            <Title>Full Stack Developer</Title>

            <Description>
               I like to develop "FullStack" web applications, in the different
               flavors of Javascript, I usually deal with:
            </Description>

            <Description>
               <strong>Frontend</strong>
               <p>
                  Html, Css, Js and React, giving the styles with
                  Styled-conponents.
               </p>
            </Description>
            <Description>
               <p>
                  I like to use the MUI Framework (V5) and make the animations
                  both with the Keyframes of styled-components or Motion ( by
                  Framer )
               </p>
            </Description>

            <Description>
               <strong>Backend</strong>
               <p>I work with Node and Express, using mongoDB as database</p>
            </Description>

            <Divider />

            <Description>
               <strong>I also frequently use</strong>
               <p>
                  Axios, Sass, Redux, Auth0, Jwt, Postman, Github, npm and for a
                  couple of years Linux.
               </p>
            </Description>
         </Content>
      </LeftWrapper>
   );
};

export default LeftContent;

const LeftWrapper = styled.div`
   /* border: 4px solid blue; */
   width: 70vw;
   position: relative;
   z-index: 10;

   @media screen and (max-width: 700px) {
      width: 90vw;
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

const Content = styled.div`
   border: 2px solid ${props => props.theme.text};
   color: ${props => props.theme.text};
   /* background-color: ${props => props.theme.body}; */
   backdrop-filter: blur(2px);
   transition: all 0.3s ease;

   &:hover {
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
   }

   position: fixed;
   width: 65vw;
   /* min-height: 60vh; */
   padding: calc(1rem + 2vw);

   font-family: 'Ubuntu Mono', monospace;
   display: flex;
   flex-direction: column;
   cursor: pointer;

   @media screen and (max-width: 900px) {
      height: auto;
   }
   @media screen and (max-width: 700px) {
      position: relative;
      width: 100vw;
   }
`;

const Title = styled.h2`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: calc(1em + 1vw);

   ${Content}:hover & {
      & > * {
         fill: ${props => props.theme.body};
      }
   }

   & > *:first-child {
      margin-right: 1rem;
   }
`;

const Description = styled.div`
   color: ${props => props.theme.text};
   font-size: calc(0.6em + 1vw);
   padding: 0.5rem 0;

   ${Content}:hover & {
      color: ${props => props.theme.body};
   }

   strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
   }
   ul,
   p {
      margin-left: 2rem;
   }
`;
const Divider = styled.span`
   width: 100%;
   height: 3px;
   margin-top: 1rem;
   margin-bottom: 1rem;
   background-color: ${props => props.theme.text};

   ${Content}:hover & {
      background-color: ${props => props.theme.body};
   }
`;
