import React from "react";
import styled from "styled-components";
import Parallax from "react-parallax-tilt";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
  margin: 6rem 4%;

  @media (max-width: 800px) {
    margin: 4rem 4%;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.$index % 2 === 0 ? "row" : "row-reverse"};
  height: fit-content;
  width: 100%;
  color: white;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5em;
    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h3 {
    font-size: 1.1rem;
    @media (max-width: 900px) {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled(motion.button)`
  position: relative;
  overflow: hidden;

  background: white;
  color: black;

  border: 1px solid rgba(255, 255, 255, 0.2);

  padding: 12px 24px;
  border-radius: 8px;

  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
  }

  &:active {
    transform: translateY(0px) scale(0.97);
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px 10px;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const TechStackItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.12);

  backdrop-filter: blur(10px);

  border-radius: 12px;

  padding: 8px 12px;

  display: flex;
  align-items: center;

  transition:
    transform 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    margin: 0 2px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  position: relative;

  img {
    width: 100%;
    display: block;
    border-radius: 16px;
    transition:
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      filter 0.5s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

const Card = ({ data, index }) => {
  const { name, info, hostlink, githubUrl, imagePath, techStack } = data;

  return (
    <MainContainer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Container $index={index}>
        <Right>
          <Parallax tiltMaxAngleX={8} tiltMaxAngleY={8}>
            <ImageWrapper>
              <img src={imagePath} alt={`${name} project preview`} />
            </ImageWrapper>
          </Parallax>
        </Right>
        <Left>
          <h1>{name}</h1>
          <h3>{info}</h3>
          <TechStackContainer>
            {techStack.map((item, index) => {
              return (
                <TechStackItem
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                >
                  {item.icon && <item.icon {...item.options} />}
                </TechStackItem>
              );
            })}
          </TechStackContainer>
          <ButtonsContainer>
            <a href={hostlink}>
              <Button whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                Check out
              </Button>
            </a>
            <a href={githubUrl}>
              <Button whileHover={{ y: -3 }} whileTap={{ scale: 0.96 }}>
                View Code
              </Button>
            </a>
          </ButtonsContainer>
        </Left>
      </Container>
    </MainContainer>
  );
};

export default Card;
