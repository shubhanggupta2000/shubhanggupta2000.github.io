import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const Loader = styled(motion.div)`
  width: 60px;
  height: 60px;

  border-radius: 50%;

  border: 3px solid rgba(255, 255, 255, 0.15);
  border-top-color: currentColor;

  margin-bottom: 1.5rem;
`;

const Loading = () => {
  return (
    <Box>
      <Loader
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Preparing experience...
      </motion.h2>
    </Box>
  );
};

export default Loading;
