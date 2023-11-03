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
      className="elem pb-6 mb-8 border-b border-black cursor-pointer observe"
    >
      <div className="shown flex justify-between items-center">
        <h2 className="">{name}</h2>
        <span className="text-2xl">{isHidden ? "+" : "-"}</span>
      </div>
      <div className={isHidden ? "hidden" : "pt-4"}>{text}</div>
    </div>
  );
}

export default ElemComponent;
