import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const variants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -20,
    scale: 0.99,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
