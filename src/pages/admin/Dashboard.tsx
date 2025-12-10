import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import ItemManager from '../../components/admin/ItemManager';
import { LogOut, Sun, Flame, Map, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'services' | 'pujas' | 'vastu' | 'e_poojas'>('services');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin');
      } else {
        setUser(session.user);
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const tabs = [
    { id: 'services', label: 'Services', icon: Sun },
    { id: 'pujas', label: 'Pujas', icon: Flame },
    { id: 'vastu', label: 'Vastu', icon: Map },
    { id: 'e_poojas', label: 'E-Pujas', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <aside className={`fixed lg:sticky top-0 h-screen w-72 bg-stone-900 text-stone-300 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-8">
           <div className="flex items-center gap-3 mb-10 text-white">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-lg flex items-center justify-center font-serif font-bold text-xl shadow-lg">A</div>
              <div>
                <h1 className="font-serif font-bold text-lg">Ambika Admin</h1>
                <p className="text-xs text-stone-500">Control Panel</p>
              </div>
           </div>

           <nav className="space-y-2">
             {tabs.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => { setActiveTab(tab.id as any); setIsSidebarOpen(false); }}
                 className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id ? 'bg-saffron-600 text-white font-bold shadow-lg shadow-saffron-900/50' : 'hover:bg-stone-800 hover:text-white'}`}
               >
                 <tab.icon size={20} />
                 {tab.label}
               </button>
             ))}
           </nav>
        </div>

        <div className="absolute bottom-0 w-full p-8 border-t border-stone-800">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center text-xs font-bold text-white">
               {user?.email?.[0].toUpperCase()}
             </div>
             <div className="truncate text-sm w-32">
                {user?.email}
             </div>
           </div>
           <button 
             onClick={handleLogout}
             className="flex items-center gap-2 text-stone-400 hover:text-red-400 transition-colors text-sm font-bold uppercase tracking-wider"
           >
             <LogOut size={16} /> Sign Out
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <header className="bg-white border-b border-stone-200 p-4 lg:hidden flex items-center justify-between sticky top-0 z-30">
          <div className="font-serif font-bold text-stone-800">Admin Dashboard</div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-stone-600">
             {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        <div className="p-6 lg:p-12 max-w-7xl mx-auto">
          <ItemManager 
            key={activeTab} // Force re-render when tab changes
            tableName={activeTab} 
            title={`Manage ${tabs.find(t => t.id === activeTab)?.label}`} 
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;