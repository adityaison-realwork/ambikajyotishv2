import React, { useEffect, useState } from 'react';
import { supabase } from '../../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import ItemManager from '../../components/admin/ItemManager';
import { LogOut, Sun, Flame, Map, Globe, Menu, X, LayoutDashboard } from 'lucide-react';
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
    <div className="min-h-screen bg-stone-100 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <aside className={`fixed lg:sticky top-0 h-screen w-72 bg-white border-r border-stone-200 z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-8 h-full flex flex-col">
           <div className="flex items-center gap-3 mb-12 text-stone-800">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-xl flex items-center justify-center font-serif font-bold text-xl text-white shadow-lg shadow-saffron-200">A</div>
              <div>
                <h1 className="font-serif font-bold text-lg">Ambika Admin</h1>
                <p className="text-xs text-stone-400 font-bold uppercase tracking-wider">Dashboard</p>
              </div>
           </div>

           <nav className="space-y-2 flex-grow">
             {tabs.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => { setActiveTab(tab.id as any); setIsSidebarOpen(false); }}
                 className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${activeTab === tab.id ? 'bg-saffron-50 text-saffron-700 font-bold border border-saffron-100' : 'text-stone-500 hover:bg-stone-50 hover:text-stone-800'}`}
               >
                 <tab.icon size={20} className={activeTab === tab.id ? 'text-saffron-600' : 'text-stone-400'} />
                 {tab.label}
               </button>
             ))}
           </nav>

           <div className="pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3 mb-6 bg-stone-50 p-3 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-saffron-200 text-saffron-700 flex items-center justify-center text-xs font-bold border border-saffron-300">
                  {user?.email?.[0].toUpperCase()}
                </div>
                <div className="truncate text-xs font-medium text-stone-600 w-32">
                    {user?.email}
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 text-stone-500 hover:text-red-500 hover:bg-red-50 py-2 rounded-lg transition-all text-sm font-bold uppercase tracking-wider"
              >
                <LogOut size={16} /> Sign Out
              </button>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 p-4 lg:hidden flex items-center justify-between sticky top-0 z-30">
          <div className="font-serif font-bold text-stone-800 flex items-center gap-2">
            <LayoutDashboard size={18} className="text-saffron-600"/> Dashboard
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-stone-600 hover:bg-stone-100 rounded-lg">
             {isSidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        <div className="p-6 lg:p-12 max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ItemManager 
              tableName={activeTab} 
              title={`Manage ${tabs.find(t => t.id === activeTab)?.label}`} 
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;