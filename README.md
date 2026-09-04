# Planet Auto Guinea - Next.js 14 Application

A high-converting, mobile-first Next.js 14 website for Planet Auto Guinea - a premium car dealership and Timbi Store accessories business in Conakry, Guinea.

## 🎯 Business Context

**Business Name:** Planet Auto Guinea  
**Slogan:** Vente & Location de Véhicules Américains et Européens  
**Phone/WhatsApp:** +224 623 22 98 68  
**Location:** Nongo Conteah (près des Feux de Stop / Stade), Conakry, Guinée  
**Accessories:** Timbi Store (tapis, volants, parfums, batteries)

## ✨ Features

- **Dark-Themed Design:** Professional dark charcoal (#111111) with crimson accents (#E63946)
- **Bilingual Support:** French (default) and English with seamless language switching
- **Vehicle Inventory:** Dynamic grid reading from `data/vehicles.json`
- **Advanced Filtering:** Filter by make, budget, and type (sale vs rental)
- **Vehicle Modal:** Detailed specs view with contact CTAs
- **Timbi Store Section:** Showcase car accessories and services
- **Mobile Optimization:** Sticky bottom CTA bar (call/WhatsApp) on mobile
- **Responsive Design:** Built with Tailwind CSS for all device sizes
- **Static Export:** Optimized for Hostinger deployment (`output: 'export'`)

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **State Management:** React Context API
- **Internationalization:** Custom JSON-based i18n
- **Deployment:** Static export (Next.js `output: 'export'`)

## 📦 Installation & Setup

### Prerequisites
- Node.js 16.8 or later
- npm or yarn

### Installation

```bash
# Clone the repository
cd /home/user/Planet-Auto-Guin-e

# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Start dev server (http://localhost:3000)
npm run dev

# or
yarn dev
```

### Production Build

```bash
# Build and export for static hosting
npm run build

# Generated static files will be in /out directory
```

## 📂 Project Structure

```
planet-auto-guinea/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation & language switcher
│   │   ├── Hero.tsx            # Hero section with search
│   │   ├── VehicleGrid.tsx     # Vehicle cards grid
│   │   ├── VehicleModal.tsx    # Vehicle details modal
│   │   ├── TimbiStore.tsx      # Accessories section
│   │   ├── Footer.tsx          # Footer
│   │   └── MobileStickyCTA.tsx # Mobile CTA bar
│   ├── contexts/
│   │   └── LanguageContext.tsx # Language state management
│   └── i18n/
│       └── translations.ts     # i18n translations (FR/EN)
├── data/
│   └── vehicles.json           # Vehicle inventory
├── public/
│   └── images/
│       └── cars/               # Car images (placeholder)
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies & scripts
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```js
colors: {
  'dark-bg': '#111111',      // Dark background
  'crimson': '#E63946',      // Accent red
  'light-text': '#F8F9FA',   // Light text
  'gray-text': '#B0B0B0',    // Gray text
}
```

### Vehicle Data
Edit `data/vehicles.json` to add/modify vehicles:
```json
{
  "id": 1,
  "make": "Toyota",
  "model": "Camry",
  "year": 2022,
  "price": 28000,
  "type": "vente",
  "km": 45000,
  "fuel": "Essence",
  "transmission": "Automatique",
  "description_fr": "...",
  "description_en": "...",
  "specs": { ... }
}
```

### Translations
Edit `src/i18n/translations.ts` to add/modify French and English translations.

### Business Contact
Update contact details in:
- `src/components/Header.tsx` (phone/WhatsApp number)
- `src/components/Hero.tsx` (WhatsApp links)
- `src/components/Footer.tsx` (contact info)

## 📱 Mobile Features

- **Sticky CTA Bar:** Fixed bottom navigation with Call and WhatsApp buttons
- **Responsive Grid:** Vehicle cards adapt from 1 column (mobile) → 2 (tablet) → 3 (desktop)
- **Touch-Friendly:** Large tap targets, optimized spacing
- **Optimized Images:** Unoptimized images for static export

## 🌐 Deployment to Hostinger

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload contents of `/out` folder to Hostinger's `public_html` directory:**
   - Use FTP or Hostinger's File Manager
   - Upload all files from `/out` to root of `public_html`

3. **Configure domain:**
   - Point your domain to Hostinger's nameservers
   - Website will be accessible at your domain

## 🔧 Features Breakdown

### 1. Header & Navigation
- Logo with branding
- Desktop navigation menu
- Mobile hamburger menu
- Language switcher (FR/EN toggle)
- WhatsApp quick link

### 2. Hero Section
- Large headline with slogan
- Advanced search/filter bar:
  - Make (brand) filter
  - Budget range selector
  - Type selector (Sale/Rental)
- Quick inquiry CTA buttons
- Feature highlights

### 3. Vehicle Inventory
- Dynamic grid from `vehicles.json`
- Real-time filtering
- Vehicle cards with:
  - Image placeholder
  - Year, make, model
  - Price in USD
  - Mileage, fuel, transmission
  - Quick specifications
  - Two CTAs: "View Specs" & "Order via WhatsApp"
- Detailed modal view with full specs

### 4. Timbi Store Section
- Accessories showcase (4 categories)
- WhatsApp & Call CTAs
- Feature highlights

### 5. Mobile Sticky CTA
- Fixed at bottom on mobile
- Call and WhatsApp quick actions
- Hidden on desktop (uses header/footer)

### 6. Footer
- Business information
- Quick links
- Contact information
- Copyright notice

## 🌍 Languages

- **French (FR):** Default language
- **English (EN):** Secondary language
- Language preference saved to `localStorage`

## 📧 Contact Integration

All contact methods pre-filled with business number:
- **Phone:** `+224 623 22 98 68`
- **WhatsApp:** Auto-populated with inquiry message
- **Pre-filled messages:** Translated based on active language

## ⚙️ Configuration Files

### next.config.js
- `output: 'export'` - Static export for Hostinger
- `images.unoptimized: true` - No image optimization
- `trailingSlash: true` - URLs with trailing slashes

### tailwind.config.js
- Custom color palette
- System font stack
- Dark theme default

## 🚀 Performance

- Static export = instant page load
- No server required
- CDN-friendly (Hostinger)
- Optimized bundle size
- Mobile-first responsive design

## 📊 SEO

- Meta tags configured
- Open Graph integration
- Bilingual content
- Semantic HTML
- Mobile-responsive

## 🔒 Security

- No user data collection (static site)
- External links use `target="_blank"` with `rel="noopener noreferrer"`
- Safe Tailwind CSS classes
- No external API calls

## 📝 License

Created for Planet Auto Guinea. All rights reserved.

## 🤝 Support

For updates or modifications, contact the development team.

---

**Built with ❤️ for Planet Auto Guinea**
