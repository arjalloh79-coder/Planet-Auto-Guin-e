'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';
import { formatPrice, isSaleType } from '@/lib/format';
import { Vehicle } from '@/types/vehicle';
import VehicleImage from './VehicleImage';
import VehicleModal from './VehicleModal';

interface VehicleGridProps {
  vehicles: Vehicle[];
  filters?: {
    make: string;
    budget: string;
    type: string;
  };
}

export default function VehicleGrid({ vehicles, filters = { make: '', budget: '', type: '' } }: VehicleGridProps) {
  const { language } = useLanguage();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const whatsappNumber = '224623229868';

  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((vehicle) => {
        if (filters.make && vehicle.make.toLowerCase() !== filters.make.toLowerCase()) {
          return false;
        }

        if (filters.budget && typeof vehicle.price === 'number') {
          const [min, max] = filters.budget.includes('+')
            ? [parseFloat(filters.budget), Infinity]
            : filters.budget.split('-').map(parseFloat);
          if (vehicle.price < min || vehicle.price > max) {
            return false;
          }
        }

        if (filters.type && vehicle.type.toLowerCase() !== filters.type.toLowerCase()) {
          return false;
        }

        return true;
      })
      .sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
  }, [vehicles, filters]);

  return (
    <>
      <section id="inventory" className="py-12 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-light-text mb-2">
              {t('vehicle.cards_title', language)}
            </h2>
            <p className="text-gray-text">
              {language === 'fr'
                ? `${filteredVehicles.length} véhicule(s) disponible(s)`
                : `${filteredVehicles.length} vehicle(s) available`}
            </p>
          </div>

          {/* Vehicle Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="vehicle-card relative">
                  {/* Featured Ribbon */}
                  {vehicle.featured && (
                    <span className="absolute top-2 left-2 z-10 bg-crimson text-dark-bg px-2 py-1 rounded text-xs font-bold shadow">
                      ⭐ {language === 'fr' ? 'Vedette' : 'Featured'}
                    </span>
                  )}

                  {/* Image */}
                  <VehicleImage
                    src={vehicle.images?.[0]}
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="vehicle-image"
                  />

                  {/* Content */}
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-light-text">
                          {vehicle.year} {vehicle.make}
                        </h3>
                        <p className="text-crimson font-semibold">{vehicle.model}</p>
                      </div>
                      <span className="bg-crimson text-dark-bg px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                        {isSaleType(vehicle.type)
                          ? t('hero.search_vente', language)
                          : t('hero.search_location', language)}
                      </span>
                    </div>

                    {/* Badge */}
                    {vehicle.badge && (
                      <p className="text-xs text-crimson font-semibold mb-2">✓ {vehicle.badge}</p>
                    )}

                    {/* Price */}
                    <div className="text-2xl font-bold text-crimson mb-3">
                      {formatPrice(vehicle.price, language)}
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-text">
                      <div>
                        <span className="block text-xs text-gray-400">
                          {t('vehicle.km', language)}
                        </span>
                        <span>{vehicle.mileage}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400">
                          {t('vehicle.fuel', language)}
                        </span>
                        <span>{vehicle.fuel}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400">
                          {t('vehicle.transmission', language)}
                        </span>
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-400">
                          {language === 'fr' ? 'Année' : 'Year'}
                        </span>
                        <span>{vehicle.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-text mb-4 line-clamp-2">
                      {language === 'fr' ? vehicle.description.fr : vehicle.description.en}
                    </p>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedVehicle(vehicle)}
                        className="btn-secondary text-sm"
                      >
                        {t('vehicle.see_specs', language)}
                      </button>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          language === 'fr'
                            ? `Bonjour, je suis intéressé par le ${vehicle.year} ${vehicle.make} ${vehicle.model}`
                            : `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm text-center"
                      >
                        {t('vehicle.contact_whatsapp', language)}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-text text-lg">
                {language === 'fr'
                  ? 'Aucun véhicule ne correspond à vos critères.'
                  : 'No vehicles match your criteria.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Vehicle Modal */}
      <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
    </>
  );
}
