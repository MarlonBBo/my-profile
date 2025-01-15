import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useState, useEffect } from 'react';

interface ButtonProps {
    className?: string;
    label: string;
}

const ThemeToggleButton: React.FC<ButtonProps> = ({ className }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Sincronizar o tema com o sistema ou localStorage
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`${className}`}
    >
        <div className="border border-zinc-700 dark:hover:bg-zinc-700 p-2 rounded-xl hover:bg-zinc-200 transition duration-500">
       {darkMode ? <FiSun className="w-6 h-6"/> : <FaMoon className="w-6 h-6"/>} 
       </div>
    </button>
  );
};

export default ThemeToggleButton;
