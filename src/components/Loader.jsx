import React from "react";
import { motion } from "framer-motion";
import "./Loader.css"; // optional for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader-circle"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;