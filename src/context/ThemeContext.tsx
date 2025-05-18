
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = {
  whiteMode: boolean;
  toggleWhiteMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [whiteMode, setWhiteMode] = useState(false);

  const toggleWhiteMode = () => {
    setWhiteMode((prev) => !prev);
    document.documentElement.classList.toggle('white-mode-text');
  };

  return (
    <ThemeContext.Provider value={{ whiteMode, toggleWhiteMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
