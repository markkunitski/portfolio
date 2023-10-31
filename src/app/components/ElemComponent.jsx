"use client";
import React, { useState } from "react";

function ElemComponent({ name, text }) {
  const [isHidden, setIsHidden] = useState(true);

  const handleOpen = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div
      onClick={handleOpen}
      className="elem pb-6 mb-8 border-b border-black cursor-pointer"
    >
      <div className="shown flex justify-between items-center">
        <h2 className="mb-2">{name}</h2>
        <span className="text-2xl">{isHidden ? "+" : "-"}</span>
      </div>
      <div className={isHidden ? "hidden" : ""}>{text}</div>
    </div>
  );
}

export default ElemComponent;
