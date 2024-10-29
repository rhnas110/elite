import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Custom hook for easy access to the context
export const useDarkMode = () => useContext(DarkModeContext);

// Context provider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial value from localStorage or default to false
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    const html = document.documentElement; // Select <html> element
    if (darkMode) {
      html.classList.add("light-dark");
    } else {
      html.classList.remove("light-dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
