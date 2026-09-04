'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';

export default function TimbiStore() {
  const { language } = useLanguage();

  const whatsappNumber = '224623229868';
  const message = encodeURIComponent(
    language === 'fr'
      ? 'Bonjour, je suis intéressé par les accessoires auto chez Timbi Store.'
      : 'Hi, I am interested in car accessories at Timbi Store.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const accessories = [
    {
      icon: '🟫',
      title_fr: 'Tapis de Sol',
      title_en: 'Floor Mats',
      desc_fr: 'Personnalisés & durables',
      desc_en: 'Custom & durable',
    },
    {
      icon: '🎛️',
      title_fr: 'Couvre-Volants',
      title_en: 'Steering Covers',
      desc_fr: 'Confort & style premium',
      desc_en: 'Premium comfort & style',
    },
    {
      icon: '🌸',
      title_fr: 'Parfums Auto',
      title_en: 'Car Fresheners',
      desc_fr: 'Fragrances exclusives',
      desc_en: 'Exclusive fragrances',
    },
    {
      icon: '🔋',
      title_fr: 'Batteries',
      title_en: 'Batteries',
      desc_fr: 'Solite • Amaron • Varta',
      desc_en: 'Solite • Amaron • Varta',
    },
  ];

  return (
    <section id="timbi" className="py-12 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text mb-2">
            🛍️ {t('timbi.title', language)}
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto mb-4">
            {t('timbi.description', language)}
          </p>
        </div>

        {/* Accessories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {accessories.map((acc, idx) => (
            <div
              key={idx}
              className="bg-dark-bg border-2 border-crimson rounded-lg p-4 text-center hover:shadow-lg hover:shadow-crimson/20 transition-all"
            >
              <div className="text-4xl mb-2">{acc.icon}</div>
              <h3 className="font-bold text-light-text mb-1">
                {language === 'fr' ? acc.title_fr : acc.title_en}
              </h3>
              <p className="text-sm text-gray-text">
                {language === 'fr' ? acc.desc_fr : acc.desc_en}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-center py-3"
          >
            💬 {t('header.whatsapp', language)}
          </a>
          <a
            href="tel:+224623229868"
            className="btn-secondary flex-1 text-center py-3"
          >
            📞 {language === 'fr' ? 'Appeler' : 'Call'}
          </a>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <p className="text-light-text font-bold mb-1">
              {language === 'fr' ? 'Qualité Premium' : 'Premium Quality'}
            </p>
            <p className="text-sm text-gray-text">
              {language === 'fr'
                ? 'Produits haut de gamme garantis'
                : 'Guaranteed premium products'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🚚</div>
            <p className="text-light-text font-bold mb-1">
              {language === 'fr' ? 'Livraison Rapide' : 'Fast Delivery'}
            </p>
            <p className="text-sm text-gray-text">
              {language === 'fr'
                ? 'Livraison partout à Conakry'
                : 'Delivery across Conakry'}
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-light-text font-bold mb-1">
              {language === 'fr' ? 'Prix Compétitifs' : 'Competitive Prices'}
            </p>
            <p className="text-sm text-gray-text">
              {language === 'fr'
                ? 'Meilleur rapport qualité-prix'
                : 'Best value for money'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
