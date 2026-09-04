import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'Planet Auto Guinea - Vente & Location de Véhicules',
  description:
    'Planet Auto Guinea: Vente et location de véhicules américains et européens à Conakry. Timbi Store - Accessoires auto.',
  keywords: [
    'voiture',
    'location',
    'conakry',
    'guinée',
    'véhicules',
    'car sale',
    'car rental',
  ],
  authors: [{ name: 'Planet Auto Guinea' }],
  openGraph: {
    title: 'Planet Auto Guinea',
    description: 'Vente & Location de Véhicules Américains et Européens',
    url: 'https://planetautoguinea.com',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
