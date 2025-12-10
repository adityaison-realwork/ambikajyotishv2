
import React from 'react';
import { PANDIT_IMAGE } from '../constants';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen py-16 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-sm">{t('aboutPage.subtitle')}</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mt-2">{t('aboutPage.title')}</h1>
          <div className="h-1 w-24 bg-saffron-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-saffron-200 rounded-tl-[80px] rounded-br-[80px] transform translate-x-4 translate-y-4"></div>
            <img 
              src={PANDIT_IMAGE} 
              alt="Pandit Anil Kumar Vyas" 
              className="relative z-10 w-full rounded-tl-[80px] rounded-br-[80px] shadow-xl border-4 border-white"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 shadow-lg rounded-lg border border-saffron-100 max-w-[200px]">
              <p className="text-saffron-700 font-bold text-lg leading-none">25+ Years</p>
              <p className="text-stone-500 text-xs">of Spiritual Guidance</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold text-stone-800">{t('aboutPage.tagline')}</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              "{t('aboutPage.desc')}"
            </p>

            <div className="bg-saffron-50 p-6 rounded-xl border border-saffron-100">
              <h3 className="font-bold text-saffron-800 mb-4">{t('aboutPage.eduTitle')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-saffron-500 rounded-full"></span>
                  <span className="text-stone-700 text-sm">{t('aboutPage.edu1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-saffron-500 rounded-full"></span>
                  <span className="text-stone-700 text-sm">{t('aboutPage.edu2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 bg-saffron-500 rounded-full"></span>
                  <span className="text-stone-700 text-sm">{t('aboutPage.edu3')}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-saffron-800 mb-2">{t('aboutPage.lineageTitle')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {t('aboutPage.lineageDesc')}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-saffron-800 mb-2">{t('aboutPage.missionTitle')}</h3>
              <p className="text-stone-600 text-sm leading-relaxed italic border-l-4 border-saffron-400 pl-4">
                "{t('aboutPage.missionDesc')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
