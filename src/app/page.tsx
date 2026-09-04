'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VehicleGrid from '@/components/VehicleGrid';
import TimbiStore from '@/components/TimbiStore';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import vehiclesData from '../../data/vehicles.json';

interface SearchFilters {
  make: string;
  budget: string;
  type: string;
}

export default function Home() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    make: '',
    budget: '',
    type: '',
  });

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    setTimeout(() => {
      document.getElementById('inventory')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="bg-dark-bg">
      <Header />
      <Hero onSearch={handleSearch} />
      <VehicleGrid vehicles={vehiclesData.vehicles} filters={searchFilters} />
      <TimbiStore />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
