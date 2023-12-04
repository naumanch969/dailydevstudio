import { ReactNode, createContext, useContext, useState } from "react";

interface StateContextProps {
  isButtonHover: boolean;
  setIsButtonHover: React.Dispatch<React.SetStateAction<boolean>>;
}

const stateContext = createContext<StateContextProps | undefined>(undefined);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isButtonHover, setIsButtonHover] = useState<boolean>(false);

  return (
    <stateContext.Provider value={{ isButtonHover, setIsButtonHover }}>
      {children}
    </stateContext.Provider>
  );
};

const useStateContext = () => {
  const context = useContext(stateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

export { ContextProvider, useStateContext };
