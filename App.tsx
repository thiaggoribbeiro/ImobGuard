
import React, { useState, useEffect } from 'react';
import { AppScreen, Property } from './types';
import LoginView from './components/LoginView';
import PropertySelectionView from './components/PropertySelectionView';
import RoundCaptureView from './components/RoundCaptureView';
import RoundHistoryView from './components/RoundHistoryView';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.LOGIN);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen(AppScreen.PROPERTY_SELECTION);
  };

  // Handle property selection
  const handleSelectProperty = (property: Property) => {
    setSelectedProperty(property);
    setCurrentScreen(AppScreen.ROUND_CAPTURE);
  };

  // Handle round submission
  const handleRoundSubmitted = () => {
    setCurrentScreen(AppScreen.ROUND_HISTORY);
  };

  // If not logged in, always show login screen
  if (!isLoggedIn) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        {currentScreen === AppScreen.PROPERTY_SELECTION && (
          <PropertySelectionView 
            onSelectProperty={handleSelectProperty} 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
          />
        )}
        {currentScreen === AppScreen.ROUND_CAPTURE && selectedProperty && (
          <RoundCaptureView 
            property={selectedProperty} 
            onBack={() => setCurrentScreen(AppScreen.PROPERTY_SELECTION)}
            onFinish={handleRoundSubmitted}
          />
        )}
        {currentScreen === AppScreen.ROUND_HISTORY && (
          <RoundHistoryView />
        )}
        {currentScreen === AppScreen.PROFILE && (
          <div className="p-8 flex flex-col items-center justify-center min-h-full">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/40 shadow-xl shadow-primary/10">
               <span className="material-symbols-outlined text-5xl text-primary">person</span>
            </div>
            <h2 className="text-2xl font-bold">Oficial J. Doe</h2>
            <p className="text-slate-500 dark:text-text-secondary-dark font-medium">Badge: #77291</p>
            
            <div className="w-full max-w-xs mt-10 space-y-4">
               <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">
                    {isDarkMode ? 'dark_mode' : 'light_mode'}
                  </span>
                  <span className="font-semibold">{isDarkMode ? 'Modo Escuro' : 'Modo Claro'}</span>
                </div>
                <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-primary' : 'bg-slate-300'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </div>
              </button>

              <button 
                onClick={() => setIsLoggedIn(false)}
                className="w-full px-6 py-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl font-bold border border-red-100 dark:border-red-900/40 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">logout</span>
                Sair do Sistema
              </button>
            </div>
          </div>
        )}
      </div>

      {currentScreen !== AppScreen.LOGIN && (
        <BottomNav 
          activeScreen={currentScreen} 
          onNavigate={(screen) => setCurrentScreen(screen)} 
        />
      )}
    </div>
  );
};

export default App;
