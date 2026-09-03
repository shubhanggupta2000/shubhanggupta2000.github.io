import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Text = styled(motion.h1)`
  position: fixed;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};

  color: ${(props) => `rgba(${props.theme.textRgba}, 0.06)`};

  font-size: clamp(5rem, 12vw, 16rem);

  z-index: 0;
  pointer-events: none;

  user-select: none;
`;

const BigTitle = ({ text, $top, $left, $right }) => {
  return (
    <Text
      $top={$top}
      $left={$left}
      $right={$right}
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {text}
    </Text>
  );
};

export default BigTitle;
