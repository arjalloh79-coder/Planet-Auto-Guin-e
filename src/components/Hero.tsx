'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';

interface SearchFilters {
  make: string;
  budget: string;
  type: string;
}

interface HeroProps {
  onSearch: (filters: SearchFilters) => void;
  makes: string[];
}

export default function Hero({ onSearch, makes }: HeroProps) {
  const { language } = useLanguage();
  const [filters, setFilters] = useState<SearchFilters>({
    make: '',
    budget: '',
    type: '',
  });

  const whatsappNumber = '224623229868';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-dark-bg flex flex-col items-center justify-center px-4 py-12"
    >
      {/* Hero Title & Slogan */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-light-text">
          Planet Auto Guinea
        </h1>
        <p className="text-xl md:text-2xl text-crimson font-semibold mb-2">
          {t('hero.slogan', language)}
        </p>
        <p className="text-gray-text">Conakry, Guinée</p>
      </div>

      {/* Search & Filter Bar */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-4xl bg-gray-900 border-2 border-crimson rounded-lg p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Make Filter */}
          <div>
            <label className="block text-gray-text text-sm mb-2">
              {t('hero.search_make', language)}
            </label>
            <select
              value={filters.make}
              onChange={(e) => handleFilterChange('make', e.target.value)}
              className="search-select w-full"
            >
              <option value="">Tous</option>
              {makes.map((make) => (
                <option key={make} value={make.toLowerCase()}>
                  {make}
                </option>
              ))}
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <label className="block text-gray-text text-sm mb-2">
              {t('hero.search_budget', language)}
            </label>
            <select
              value={filters.budget}
              onChange={(e) => handleFilterChange('budget', e.target.value)}
              className="search-select w-full"
            >
              <option value="">Tous</option>
              <option value="0-20000">$0 - $20k</option>
              <option value="20000-40000">$20k - $40k</option>
              <option value="40000-60000">$40k - $60k</option>
              <option value="60000+">$60k+</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-gray-text text-sm mb-2">
              {t('hero.search_type', language)}
            </label>
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="search-select w-full"
            >
              <option value="">Tous</option>
              <option value="vente">{t('hero.search_vente', language)}</option>
              <option value="location">{t('hero.search_location', language)}</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="btn-primary w-full"
            >
              {t('hero.search_button', language)}
            </button>
          </div>
        </div>
      </form>

      {/* Quick Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <button
          onClick={() =>
            document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="btn-primary px-6 py-3"
        >
          {t('hero.quick_inquiry', language)}
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary px-6 py-3 text-center"
        >
          💬 {t('header.whatsapp', language)}
        </a>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="text-center">
          <div className="text-4xl mb-2">🚗</div>
          <h3 className="font-bold text-light-text mb-2">Qualité Premium</h3>
          <p className="text-gray-text text-sm">Véhicules Américains & Européens</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">✅</div>
          <h3 className="font-bold text-light-text mb-2">100% Révisés</h3>
          <p className="text-gray-text text-sm">Tous nos véhicules sont vérifiés</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">💰</div>
          <h3 className="font-bold text-light-text mb-2">Meilleur Prix</h3>
          <p className="text-gray-text text-sm">Tarifs compétitifs garantis</p>
        </div>
      </div>
    </section>
  );
}
