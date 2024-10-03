/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleTheme = () => {
    setIsDarkMode((prevMode)=>setIsDarkMode(!prevMode))
  }
  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}