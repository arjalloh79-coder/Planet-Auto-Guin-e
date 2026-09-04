'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';

export default function Footer() {
  const { language } = useLanguage();

  const whatsappNumber = '224623229868';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer id="contact" className="bg-gray-900 border-t-2 border-crimson px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-crimson rounded-full flex items-center justify-center">
                <span className="text-dark-bg font-bold text-lg">🚗</span>
              </div>
              <div>
                <h3 className="font-bold text-light-text">Planet Auto Guinea</h3>
                <p className="text-xs text-crimson">Timbi Store</p>
              </div>
            </div>
            <p className="text-gray-text text-sm mb-2">
              {language === 'fr'
                ? 'Vente & Location de Véhicules'
                : 'Sale & Rental of Vehicles'}
            </p>
            <p className="text-gray-text text-sm">
              {t('footer.address', language)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-light-text mb-4">
              {language === 'fr' ? 'Liens Rapides' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-text hover:text-crimson transition-colors"
                >
                  {t('header.home', language)}
                </a>
              </li>
              <li>
                <a
                  href="#inventory"
                  className="text-gray-text hover:text-crimson transition-colors"
                >
                  {t('header.stock', language)}
                </a>
              </li>
              <li>
                <a
                  href="#timbi"
                  className="text-gray-text hover:text-crimson transition-colors"
                >
                  {t('timbi.title', language)}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-light-text mb-4">
              {t('footer.phone', language)}
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+224623229868"
                className="flex items-center gap-2 text-gray-text hover:text-crimson transition-colors"
              >
                <span>📞</span>
                <span>+224 623 22 98 68</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-text hover:text-crimson transition-colors"
              >
                <span>💬</span>
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:info@planetautoguinea.com"
                className="flex items-center gap-2 text-gray-text hover:text-crimson transition-colors"
              >
                <span>✉️</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-text text-sm">
            {t('footer.copyright', language)}
          </p>
          <p className="text-center text-gray-text text-xs mt-2">
            {language === 'fr'
              ? 'Conçu avec ❤️ pour Planet Auto Guinea'
              : 'Designed with ❤️ for Planet Auto Guinea'}
          </p>
        </div>
      </div>
    </footer>
  );
}
