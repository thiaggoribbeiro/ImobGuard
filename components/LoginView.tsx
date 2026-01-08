
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

interface LoginViewProps {
  onLogin: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        if (authError.message === 'Invalid login credentials') {
          setError('E-mail ou senha incorretos');
        } else {
          setError(authError.message);
        }
        return;
      }

      if (data.user) {
        onLogin();
      }
    } catch (err) {
      setError('Erro ao conectar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-[380px] flex flex-col gap-6">
        {/* Logo e Branding */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-24 h-24 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="ImobGuard Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="text-center">
            <h1 className="text-3xl tracking-tight text-slate-800">
              <span className="font-normal">Imob</span>
              <span className="font-bold">Guard</span>
            </h1>
            <p className="text-primary text-sm font-medium mt-1">
              Segurança Patrimonial
            </p>
          </div>

          <p className="text-slate-500 text-base mt-2">
            Bem-vindo de volta
          </p>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
            {error}
          </div>
        )}

        {/* Formulário */}
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          {/* Campo E-mail */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-700 text-sm font-semibold">E-mail</label>
            <div className="flex w-full items-center rounded-full border border-slate-300 bg-white overflow-hidden h-14 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <div className="pl-5 pr-3 text-slate-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">mail</span>
              </div>
              <input
                className="flex-1 w-full h-full bg-transparent pr-5 text-slate-700 placeholder:text-slate-400 focus:outline-none border-none text-base"
                placeholder="seu@email.com"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Campo Senha */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-slate-700 text-sm font-semibold">Senha</label>
              <a className="text-primary hover:text-orange-600 text-sm font-medium transition-colors" href="#">
                Esqueceu a senha?
              </a>
            </div>
            <div className="flex w-full items-center rounded-full border border-slate-300 bg-white overflow-hidden h-14 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <div className="pl-5 pr-3 text-slate-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">lock</span>
              </div>
              <input
                className="flex-1 w-full h-full bg-transparent text-slate-700 placeholder:text-slate-400 focus:outline-none border-none text-base"
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pr-5 pl-3 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[22px]">
                  {showPassword ? 'visibility' : 'visibility_off'}
                </span>
              </button>
            </div>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-primary hover:bg-orange-700 disabled:bg-orange-400 active:scale-[0.98] text-white font-bold h-14 rounded-full shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 text-base"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                <span>Entrando...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">login</span>
                <span>Entrar</span>
              </>
            )}
          </button>
        </form>

        {/* Link criar conta */}
        <div className="text-center mt-2">
          <p className="text-slate-500 text-sm">
            Não tem uma conta? <a href="#" className="text-primary font-semibold hover:text-orange-600 transition-colors">Criar agora</a>
          </p>
        </div>

        {/* Versão */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-xs font-medium tracking-widest uppercase">
            Versão 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
