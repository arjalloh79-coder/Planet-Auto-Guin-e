# Vehicle Photos

Each vehicle in `data/vehicles.json` lists the exact filenames it expects in its `images` array. Save your photos here using those exact names and they'll appear automatically — no code changes needed. Until a file is uploaded, the site shows a placeholder icon in its place, so nothing breaks.

## Currently expected

**Mazda 3 (2008)**
- `mazda3-blue-1.jpg`
- `mazda3-blue-2.jpg`
- `mazda3-blue-3.jpg`
- `mazda3-blue-interior.jpg`

**Acura MDX (2024)**
- `acura-mdx-front.jpg`
- `acura-mdx-side.jpg`
- `acura-mdx-engine.jpg`
- `acura-mdx-interior.jpg`

## Adding a new vehicle to the site

1. Open `data/vehicles.json` and copy an existing vehicle entry as a template.
2. Fill in `make`, `model`, `year`, `price` (a number like `28000`, or a string like `"Sur demande"`), `fuel`, `transmission`, `mileage`, `type` (`"Vente"` or `"Location"`), and bilingual `description.fr` / `description.en`.
3. Save that vehicle's photos here (any filenames you like) and list their paths in its `images` array, e.g. `"/images/vehicles/my-photo.jpg"`.
4. Optional: set `"featured": true` to pin it to the top of the grid with a ⭐ ribbon, and `"badge"` for a short marketing tag (e.g. "Véhicule Vérifié & Garanti").

No rebuild step is needed in development (`npm run dev` picks up JSON changes automatically). For production, run `npm run build` again and re-upload the `/out` folder to Hostinger.
