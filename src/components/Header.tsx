'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t, Language } from '@/i18n/translations';
import Logo from './Logo';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappNumber = '224623229868';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const navLinks = [
    { key: 'header.home', href: '#home' },
    { key: 'header.stock', href: '#inventory' },
    { key: 'header.rental', href: '#inventory' },
    { key: 'header.accessories', href: '#timbi' },
    { key: 'header.contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-dark-bg border-b-2 border-crimson">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo className="w-11 h-11" />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-light-text">Planet Auto</span>
            <span className="text-xs text-crimson">Guinea</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-light-text hover:text-crimson transition-colors"
            >
              {t(key, language)}
            </a>
          ))}
        </div>

        {/* Language Switcher & CTA */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <div className="flex gap-2 bg-gray-900 rounded px-3 py-1">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded transition-all ${
                language === 'fr'
                  ? 'bg-crimson text-dark-bg font-bold'
                  : 'text-gray-text hover:text-light-text'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded transition-all ${
                language === 'en'
                  ? 'bg-crimson text-dark-bg font-bold'
                  : 'text-gray-text hover:text-light-text'
              }`}
            >
              EN
            </button>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-crimson text-dark-bg font-semibold px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            <span>💬</span>
            <span className="hidden lg:inline">{t('header.whatsapp', language)}</span>
            <span className="lg:hidden">Chat</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-light-text hover:text-crimson transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-crimson px-4 py-4 flex flex-col gap-4">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-light-text hover:text-crimson transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(key, language)}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-crimson text-dark-bg font-semibold px-4 py-2 rounded hover:bg-red-700 transition-colors text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('header.whatsapp', language)}
          </a>
        </div>
      )}
    </header>
  );
}
