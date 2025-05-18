
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ColorTheme = 'default' | 'white' | 'skyblue' | 'darkblue';

type ThemeContextType = {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>('default');

  const handleThemeChange = (theme: ColorTheme) => {
    // Remove all theme classes first
    document.documentElement.classList.remove(
      'white-mode-text', 
      'skyblue-mode-text',
      'darkblue-mode-text'
    );
    
    // Add the appropriate class based on theme
    if (theme !== 'default') {
      document.documentElement.classList.add(`${theme}-mode-text`);
    }
    
    setColorTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ 
      colorTheme, 
      setColorTheme: handleThemeChange 
    }}>
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
