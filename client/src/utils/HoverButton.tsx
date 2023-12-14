import React from "react";
import { useStateContext } from "../context/ContextProvider";

const HoverButton = ({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  const { setIsButtonHover } = useStateContext();

  return (
    <button
      onMouseEnter={(e) => {
        e.currentTarget.classList.add("hovered");
        setIsButtonHover(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove("hovered");
        setIsButtonHover(false);
      }}
      style={{ background: "" }}
      className={`${className} hover:bg-[#b4b4b48e] rounded-md hover:w-fit hover:z-[2] hover:transition-all `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HoverButton;
