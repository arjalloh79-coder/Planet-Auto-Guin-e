import { Language } from '@/i18n/translations';

export function formatPrice(price: number | string, language: Language): string {
  if (typeof price === 'number') {
    return `$${price.toLocaleString()}`;
  }
  if (price.trim().toLowerCase() === 'sur demande') {
    return language === 'fr' ? 'Prix sur demande' : 'Price upon request';
  }
  return price;
}

export function isSaleType(type: string): boolean {
  return type.trim().toLowerCase() === 'vente';
}
