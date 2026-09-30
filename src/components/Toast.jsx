import React, { useEffect } from "react";

const Toast = ({ type, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".toast").style.display = "none";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
};

export default Toast;