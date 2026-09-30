import React from "react";

const SLAIndicator = ({ deadline }) => {
  const now = new Date();
  const due = new Date(deadline);
  const diff = (due - now) / (1000 * 60 * 60); // hours left

  let color = "green";
  if (diff < 24) color = "orange";
  if (diff < 6) color = "red";

  return (
    <div style={{ color }}>
      SLA: {diff.toFixed(1)} hours remaining
    </div>
  );
};

export default SLAIndicator;