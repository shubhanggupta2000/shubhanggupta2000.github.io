import React, { Suspense, lazy } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { lightTheme, mediaQueries } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import icons from "../subComponents/icons";
import "../../src/skills.css";
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
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
    flex-direction: column;
    padding: 8rem 0;
    height: auto;

    & > * :nth-child(5) {
      margin-bottom: 5rem;
    }
  `}

  ${mediaQueries(30)`
    & > * :nth-child(5) {
      margin-bottom: 4rem;
    }
  `}
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  ${mediaQueries(60)`
    height: 55vh;
  `}

  ${mediaQueries(50)`
    width: 50vw;
    height: max-content;
  `}

  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
    font-size: calc(0.8em + 1vw);
  `}

  ${mediaQueries(50)`
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem;
  `}

  ${mediaQueries(30)`
    font-size: calc(1em + 1vw);
  `}

  ${mediaQueries(60)`
    font-size: calc(0.8em + 1vw);
    svg{
      width: 30px;
      height: 30px;
    }
  `}

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size:calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size:calc(0.5em + 1vw);
  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  const theme1 = useTheme();

  const IconItem = (props) => {
    return (
      <div className="skill_item" draggable={true}>
        {React.createElement(props.icon, props.options)}
        <div className="skill_description">
          <h2>{props.name}</h2>
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <div className="title" style={{ backgroundColor: theme1.body }}>
          My Tech Stack
        </div>
        <div className="skills" style={{ backgroundColor: theme1.body }}>
          <div className="skill_icons_section">
            {icons.map(
              (icons, index) =>
                icons.icon && (
                  <IconItem
                    key={index}
                    icon={icons.icon}
                    options={icons.options}
                    name={icons.name}
                  ></IconItem>
                )
            )}
          </div>
        </div>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <SocialIcons theme="light" />
          <PowerButton />
          <ParticleComponent theme="light" />

          <Main>
            <Title>
              <Design width={40} height={40} /> Designer
            </Title>
            <Description>
              I love to create design which speaks, Keep it clean, minimal and
              simple.
            </Description>
            <Description>
              <strong>I like to Design</strong>
              <ul>
                <li>Web Pages</li>
                <li>Mobile Apps</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong>
              <ul>
                <li>Figma, Canva</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Frontend Developer
            </Title>
            <Description>
              I value business or brand for which I'm creating, thus I enjoy
              bringing new ideas to life.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                HTML, CSS, Javascript, React, Redux, Sass, Bootstrap, Tailwind,
                etc.{" "}
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>VScode, Github, Azure Devops etc.</p>
            </Description>
          </Main>

          <BigTitle text="SKILLS" $top="10%" $right="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
