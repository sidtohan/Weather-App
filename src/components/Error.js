// Responsible for error handling
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleError } from "../reducers/errorReducer";

const errorVariants = {
  hidden: {
    scale: 0,
    y: -40,
    opacity: 0,
  },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};
const Error = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  useEffect(() => {
    setTimeout(() => dispatch(toggleError(null)), 2000);
  }, [error]);
  return (
    <AnimatePresence exitBeforeEnter>
      {error && (
        <motion.div
          className="error-div"
          variants={errorVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Icon icon="bxs:error-circle" className="error-icon" />
          {error}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Error;
