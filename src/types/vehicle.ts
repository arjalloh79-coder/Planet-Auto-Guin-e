export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number | string;
  fuel: string;
  transmission: string;
  mileage: string;
  type: string;
  featured?: boolean;
  badge?: string;
  description: {
    fr: string;
    en: string;
  };
  images: string[];
  specs?: {
    seats?: number;
    color?: string;
    engine?: string;
    horsepower?: number;
  };
}
