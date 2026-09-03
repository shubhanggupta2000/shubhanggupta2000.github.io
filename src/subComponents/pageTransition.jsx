import { motion } from "framer-motion";

const variants = {
  left: {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: { x: "100vw", opacity: 0, transition: { duration: 0.5 } },
  },
  right: {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5 } },
  },
  top: {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: { y: "100vh", opacity: 0, transition: { duration: 0.5 } },
  },
  bottom: {
    initial: { y: "100vh", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
    exit: { y: "-100vh", opacity: 0, transition: { duration: 0.5 } },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  },
};

const PageTransition = ({ children, direction = "fade" }) => (
  <motion.div
    variants={variants[direction]}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{ width: "100%", height: "100%" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
