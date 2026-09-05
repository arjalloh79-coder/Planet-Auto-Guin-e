export type Language = 'fr' | 'en';

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    'header.home': 'Accueil',
    'header.stock': 'Stock',
    'header.rental': 'Location',
    'header.accessories': 'Accessoires',
    'header.contact': 'Contact',
    'header.videos': 'Vidéos',
    'header.whatsapp': 'Chat sur WhatsApp',

    'hero.slogan': 'Vente & Location de Véhicules Américains et Européens',
    'hero.search_make': 'Marque',
    'hero.search_budget': 'Budget',
    'hero.search_type': 'Type',
    'hero.search_vente': 'Vente',
    'hero.search_location': 'Location',
    'hero.search_button': 'Rechercher',
    'hero.quick_inquiry': 'Demande Rapide',

    'vehicle.cards_title': 'Notre Inventaire',
    'vehicle.see_specs': 'Voir Fiche Technique',
    'vehicle.contact_whatsapp': 'Commander via WhatsApp',
    'vehicle.price': 'Prix',
    'vehicle.km': 'Kilométrage',
    'vehicle.fuel': 'Carburant',
    'vehicle.transmission': 'Transmission',
    'vehicle.seats': 'Places',
    'vehicle.color': 'Couleur',
    'vehicle.engine': 'Moteur',
    'vehicle.horsepower': 'Chevaux',

    'timbi.title': 'Timbi Store - Accessoires Auto',
    'timbi.description': 'Tapis de sol personnalisés • Couvre-volants • Parfum auto • Batteries (Solite/Amaron/Varta)',
    'timbi.cta': 'Consulter Accessoires',

    'videos.title': 'Nos Vidéos & Arrivages',
    'videos.subtitle': 'Découvrez nos derniers arrivages et véhicules en vidéo, directement depuis notre page Facebook.',
    'videos.watch_facebook': 'Voir sur Facebook',
    'videos.follow_cta': 'Suivez-nous sur Facebook pour ne manquer aucun arrivage',

    'footer.address': 'Nongo Morykanteah, Conakry, Guinée',
    'footer.phone': 'Téléphone / WhatsApp',
    'footer.copyright': '© 2024 Planet Auto Guinea. Tous droits réservés.',

    'modal.close': 'Fermer',
    'modal.call': 'Appeler',
    'modal.whatsapp': 'WhatsApp',

    'mobile_cta.call': 'Appeler',
    'mobile_cta.whatsapp': 'WhatsApp',
  },
  en: {
    'header.home': 'Home',
    'header.stock': 'Stock',
    'header.rental': 'Rental',
    'header.accessories': 'Accessories',
    'header.contact': 'Contact',
    'header.videos': 'Videos',
    'header.whatsapp': 'Chat on WhatsApp',

    'hero.slogan': 'Sale & Rental of American & European Vehicles',
    'hero.search_make': 'Make',
    'hero.search_budget': 'Budget',
    'hero.search_type': 'Type',
    'hero.search_vente': 'Sale',
    'hero.search_location': 'Rental',
    'hero.search_button': 'Search',
    'hero.quick_inquiry': 'Quick Inquiry',

    'vehicle.cards_title': 'Our Inventory',
    'vehicle.see_specs': 'View Specs',
    'vehicle.contact_whatsapp': 'Order via WhatsApp',
    'vehicle.price': 'Price',
    'vehicle.km': 'Mileage',
    'vehicle.fuel': 'Fuel',
    'vehicle.transmission': 'Transmission',
    'vehicle.seats': 'Seats',
    'vehicle.color': 'Color',
    'vehicle.engine': 'Engine',
    'vehicle.horsepower': 'Horsepower',

    'timbi.title': 'Timbi Store - Car Accessories',
    'timbi.description': 'Custom floor mats • Steering covers • Car fresheners • Batteries (Solite/Amaron/Varta)',
    'timbi.cta': 'Browse Accessories',

    'videos.title': 'Our Videos & New Arrivals',
    'videos.subtitle': 'Check out our latest arrivals and vehicles on video, straight from our Facebook page.',
    'videos.watch_facebook': 'Watch on Facebook',
    'videos.follow_cta': 'Follow us on Facebook to catch every new arrival',

    'footer.address': 'Nongo Morykanteah, Conakry, Guinea',
    'footer.phone': 'Phone / WhatsApp',
    'footer.copyright': '© 2024 Planet Auto Guinea. All rights reserved.',

    'modal.close': 'Close',
    'modal.call': 'Call',
    'modal.whatsapp': 'WhatsApp',

    'mobile_cta.call': 'Call',
    'mobile_cta.whatsapp': 'WhatsApp',
  },
};

export function t(key: string, lang: Language): string {
  return translations[lang][key] || key;
}
