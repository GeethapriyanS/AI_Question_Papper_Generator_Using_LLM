import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import Preview from './components/Preview';
import { Sun, Moon } from 'lucide-react'; // Icons
import './App.css';

function App() {
  const [generatedPaper, setGeneratedPaper] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark'); // State for theme

  // Toggle Function
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Apply the 'data-theme' attribute to the <html> tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-container">
      <header>
        <div className="header-left">
          <h1>AI Question Paper Generator 📄</h1>
          <p>Intelligent Exams powered by Google Gemini</p>
        </div>
        
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-btn" title="Toggle Theme">
          {theme === 'dark' ? <Sun size={24} color="#fcd34d" /> : <Moon size={24} color="#6366f1" />}
        </button>
      </header>
      
      <div className="main-content">
        <InputForm setGeneratedPaper={setGeneratedPaper} setLoading={setLoading} loading={loading} />
        <Preview generatedPaper={generatedPaper} />
      </div>
    </div>
  );
}

export default App;