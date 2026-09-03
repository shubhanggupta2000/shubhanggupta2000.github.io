import React, { Suspense, lazy, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";
import { motion } from "framer-motion";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  ${mediaQueries(40)`
    width:60px;
    height:60px;   
    svg{
      width:60px;
      height:60px;
    }
  `};

  ${mediaQueries(25)`
    width:50px;
    height:50px;
    svg{
      width:50px;
      height:50px;
    }
  `};
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const yinyang = useRef(null);

  useEffect(() => {
    const rotate = () => {
      const yinyangElement = yinyang.current;
      yinyangElement.style.transform = `rotate(${window.pageYOffset}deg)`;
    };

    window.addEventListener("scroll", rotate);
    rotate();
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Suspense fallback={<Loading />}>
          <motion.div variants={container} initial="hidden" animate="show">
            {Work.map((d, index) => (
              <Card key={index} data={d} index={index} />
            ))}
          </motion.div>
        </Suspense>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitle text="PROJECTS" $top="10%" $right="10%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
