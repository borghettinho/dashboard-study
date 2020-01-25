import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../animations/404.json";

const NotFound = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
    setTimeout(() => {
      history.push("/");
    }, 500);
  }, 3000);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <Lottie options={defaultOptions} height={400} width={500} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotFound;
