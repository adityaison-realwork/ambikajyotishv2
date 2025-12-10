
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Lock } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-saffron-400 mb-4">Ambika Jyotish</h2>
          <p className="mb-6 text-sm leading-relaxed">
            {t('footer.brandDesc')}
          </p>
          <div className="text-saffron-200 font-semibold text-sm">
            Pandit Anil Kumar Vyas
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/about" className="hover:text-saffron-400 transition-colors">{t('nav.about')}</NavLink></li>
            <li><NavLink to="/services" className="hover:text-saffron-400 transition-colors">{t('nav.services')}</NavLink></li>
            <li><NavLink to="/pujas" className="hover:text-saffron-400 transition-colors">{t('nav.pujas')}</NavLink></li>
            <li><NavLink to="/vastu" className="hover:text-saffron-400 transition-colors">{t('nav.vastu')}</NavLink></li>
            <li><NavLink to="/e-puja" className="hover:text-saffron-400 transition-colors">{t('nav.epuja')}</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t('footer.contactUs')}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-saffron-500">📍</span>
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-saffron-500">📞</span>
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-saffron-500">✉️</span>
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
           <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
           <p className="mt-1">{t('footer.design')}</p>
        </div>
        <NavLink to="/admin" className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:text-saffron-500 transition-opacity">
           <Lock size={12} /> Admin
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
