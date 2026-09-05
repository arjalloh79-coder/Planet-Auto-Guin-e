# Vehicle Photos

Each vehicle in `data/vehicles.json` lists the exact filenames it expects in its `images` array. Save your photos here using those exact names and they'll appear automatically — no code changes needed. Until a file is uploaded, the site shows a placeholder icon in its place, so nothing breaks.

## Status

**✅ Have a real photo:**
- Acura MDX — `acura-mdx-front.jpg` (front only; add `acura-mdx-side.jpg` / `-engine.jpg` / `-interior.jpg` and list them in `data/vehicles.json` for more angles)
- Hyundai Tucson (white) — `hyundai-tucson-white-1.jpg`
- Mitsubishi ASX (red) — `mitsubishi-asx-red-1.jpg`
- Toyota Land Cruiser Prado (black) — `toyota-land-cruiser-prado-black-1.jpg`
- Toyota Matrix (red) — `toyota-matrix-red-1.jpg`
- Toyota Corolla (blue) — `toyota-corolla-blue-1.jpg`

**⏳ Still needs a photo — Mazda 3 (2008)**, referenced in `data/vehicles.json` as:
- `mazda3-blue-1.jpg`, `mazda3-blue-2.jpg`, `mazda3-blue-3.jpg`, `mazda3-blue-interior.jpg`

**⚠️ Year/mileage are visual estimates, not confirmed** for: Hyundai Tucson, Mitsubishi ASX, Toyota Land Cruiser Prado, Toyota Matrix, Toyota Corolla — edit the `year` and `mileage` fields in `data/vehicles.json` once you have the real values.

## Adding a new vehicle to the site

1. Open `data/vehicles.json` and copy an existing vehicle entry as a template.
2. Fill in `make`, `model`, `year`, `price` (a number like `28000`, or a string like `"Sur demande"`), `fuel`, `transmission`, `mileage`, `type` (`"Vente"` or `"Location"`), and bilingual `description.fr` / `description.en`.
3. Save that vehicle's photos here (any filenames you like) and list their paths in its `images` array, e.g. `"/images/vehicles/my-photo.jpg"`.
4. Optional: set `"featured": true` to pin it to the top of the grid with a ⭐ ribbon, and `"badge"` for a short marketing tag (e.g. "Véhicule Vérifié & Garanti").

No rebuild step is needed in development (`npm run dev` picks up JSON changes automatically). For production, run `npm run build` again and re-upload the `/out` folder to Hostinger.
