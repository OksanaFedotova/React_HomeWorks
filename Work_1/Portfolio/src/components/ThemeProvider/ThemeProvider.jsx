import { ThemeContext } from "../../context/context";
import { useState } from "react";

export default function ThemeProvider({children})
{
    const [theme, setTheme]  = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return(
    <ThemeContext.Provider value={{theme,toggleTheme }}>
        {children}
        </ThemeContext.Provider>
  );
} 