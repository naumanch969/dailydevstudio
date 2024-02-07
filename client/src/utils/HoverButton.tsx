import React, { useState } from "react";
import { useStateContext } from "../context/ContextProvider";

const HoverButton = ({
  className,
  onMouseMove,
  children,
}: {
  className: string;
  onMouseMove?: (x: number, y: number, width: number, height: number) => void;
  children: React.ReactNode;
}) => {
  const { setIsButtonHover } = useStateContext();
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add("hovered");
    setIsButtonHover(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove("hovered");
    setIsButtonHover(false);
    // Reset translations when the mouse leaves
    setTranslateX(0);
    setTranslateY(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Call the provided onMouseMove function, if any
    if (1) {
      const pointerX = e.clientX;
      const pointerY = e.clientY;
      const buttonWidth = e.currentTarget.clientWidth;
      const buttonHeight = e.currentTarget.clientHeight;

      const rect = e.currentTarget.getBoundingClientRect();
      const distanceFromLeft = rect.left;
      const distanceFromTop = rect.top;

      const buttonCenterX = distanceFromLeft + buttonWidth / 2;
      const buttonCenterY = distanceFromTop + buttonHeight / 2;

      // Calculate distances from the center
      const deltaX = pointerX - buttonCenterX;
      const deltaY = pointerY - buttonCenterY;

      // Translate the button along x and y based on cursor position
      const translationScale = 0.7; // Adjust this value for the desired translation speed
      setTranslateX(deltaX * 0.7);
      setTranslateY(deltaX * 0.2);

      // onMouseMove(x, y, width, height);
    }
  };

  const buttonStyle = {
    transform: `translate(${translateX}px, ${translateY}px)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ ...buttonStyle, background: "", cursor: "none" }}
      className={`${className} hover:bg-hover-gray rounded-md hover:w-fit hover:z-[2] hover:transition-all cursor-none px-2  `}
    >
      {children}
    </button>
  );
};

export default HoverButton;
