import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const loaderVariants = {
  exit: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    duration: 0.3,
  },
};
const pathVariants = {
  visible: {
    pathLength: [0, 1, 1],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatDelay: 0.2,
    },
  },
};
const Loader = () => {
  const loading = useSelector((state) => state.loading);
  return (
    <AnimatePresence exitBeforeEnter>
      {loading && (
        <motion.div
          className="loader"
          variants={loaderVariants}
          animate="visible"
          initial="visible"
          exit="exit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.149 23.716C10.71 12.371 25.12 11.311 26.724 21.688c3.489-2.662 7.874.279 7.05 4.917c8.227.074 7.03 9.678 2.226 9.925H10.026c-7.018.174-8.418-12.394 2.123-12.814l-.267-.173"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24.1 16.008a10.668 10.668 0 1 1 15.636 14.26"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <div>Fetching Data</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
