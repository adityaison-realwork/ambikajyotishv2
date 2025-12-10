import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { DBItem } from '../../types';
import { Plus, Trash2, Edit2, Save, X, Loader2, Search, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ItemManagerProps {
  tableName: 'services' | 'pujas' | 'vastu' | 'e_poojas';
  title: string;
}

const ItemManager: React.FC<ItemManagerProps> = ({ tableName, title }) => {
  const [items, setItems] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<DBItem | null>(null);
  const [formData, setFormData] = useState<Partial<DBItem>>({});
  const [search, setSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Fetch Data
  const fetchItems = async () => {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setItems(data);
    }
    setLoading(false);
  };

  // Realtime Subscription
  useEffect(() => {
    fetchItems();

    const channel = supabase
      .channel(`${tableName}_realtime`)
      .on('postgres_changes', { event: '*', schema: 'public', table: tableName }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setItems((prev) => {
            const exists = prev.some(item => String(item.id) === String(payload.new.id));
            if (exists) return prev;
            return [payload.new as DBItem, ...prev];
          });
        } else if (payload.eventType === 'DELETE') {
          // If we have an ID from the payload, remove it. 
          // Note: payload.old.id might be available depending on table replica identity.
          if (payload.old && payload.old.id) {
             setItems((prev) => prev.filter((item) => String(item.id) !== String(payload.old.id)));
          }
        } else if (payload.eventType === 'UPDATE') {
          setItems((prev) => prev.map((item) => (String(item.id) === String(payload.new.id) ? (payload.new as DBItem) : item)));
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tableName]);

  // CRUD Operations
  const handleDelete = async (id: string | number) => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    
    const idString = String(id);
    const previousItems = [...items];

    // Optimistic Update
    setItems(prev => prev.filter(i => String(i.id) !== idString));

    try {
      const { error } = await supabase.from(tableName).delete().eq('id', id);
      if (error) throw error;
    } catch (error: any) {
      console.error('Delete failed:', error);
      alert('Error deleting item: ' + error.message);
      // Revert if error
      setItems(previousItems);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.price) {
      alert('Title and Price are required');
      return;
    }

    setIsSaving(true);

    let resultData: DBItem | null = null;
    let error = null;

    if (editingItem) {
      // Update
      const { data, error: updateError } = await supabase
        .from(tableName)
        .update(formData)
        .eq('id', editingItem.id)
        .select()
        .single();
      
      if (data) resultData = data;
      error = updateError;
    } else {
      // Insert
      const { data, error: insertError } = await supabase
        .from(tableName)
        .insert([formData])
        .select()
        .single();

      if (data) resultData = data;
      error = insertError;
    }

    setIsSaving(false);

    if (error) {
      alert('Error saving: ' + error.message);
    } else if (resultData) {
      // Manually update state for instant feedback
      if (editingItem) {
         setItems(prev => prev.map(item => String(item.id) === String(resultData!.id) ? resultData! : item));
      } else {
         setItems(prev => [resultData!, ...prev]);
      }
      closeModal();
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setFormData({});
    setIsModalOpen(true);
  };

  const openEditModal = (item: DBItem) => {
    setEditingItem(item);
    setFormData(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({});
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
        <h2 className="text-2xl font-serif font-bold text-stone-800 flex items-center gap-2">
           <span className="w-2 h-8 bg-saffron-500 rounded-full"></span>
           {title}
        </h2>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
             <input 
               type="text" 
               placeholder="Search..." 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-200 w-full"
             />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openAddModal}
            className="bg-saffron-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 font-bold shadow-lg shadow-saffron-500/30 whitespace-nowrap"
          >
            <Plus size={18} /> Add New
          </motion.button>
        </div>
      </div>

      {/* Grid List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {loading ? (
             <div className="col-span-full flex justify-center py-20 text-saffron-500">
               <Loader2 className="animate-spin" size={40} />
             </div>
          ) : filteredItems.length === 0 ? (
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               className="col-span-full text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300"
             >
               <AlertCircle className="mx-auto text-stone-300 mb-4" size={48} />
               <p className="text-stone-500 font-medium">No services found. Create one!</p>
             </motion.div>
          ) : (
            filteredItems.map((item) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={String(item.id)}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden flex flex-col group relative"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-saffron-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                
                <div className="p-6 flex-grow">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif font-bold text-xl text-stone-800 group-hover:text-saffron-700 transition-colors line-clamp-2">{item.title}</h3>
                      <div className="bg-saffron-50 text-saffron-700 px-2 py-1 rounded text-xs font-bold whitespace-nowrap border border-saffron-100">
                        {item.price}
                      </div>
                   </div>
                   <p className="text-stone-500 text-sm line-clamp-3 mb-4 leading-relaxed">{item.description}</p>
                   {item.duration && (
                     <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-300"></div> {item.duration}
                     </div>
                   )}
                </div>

                <div className="bg-stone-50 p-3 border-t border-stone-100 flex justify-end gap-2">
                   <button 
                     onClick={() => openEditModal(item)}
                     className="p-2 text-stone-500 hover:text-white hover:bg-saffron-500 rounded-lg transition-colors"
                     title="Edit"
                   >
                     <Edit2 size={18} />
                   </button>
                   <button 
                     onClick={(e) => {
                         // Removed stopPropagation just to be safe, though unlikely to be the cause.
                         handleDelete(item.id);
                     }}
                     className="p-2 text-stone-500 hover:text-white hover:bg-red-500 rounded-lg transition-colors"
                     title="Delete"
                   >
                     <Trash2 size={18} />
                   </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Edit/Add Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-auto">
              <motion.div 
                 initial={{ scale: 0.95, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.95, opacity: 0, y: 20 }}
                 className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
              >
                <div className="bg-gradient-to-r from-saffron-500 to-orange-600 p-6 flex justify-between items-center text-white">
                  <h3 className="font-serif font-bold text-xl">{editingItem ? 'Edit Service' : 'Add New Service'}</h3>
                  <button onClick={closeModal} className="bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors">
                    <X size={20} />
                  </button>
                </div>

                <form onSubmit={handleSave} className="p-6 space-y-5">
                   <div>
                     <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Title</label>
                     <input
                       autoFocus
                       className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
                       placeholder="e.g. Navagraha Shanti"
                       value={formData.title || ''}
                       onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                     />
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Price</label>
                        <input
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
                          placeholder="e.g. ₹5100"
                          value={formData.price || ''}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Duration / Scope</label>
                        <input
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all"
                          placeholder="e.g. 2 Hours"
                          value={formData.duration || ''}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        />
                      </div>
                   </div>

                   <div>
                     <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Description</label>
                     <textarea
                       className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all min-h-[120px]"
                       placeholder="Detailed description of the service..."
                       value={formData.description || ''}
                       onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                     />
                   </div>

                   <div className="pt-4 flex gap-3">
                     <button 
                       type="button" 
                       onClick={closeModal}
                       className="flex-1 py-3 text-stone-500 hover:bg-stone-50 rounded-xl font-bold transition-colors"
                     >
                       Cancel
                     </button>
                     <button 
                       type="submit" 
                       disabled={isSaving}
                       className="flex-[2] bg-saffron-600 hover:bg-saffron-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-saffron-200 transition-all flex items-center justify-center gap-2"
                     >
                       {isSaving ? <Loader2 className="animate-spin" /> : <><Save size={18} /> Save Changes</>}
                     </button>
                   </div>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItemManager;