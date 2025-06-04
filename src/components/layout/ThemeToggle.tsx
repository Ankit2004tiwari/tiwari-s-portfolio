import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const hour = new Date().getHours();
  const isDaytime = hour >= 6 && hour < 18;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Current: ${theme} mode (${isDaytime ? 'Daytime' : 'Nighttime'})`}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-primary" />
      ) : (
        <Sun size={20} className="text-primary" />
      )}
    </button>
  );
};

export default ThemeToggle;