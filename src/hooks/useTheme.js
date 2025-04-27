import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check for user preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return { theme, toggleTheme };
};

export default useTheme;


// import { useState, useEffect } from 'react';

// const useTheme = () => {
//   // Always set dark theme as default
//   const [theme] = useState('dark');
  
//   useEffect(() => {
//     // Always apply dark theme
//     document.body.classList.add('dark-theme');
//     localStorage.setItem('theme', 'dark');
//   }, []);
  
//   // No toggle function needed since we're always in dark mode
//   return { theme };
// };

// export default useThe