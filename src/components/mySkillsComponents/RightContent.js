import React from 'react';

import styled from 'styled-components';

import Card from './Card';
import { frontIconList, backIconList, extraIconList } from './iconList';

const RightContent = () => {
   return (
      <RightWrapper className="right-WRAPPER">
         <Content>
            <Title>en front</Title>
            {frontIconList.map(item => {
               return <Card key={item.id} {...item} />;
            })}

            <Title>en back</Title>

            {backIconList.map(item => {
               return <Card key={item.id} {...item} />;
            })}

            <Title>tiempo utilizando</Title>
            {extraIconList.map(item => {
               return <Card key={item.id} {...item} />;
            })}
         </Content>
      </RightWrapper>
   );
};

export default RightContent;

const RightWrapper = styled.div`
   /* border: 4px solid green; */
   width: 20vw;
   position: relative;
`;

const Content = styled.div`
   /* border: 2px solid ${props => props.theme.text}; */
   /* color: ${props => props.theme.text}; */
   /* background-color: ${props => props.theme.body}; */

   /*  */
   /*  */
   /*  */

   width: 20vw;
   margin-bottom: 5rem;

   font-family: 'Ubuntu Mono', monospace;
`;

const Title = styled.span`
   display: inline-block;
   width: 100%;
   text-align: center;
   font-size: 2rem;

   text-transform: capitalize;
   padding-bottom: 1rem;

   &:not(:first-child) {
      margin-top: 2rem;
   }
`;
