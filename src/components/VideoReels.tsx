'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';

const REEL_URLS = [
  'https://www.facebook.com/reel/1622838029213202',
  'https://www.facebook.com/reel/1061491333341240',
  'https://www.facebook.com/reel/2009947776548413',
  'https://www.facebook.com/reel/1680779969924577',
  'https://www.facebook.com/reel/1831898071547972',
  'https://www.facebook.com/reel/1345949210968547',
];

function embedSrc(reelUrl: string): string {
  return `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(
    reelUrl
  )}&show_text=false&width=267&t=0`;
}

export default function VideoReels() {
  const { language } = useLanguage();

  return (
    <section id="videos" className="py-12 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-light-text mb-2">
            🎬 {t('videos.title', language)}
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto">{t('videos.subtitle', language)}</p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {REEL_URLS.map((url, idx) => (
            <div
              key={url}
              className="bg-dark-bg border border-gray-800 rounded-lg overflow-hidden hover:border-crimson transition-all hover:shadow-lg hover:shadow-crimson/20 flex flex-col"
            >
              <div className="relative w-full aspect-[9/16] bg-gray-800">
                <iframe
                  src={embedSrc(url)}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title={`Planet Auto Guinea reel ${idx + 1}`}
                />
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-semibold text-crimson hover:text-red-400 py-2 px-2 transition-colors"
              >
                {t('videos.watch_facebook', language)} ↗
              </a>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-text text-sm">📘 {t('videos.follow_cta', language)}</p>
        </div>
      </div>
    </section>
  );
}
