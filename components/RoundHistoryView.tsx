
import React from 'react';
import { HISTORY_RECORDS } from '../constants';

const RoundHistoryView: React.FC = () => {
  return (
    <div className="flex flex-col min-h-full">
      <header className="flex-none pt-4 pb-2 px-6 bg-background-light dark:bg-background-dark z-10 sticky top-0 backdrop-blur-md bg-opacity-95 dark:bg-opacity-95">
        <div className="flex items-center justify-between h-14">
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Histórico</h1>
          <button className="flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark shadow-sm text-primary">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </header>

      <div className="flex-none px-6 pb-4">
        <div className="relative flex items-center w-full h-12 rounded-2xl bg-white dark:bg-surface-dark shadow-sm ring-1 ring-slate-200 dark:ring-border-dark overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 transition-all">
          <div className="grid place-items-center h-full w-12 text-slate-400">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            className="peer h-full w-full border-none bg-transparent p-0 pr-4 text-slate-900 dark:text-white placeholder-slate-400 font-medium sm:text-sm focus:ring-0" 
            placeholder="Pesquisar local ou oficial..." 
          />
        </div>
      </div>

      <div className="flex-none px-6 pb-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-primary px-5 shadow-lg shadow-primary/20">
            <span className="text-white text-xs font-black uppercase tracking-widest">Todos</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark px-5 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest">
            Alertas
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark px-5 text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest">
            Meus
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-6 pb-32">
        <div className="pt-4 pb-4 sticky top-0 bg-background-light dark:bg-background-dark z-10 bg-opacity-95 backdrop-blur-sm">
          <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Fluxo de Hoje</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          {HISTORY_RECORDS.map((record) => (
            <div 
              key={record.id}
              className="group flex flex-col gap-4 rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-transparent active:scale-[0.99] transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-sm ${record.hasIncident ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-orange-50 dark:bg-primary/20 text-primary'}`}>
                    <span className="material-symbols-outlined text-[24px]">{record.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-base font-black text-slate-900 dark:text-white line-clamp-1 leading-tight tracking-tight">{record.propertyName}</p>
                    <p className="text-xs font-bold text-slate-400 dark:text-text-secondary-dark mt-1 flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      {record.timestamp} • {record.guardName}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
              </div>
              
              {record.hasIncident && (
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-border-dark">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 dark:bg-red-500/10 px-2.5 py-1 text-[10px] font-black text-red-600 dark:text-red-400 uppercase tracking-widest ring-1 ring-inset ring-red-500/20">
                    <span className="material-symbols-outlined text-[14px]">error</span>
                    CRÍTICO
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">{record.incidentDescription}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-10 pb-4 sticky top-0 bg-background-light dark:bg-background-dark z-10 bg-opacity-95 backdrop-blur-sm">
          <h3 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Ontem</h3>
        </div>
        
        <div className="flex flex-col gap-4">
           <div className="group flex items-center justify-between rounded-2xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-transparent active:scale-[0.99] transition-all cursor-pointer opacity-75">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-400">
                <span className="material-symbols-outlined text-[24px]">warehouse</span>
              </div>
              <div className="flex flex-col">
                <p className="text-base font-black text-slate-900 dark:text-white line-clamp-1 leading-tight tracking-tight">Doca Norte A</p>
                <p className="text-xs font-bold text-slate-400 dark:text-text-secondary-dark mt-1">23:30 • Finalizada</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-300 dark:text-slate-600">chevron_right</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoundHistoryView;
