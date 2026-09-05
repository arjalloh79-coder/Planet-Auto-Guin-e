'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/i18n/translations';
import { formatPrice, isSaleType } from '@/lib/format';
import { Vehicle } from '@/types/vehicle';
import VehicleImage from './VehicleImage';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export default function VehicleModal({ vehicle, onClose }: VehicleModalProps) {
  const { language } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  if (!vehicle) return null;

  const whatsappNumber = '224623229868';
  const priceLabel = formatPrice(vehicle.price, language);
  const message = encodeURIComponent(
    language === 'fr'
      ? `Bonjour, je suis intéressé par le ${vehicle.year} ${vehicle.make} ${vehicle.model} (${priceLabel}). Pouvez-vous m'envoyer plus d'informations?`
      : `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${priceLabel}). Can you send me more information?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const description = language === 'fr' ? vehicle.description.fr : vehicle.description.en;
  const images: (string | undefined)[] =
    vehicle.images && vehicle.images.length > 0 ? vehicle.images : [undefined];
  const currentImage = images[Math.min(activeImage, images.length - 1)];

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-crimson">
          <h2 className="text-2xl font-bold">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-text hover:text-light-text transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Image & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <VehicleImage
                src={currentImage}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                className="w-full h-64 rounded mb-3"
              />

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 mb-4">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors flex-shrink-0 ${
                        activeImage === idx ? 'border-crimson' : 'border-transparent'
                      }`}
                    >
                      <VehicleImage
                        src={img}
                        alt={`${vehicle.model} ${idx + 1}`}
                        className="w-full h-full"
                        iconClassName="text-xl"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="text-3xl font-bold text-crimson mb-2">{priceLabel}</div>
              <div className="flex gap-2 flex-wrap">
                <span className="inline-block bg-gray-800 text-light-text px-3 py-1 rounded text-sm">
                  {vehicle.year}
                </span>
                <span className="inline-block bg-crimson text-dark-bg px-3 py-1 rounded text-sm font-bold">
                  {isSaleType(vehicle.type)
                    ? t('hero.search_vente', language)
                    : t('hero.search_location', language)}
                </span>
                {vehicle.featured && (
                  <span className="inline-block bg-gray-800 text-crimson px-3 py-1 rounded text-sm font-bold border border-crimson">
                    ⭐ {language === 'fr' ? 'Vedette' : 'Featured'}
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              {vehicle.badge && (
                <p className="text-sm text-crimson font-semibold">✓ {vehicle.badge}</p>
              )}
              <p className="text-gray-text">{description}</p>

              <div className="grid grid-cols-2 gap-4 bg-gray-900 p-4 rounded">
                <div>
                  <span className="text-gray-text text-sm block">{t('vehicle.km', language)}</span>
                  <span className="text-light-text font-bold">{vehicle.mileage}</span>
                </div>
                <div>
                  <span className="text-gray-text text-sm block">{t('vehicle.fuel', language)}</span>
                  <span className="text-light-text font-bold">{vehicle.fuel}</span>
                </div>
                <div>
                  <span className="text-gray-text text-sm block">
                    {t('vehicle.transmission', language)}
                  </span>
                  <span className="text-light-text font-bold">{vehicle.transmission}</span>
                </div>
                {vehicle.specs?.seats && (
                  <div>
                    <span className="text-gray-text text-sm block">{t('vehicle.seats', language)}</span>
                    <span className="text-light-text font-bold">{vehicle.specs.seats}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Specifications - only shown when provided */}
          {vehicle.specs && (
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="font-bold text-light-text mb-4">
                {language === 'fr' ? 'Spécifications' : 'Specifications'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vehicle.specs.color && (
                  <div>
                    <span className="text-gray-text text-sm block">{t('vehicle.color', language)}</span>
                    <span className="text-light-text font-bold">{vehicle.specs.color}</span>
                  </div>
                )}
                {vehicle.specs.engine && (
                  <div>
                    <span className="text-gray-text text-sm block">
                      {t('vehicle.engine', language)}
                    </span>
                    <span className="text-light-text font-bold">{vehicle.specs.engine}</span>
                  </div>
                )}
                {vehicle.specs.horsepower && (
                  <div>
                    <span className="text-gray-text text-sm block">
                      {t('vehicle.horsepower', language)}
                    </span>
                    <span className="text-light-text font-bold">{vehicle.specs.horsepower}</span>
                  </div>
                )}
                {vehicle.specs.seats && (
                  <div>
                    <span className="text-gray-text text-sm block">{t('vehicle.seats', language)}</span>
                    <span className="text-light-text font-bold">{vehicle.specs.seats}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:+224623229868`}
              className="btn-secondary flex-1 text-center"
            >
              📞 {t('modal.call', language)}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 text-center"
            >
              💬 {t('modal.whatsapp', language)}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
