
import React from 'react';
import { Property } from '../types';
import { PROPERTIES } from '../constants';

interface PropertySelectionViewProps {
  onSelectProperty: (property: Property) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const PropertySelectionView: React.FC<PropertySelectionViewProps> = ({ onSelectProperty, isDarkMode, toggleTheme }) => {
  const getIcon = (type: Property['type']) => {
    switch (type) {
      case 'warehouse': return 'warehouse';
      case 'business': return 'apartment';
      case 'residential': return 'home';
      case 'store': return 'storefront';
      case 'factory': return 'factory';
      default: return 'domain';
    }
  };

  const getStatusColorClass = (status: Property['status']) => {
    switch (status) {
      case 'active': return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400';
      case 'pending': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400';
      case 'normal': return 'bg-orange-100 dark:bg-primary/20 text-primary';
      case 'inactive': return 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
      default: return '';
    }
  };

  const getBadgeClass = (status: Property['status']) => {
    switch (status) {
      case 'active': return 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 ring-red-600/10 dark:ring-red-400/20';
      case 'pending': return 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 ring-amber-600/20 dark:ring-amber-400/20';
      case 'normal': return 'bg-orange-50 dark:bg-primary/10 text-primary ring-primary/20 dark:ring-primary/30';
      default: return 'bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 ring-slate-500/10 dark:ring-slate-400/20';
    }
  };

  return (
    <div className="flex flex-col min-h-full">
      <header className="sticky top-0 z-20 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
        <div className="flex items-center p-4 justify-between">
          <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark hover:opacity-80 transition-colors">
            <span className="material-symbols-outlined text-slate-600 dark:text-white">menu</span>
          </button>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">Selecionar Imóvel</h2>
          <button 
            onClick={toggleTheme}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark text-primary"
          >
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
        <div className="px-4 pb-4">
          <div className="flex w-full items-center rounded-xl h-12 bg-white dark:bg-surface-dark shadow-sm border border-slate-200 dark:border-border-dark focus-within:ring-2 focus-within:ring-primary/20">
            <div className="flex items-center justify-center pl-4 pr-2 text-slate-400">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="flex w-full min-w-0 flex-1 bg-transparent border-none focus:ring-0 text-base font-medium placeholder:text-slate-400 text-slate-900 dark:text-white h-full px-0" 
              placeholder="Buscar imóvel..."
            />
            <button className="flex items-center justify-center pr-4 pl-2 text-primary">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="px-4 py-4">
          <div className="flex h-11 w-full items-center rounded-xl bg-slate-100 dark:bg-surface-dark p-1">
            <button className="flex-1 h-full flex items-center justify-center rounded-lg bg-white dark:bg-primary shadow-sm">
              <span className="text-sm font-bold text-slate-900 dark:text-white">Todos</span>
            </button>
            <button className="flex-1 h-full flex items-center justify-center rounded-lg transition-all">
              <span className="text-sm font-bold text-slate-500 dark:text-text-secondary-dark">Urgentes</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4">
          {PROPERTIES.map((property) => (
            <div 
              key={property.id} 
              onClick={() => onSelectProperty(property)}
              className={`group relative flex flex-col gap-2 rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-transparent active:scale-[0.98] transition-all cursor-pointer overflow-hidden`}
            >
              {property.status === 'active' && <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${getStatusColorClass(property.status)} shadow-sm`}>
                    <span className="material-symbols-outlined text-[28px]">{property.status === 'active' ? 'warning' : getIcon(property.type)}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{property.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-text-secondary-dark mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      {property.address}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">arrow_forward_ios</span>
              </div>
              <div className="flex items-center gap-2 mt-2 pl-16">
                <span className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ring-1 ring-inset ${getBadgeClass(property.status)}`}>
                  {property.statusText}
                </span>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{property.distance}</span>
              </div>
            </div>
          ))}
          <div className="h-10"></div>
        </div>
      </main>
    </div>
  );
};

export default PropertySelectionView;
