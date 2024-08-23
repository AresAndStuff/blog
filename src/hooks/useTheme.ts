// src/hooks/useTheme.ts
import { useStore } from '@nanostores/react';
import { userPreferences } from './userPreferences';
import { useEffect } from 'react';

export const useTheme = () => {
  const preferences = useStore(userPreferences);

  const toggleTheme = () => {
    const newTheme = !preferences["dark-web-theme"];
    userPreferences.set({
      ...preferences,
      "dark-web-theme": newTheme
    });

    // Update the HTML tag class without reloading
    document.documentElement.className = newTheme ? 'theme-dark' : 'theme-light';

    // Persist to local storage
    localStorage.setItem('dark-web-theme', JSON.stringify(newTheme));
  };

  // Apply theme from local storage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-web-theme');
    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      userPreferences.set({ "dark-web-theme": isDark });
      document.documentElement.className = isDark ? 'theme-dark' : 'theme-light';
    }
  }, []);

  return {
    isDarkTheme: preferences["dark-web-theme"],
    toggleTheme,
  };
};
