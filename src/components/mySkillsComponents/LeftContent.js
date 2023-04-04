import React from "react";
import styled from "styled-components";

const LeftContent = () => {
  return (
    <LeftWrapper className="left-WRAPPER">
      <Content>
        <Title>Full Stack Developer</Title>

        <Description>
          I love developing "FullStack" web applications, either in C# ( .Net )
          and Angular or Mern stack, I work in:
        </Description>

        <Description>
          <strong>Frontend</strong>
          <p>With Html, Css or Sass and Js everyday.</p>
        </Description>

        <Description>
          <p>
            With Angular, I love using TypeScript and the CSS frameworks I use
            the most are Bulma, Semantic UI and PrimeNG.
          </p>

          <p>
            With React, I give the styles with Styled-components. I like to use
            the MUI Framework ( V5+ ) and make the animations with Keyframes,
            Motion ( by Framer ) or GSAP ( GreenSock ).
          </p>
        </Description>

        <Description>
          <strong>Backend</strong>

          <p>
            I work with C# in .Net, usually with SQL Server through Entity
            Framework.
          </p>

          <p>Or Node and Express, using mongoDB as database</p>
        </Description>

        <Divider />

        <Description>
          <strong>I also frequently use</strong>
          <p>
            Axios, Sass, Redux, Auth0, Jwt, Postman, Github, npm and for some
            years Linux ( Ubuntu ).
          </p>
        </Description>
      </Content>
    </LeftWrapper>
  );
};

export default LeftContent;

const LeftWrapper = styled.div`
  width: 75vw;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 700px) {
    width: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  position: fixed;
  /* width: 65vw; */
  width: 70vw;
  max-width: 1100px;
  /* min-height: 60vh; */
  /* padding: calc(1rem + 2vw); */
  padding: 2rem;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    height: auto;
  }
  @media screen and (max-width: 700px) {
    position: relative;
    width: 100vw;
    padding: 1rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: calc(1em + 1vw); */
  font-size: 2rem;

  ${Content}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  /* font-size: calc(0.6em + 1vw); */
  font-size: 0.9rem;
  padding: 0.5rem 0;

  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
    padding: 0.3rem 0;
  }

  ${Content}:hover & {
    color: ${(props) => props.theme.body};
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
  background-color: ${(props) => props.theme.text};

  @media screen and (max-width: 700px) {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }

  ${Content}:hover & {
    background-color: ${(props) => props.theme.body};
  }
`;
