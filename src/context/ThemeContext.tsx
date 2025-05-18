
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define los tipos de color disponibles
type ColorTheme = 'default' | string; // Permitir cualquier valor de color personalizado

type ThemeContextType = {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Set the default color to #00ACFB
  const [colorTheme, setColorTheme] = useState<ColorTheme>('#00ACFB');

  const handleThemeChange = (theme: ColorTheme) => {
    // Remove all theme classes first
    document.documentElement.classList.remove(
      'lightblue-mode-text', 
      'royalblue-mode-text',
      'navyblue-mode-text',
      'tealblue-mode-text',
      'custom-blue-mode-text'
    );
    
    if (theme === 'default') {
      // Usar el color azul por defecto (#00ACFB)
      document.documentElement.style.setProperty('--custom-blue-color', '#00ACFB');
    } else if (['lightblue', 'royalblue', 'navyblue', 'tealblue'].includes(theme)) {
      // Usar uno de los temas predefinidos
      document.documentElement.classList.add(`${theme}-mode-text`);
    } else {
      // Usar un color personalizado
      document.documentElement.style.setProperty('--custom-blue-color', theme);
      document.documentElement.classList.add('custom-blue-mode-text');
    }
    
    setColorTheme(theme);
  };

  // Initialize the color when the component mounts
  React.useEffect(() => {
    handleThemeChange(colorTheme);
  }, []);

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
