import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const LazyDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, delay = 0 }) => (
  <LazyDiv
    initial={{ y: 10, opacity: 0 }}I
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </LazyDiv>
);

export default Section;
