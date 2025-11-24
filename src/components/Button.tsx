'use client'

import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ButtonProps {
    className?: string;
    label: string;
}

const ThemeToggleButton: React.FC<ButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Não renderizar até estar montado no cliente
  if (!mounted) {
    return (
      <button className={`${className}`}>
        <div className="border border-zinc-700 dark:hover:bg-zinc-700 p-2 rounded-xl hover:bg-zinc-200 transition duration-500">
          <FaMoon className="w-6 h-6"/>
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${className}`}
    >
      <div className="border border-zinc-700 dark:hover:bg-zinc-700 p-2 rounded-xl hover:bg-zinc-200 transition duration-500">
       {theme === 'dark' ? <FiSun className="w-6 h-6"/> : <FaMoon className="w-6 h-6"/>} 
       </div>
    </button>
  );
};

export default ThemeToggleButton;
