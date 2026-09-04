'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';

export default function MobileStickyCTA() {
  const { language } = useLanguage();

  const whatsappNumber = '224623229868';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-dark-bg border-t-2 border-crimson z-30">
      <div className="flex gap-2 p-3 max-w-7xl mx-auto">
        <a
          href="tel:+224623229868"
          className="flex-1 btn-secondary py-3 text-center font-bold flex items-center justify-center gap-2"
        >
          <span>📞</span>
          {t('mobile_cta.call', language)}
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-primary py-3 text-center font-bold flex items-center justify-center gap-2"
        >
          <span>💬</span>
          {t('mobile_cta.whatsapp', language)}
        </a>
      </div>
    </div>
  );
}
