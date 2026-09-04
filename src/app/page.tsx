'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VehicleGrid from '@/components/VehicleGrid';
import VideoReels from '@/components/VideoReels';
import TimbiStore from '@/components/TimbiStore';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import vehiclesData from '../../data/vehicles.json';
import { Vehicle } from '@/types/vehicle';

interface SearchFilters {
  make: string;
  budget: string;
  type: string;
}

const vehicles = vehiclesData.vehicles as Vehicle[];
const uniqueMakes = Array.from(new Set(vehicles.map((v) => v.make))).sort();

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
      <Hero onSearch={handleSearch} makes={uniqueMakes} />
      <VehicleGrid vehicles={vehicles} filters={searchFilters} />
      <VideoReels />
      <TimbiStore />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
