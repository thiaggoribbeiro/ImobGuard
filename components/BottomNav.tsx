
import React from 'react';
import { AppScreen } from '../types';

interface BottomNavProps {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, onNavigate }) => {
  const items = [
    { screen: AppScreen.PROPERTY_SELECTION, icon: 'space_dashboard', label: 'Início' },
    { screen: AppScreen.ROUND_CAPTURE, icon: 'shield_with_heart', label: 'Ronda' },
    { screen: AppScreen.ROUND_HISTORY, icon: 'manage_search', label: 'Fluxo' },
    { screen: AppScreen.PROFILE, icon: 'account_circle', label: 'Perfil' },
  ];

  return (
    <nav className="flex-none bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 pb-safe z-40 shadow-2xl">
      <div className="flex justify-around items-center h-20">
        {items.map((item) => {
          const isActive = activeScreen === item.screen;
          return (
            <button 
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className={`flex flex-col items-center justify-center w-full h-full transition-all gap-1 ${isActive ? 'text-primary' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
            >
              <div className={`flex items-center justify-center rounded-2xl w-12 h-8 transition-all ${isActive ? 'bg-primary/10' : 'bg-transparent'}`}>
                <span className={`material-symbols-outlined text-[26px] ${isActive ? 'filled' : ''}`}>
                  {item.icon}
                </span>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-wider transition-all ${isActive ? 'opacity-100 scale-100' : 'opacity-70 scale-95'}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
