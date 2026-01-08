
import React, { useState } from 'react';
import { Property } from '../types';

interface RoundCaptureViewProps {
  property: Property;
  onBack: () => void;
  onFinish: () => void;
}

const RoundCaptureView: React.FC<RoundCaptureViewProps> = ({ property, onBack, onFinish }) => {
  const [photoCaptured, setPhotoCaptured] = useState(false);
  const [status, setStatus] = useState<'normal' | 'incident'>('normal');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = () => {
    if (!photoCaptured) {
      alert("Por favor, capture uma foto de evidência.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onFinish();
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-full">
      <header className="sticky top-0 z-20 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 h-16 justify-between">
          <button 
            onClick={onBack}
            className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-surface-dark hover:opacity-80 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            Registo de Ronda
          </h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full max-w-md mx-auto pb-32">
        <div className="p-5 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1 border-t-2 border-primary/40 pt-3">
            <p className="text-slate-400 dark:text-text-secondary-dark text-[10px] font-black uppercase tracking-widest">Localização</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">domain</span>
              <p className="text-slate-900 dark:text-white text-sm font-bold truncate">{property.name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 border-t-2 border-primary/40 pt-3">
            <p className="text-slate-400 dark:text-text-secondary-dark text-[10px] font-black uppercase tracking-widest">Responsável</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">badge</span>
              <p className="text-slate-900 dark:text-white text-sm font-bold truncate">Oficial J. Doe</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-4">
          <h3 className="text-slate-900 dark:text-white text-base font-black mb-4 flex items-center gap-2 uppercase tracking-tight">
            <span className="material-symbols-outlined text-primary">camera</span>
            Prova Visual
          </h3>
          <div className="flex flex-col items-stretch justify-start rounded-2xl shadow-md bg-white dark:bg-surface-dark border border-slate-100 dark:border-border-dark overflow-hidden">
            <div 
              onClick={() => setPhotoCaptured(true)}
              className="relative w-full aspect-[4/3] bg-slate-50 dark:bg-slate-900 flex items-center justify-center group cursor-pointer overflow-hidden"
            >
              {photoCaptured ? (
                 <img 
                  src="https://picsum.photos/seed/security/800/600" 
                  alt="Capture" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-20 transition-transform duration-500 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf_cUAXT-oh6a73gLe7CD0_rNHLw5ZPz2LHxEjwel0puVgQ3TfLTptRsRTatCLAO1aUPel7goUZBA8BPBivFjV9823DJ0KStQNhBCB93cW8yHntDS_N3NzDsoGJZ-o7Ks6u6hhButsp5bKD-YUyWgO-LbcZH4RH6pconTbyQBn9OwiJV02NP60cK2FqoW8iN46PW1qNljUAqsvfoUHMo_IDYQL32v3ZqeI6waP4TpRR8pRWjlMjUHkzC8AGJJmvmOJSKLfpznp_OpJ")'}}></div>
              )}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="bg-primary/10 p-5 rounded-full border border-primary/20 backdrop-blur-md shadow-2xl">
                  <span className="material-symbols-outlined text-primary text-5xl">{photoCaptured ? 'check_circle' : 'photo_camera'}</span>
                </div>
                {!photoCaptured && (
                  <span className="text-slate-600 dark:text-slate-300 text-xs font-bold bg-white/80 dark:bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm uppercase">
                    Toque para capturar
                  </span>
                )}
              </div>
            </div>
            <div className="p-5 bg-white dark:bg-surface-dark">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-900 dark:text-white text-base font-black">Evidência Principal</p>
                  <p className="text-slate-500 dark:text-text-secondary-dark text-xs font-medium">Requisito para conformidade</p>
                </div>
                <button 
                  onClick={() => setPhotoCaptured(true)}
                  className={`flex items-center justify-center rounded-xl h-11 px-6 text-sm font-black shadow-lg transition-all active:scale-95 ${photoCaptured ? 'bg-green-600 text-white' : 'bg-primary text-white'}`}
                >
                  {photoCaptured ? 'ALTERAR' : 'CAPTURAR'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pt-4">
          <h3 className="text-slate-900 dark:text-white text-base font-black mb-4 flex items-center gap-2 uppercase tracking-tight">
            <span className="material-symbols-outlined text-primary">analytics</span>
            Relatório de Campo
          </h3>
          <div className="flex flex-col gap-4">
            <div 
              onClick={() => setStatus('normal')}
              className={`flex items-center justify-between rounded-2xl border-2 p-5 transition-all cursor-pointer ${status === 'normal' ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-border-dark bg-white dark:bg-surface-dark'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${status === 'normal' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-sm">Sem Ocorrências</span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">Status operacional normal</span>
                </div>
              </div>
              <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${status === 'normal' ? 'border-primary bg-primary shadow-inner' : 'border-slate-300 dark:border-slate-600'}`}>
                {status === 'normal' && <div className="h-2.5 w-2.5 rounded-full bg-white"></div>}
              </div>
            </div>

            <div 
              onClick={() => setStatus('incident')}
              className={`flex items-center justify-between rounded-2xl border-2 p-5 transition-all cursor-pointer ${status === 'incident' ? 'border-red-500 bg-red-500/5' : 'border-slate-100 dark:border-border-dark bg-white dark:bg-surface-dark'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${status === 'incident' ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'}`}>
                  <span className="material-symbols-outlined text-[28px]">gpp_maybe</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-sm">Com Incidentes</span>
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-medium">Requer atenção imediata</span>
                </div>
              </div>
              <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all ${status === 'incident' ? 'border-red-500 bg-red-500 shadow-inner' : 'border-slate-300 dark:border-slate-600'}`}>
                {status === 'incident' && <div className="h-2.5 w-2.5 rounded-full bg-white"></div>}
              </div>
            </div>

            {status === 'incident' && (
              <div className="animate-in slide-in-from-top-2 duration-300">
                <textarea 
                  className="w-full rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-border-dark p-4 text-slate-900 dark:text-white text-sm font-medium focus:border-red-500 focus:ring-0 outline-none resize-none shadow-sm" 
                  placeholder="Detalhamento do incidente (obrigatório para status crítico)..." 
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 dark:bg-background-dark/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 z-30">
        <div className="max-w-md mx-auto w-full">
          <button 
            onClick={handleFinish}
            disabled={isSubmitting || !photoCaptured}
            className={`w-full flex items-center justify-center gap-3 bg-primary hover:opacity-90 text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-primary/20 active:scale-[0.97] transition-all disabled:opacity-40 disabled:grayscale`}
          >
            {isSubmitting ? (
              <span className="material-symbols-outlined animate-spin">progress_activity</span>
            ) : (
              <>
                <span>{status === 'incident' ? 'ENVIAR OCORRÊNCIA' : 'CONFIRMAR RONDA'}</span>
                <span className="material-symbols-outlined text-xl">send</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoundCaptureView;
