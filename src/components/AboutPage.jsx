import React, { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import { motion } from "framer-motion";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 15%;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ${mediaQueries(60)`
    width: 70vw;
    left: 10%;
    top: 20%;
    padding: 1.5rem;
  `}

  @media (max-width: 960px) and (min-width: 600px) {
    width: 55vw;
  }

  ${mediaQueries(40)`
    width: 60vw;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
  `}

  ${mediaQueries(30)`
    width: 50vw;
    height: auto
    backdrop-filter: none;
    margin-top: 2rem;
  `}

  ${mediaQueries(20)`
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  `}
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <PowerButton />
          <ParticleComponent theme="dark" />

          <Spaceman
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              right: "5%",
              top: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </Spaceman>

          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            I'm a software engineer based in India with a passion for crafting
            user-centric websites. My expertise covers the entire spectrum of
            web-dev, particularly within the backend domain.
            <br /> <br />
            I'm eager to collaborate with opportunities that align with my
            skills and vision. When I'm not immersed in the digital world, I
            enjoy watching films, playing basketball, and contemplating the
            complexities of existence.
            <br /> <br />I believe that every endeavor becomes an art form when
            approached with mindfulness. I eagerly anticipate the exchange of
            ideas and experiences.
          </Main>

          <BigTitle text="ABOUT" $top="70%" $left="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
