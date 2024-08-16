import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import './header.scss';

const Header = () => {
  const theme = localStorage.getItem('theme');
  const [themeMode, setThemeMode] = useState(theme || 'dark');
  const handleThemeMode = () => {
    if (themeMode === 'light') {
      localStorage.setItem('theme', 'dark');
      setThemeMode('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setThemeMode('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  };
  useEffect(() => {
    if (themeMode === 'light') {
      localStorage.setItem('theme', 'light');
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
  }, [themeMode]);
  return (
    <div className="header__wrapper">
      <header className="layout__width">
        <h1>
          My<span>Store</span>
        </h1>
        <button onClick={() => handleThemeMode()}>
          {themeMode === 'dark' ? <Sun /> : <Moon />}
        </button>
      </header>
    </div>
  );
};

export default Header;
