import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4 relative overflow-hidden">
       {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl relative z-10">
        <NavLink to="/" className="inline-flex items-center gap-2 text-stone-500 hover:text-saffron-600 mb-6 text-sm font-bold transition-colors">
          <ArrowLeft size={16} /> Back to Website
        </NavLink>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-saffron-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-saffron-600">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-stone-800">Admin Portal</h1>
          <p className="text-stone-500">Sign in to manage Ambika Jyotish</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-stone-600 font-bold text-xs uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-2 border-stone-200 p-3 rounded-xl focus:border-saffron-500 focus:outline-none transition-colors"
              placeholder="admin@ambikajyotish.com"
            />
          </div>
          
          <div>
            <label className="block text-stone-600 font-bold text-xs uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-stone-200 p-3 rounded-xl focus:border-saffron-500 focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-saffron-600 hover:bg-saffron-700 text-white p-4 rounded-xl font-bold transition-all shadow-lg shadow-saffron-200 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : 'Sign In Securely'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;