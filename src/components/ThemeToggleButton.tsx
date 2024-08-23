import React from 'react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggleButton() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='text-4xl'>
      {isDarkTheme ? '🌣' : '☾'}
    </button>
  );
}
