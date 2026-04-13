export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  price: number;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  dimensions: string[];
  materials: string[];
};

export type CustomizationOptions = {
  woodTypes: string[];
  sizes: string[];
  legStyles: string[];
  finishes: string[];
};

export type Selection = {
  woodType: string;
  size: string;
  legStyle: string;
  finish: string;
  notes: string;
};
