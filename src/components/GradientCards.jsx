import React from "react";

function GradientCards({ gradient }) {
  return (
    <div className={`w-52 h-24 rounded-xl bg-gradient-to-b ${gradient}`}></div>
  );
}

export default GradientCards;
