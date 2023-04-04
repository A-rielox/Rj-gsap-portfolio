import React from "react";

import styled from "styled-components";

import Card from "./Card";
import { frontIconList, backIconList, extraIconList } from "./iconList";

const RightContent = () => {
  return (
    <RightWrapper className="right-WRAPPER">
      <Content>
        <Title>in front</Title>
        {frontIconList.map((item) => {
          return <Card key={item.id} {...item} />;
        })}

        <Title>in back</Title>

        {backIconList.map((item) => {
          return <Card key={item.id} {...item} />;
        })}

        <Title>time using</Title>
        {extraIconList.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </Content>
    </RightWrapper>
  );
};

export default RightContent;

const RightWrapper = styled.div`
  width: 15vw;
  position: relative;

  @media screen and (min-width: 1600px) {
    width: 30vw;
  }
  @media screen and (min-width: 1900px) {
    width: 40vw;
  }
`;

const Content = styled.div`
  width: 15vw;
  max-width: 350px;
  margin-bottom: 5rem;
  font-family: "Ubuntu Mono", monospace;
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
