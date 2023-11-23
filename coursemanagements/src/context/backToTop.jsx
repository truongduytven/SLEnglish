import React, { createContext, useContext, useEffect, useState } from 'react';

const BackToTopContext = createContext();

export const useBackToTop = () => {
  return useContext(BackToTopContext);
};

const BackToTopProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevPosition, setPrevPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = document.documentElement.scrollTop;
      setIsVisible(position === 0 || position <= prevPosition);
      setPrevPosition(position);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [prevPosition]);

  const handleBackTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const value = {
    isVisible,
    handleBackTop,
  };

  return (
    <BackToTopContext.Provider value={value}>
      {children}
    </BackToTopContext.Provider>
  );
};

export default BackToTopProvider;
