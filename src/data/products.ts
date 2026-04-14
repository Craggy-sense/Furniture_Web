import { Category, Product, CustomizationOptions } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Dining Tables",
    slug: "dining-tables",
    image: "https://images.unsplash.com/photo-1577145745729-097462799a50?q=80&w=800&auto=format&fit=crop",
    description: "Handcrafted tables for memorable gatherings in the heart of your home."
  },
  {
    id: "cat-2",
    name: "Sofas",
    slug: "sofas",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    description: "Premium comfort and luxury upholstery for your living space."
  },
  {
    id: "cat-3",
    name: "Beds",
    slug: "beds",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    description: "Serene designs crafted for the ultimate rest and relaxation."
  }
];

export const products: Product[] = [
  // DINING TABLES
  {
    id: "prod-1",
    categoryId: "cat-1",
    name: "Mvule Heritage Table",
    slug: "mvule-heritage-table",
    price: 145000,
    shortDescription: "Solid Mvule dining table with a rich, natural grain.",
    description: "The Mvule Heritage Table is a testament to Kenyan craftsmanship. Sourced from sustainable forests, this solid Mvule piece features traditional joinery and a warm, honey-toned finish that deepens with age.",
    images: [
      "/images/products/mvule_heritage_table_1776198746702.png",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200"
    ],
    features: ["Solid Kenyan Mvule", "Hand-carved details", "Seats 6-8 comfortably", "Water-resistant finish"],
    dimensions: ["Length: 220cm", "Width: 100cm", "Height: 76cm"],
    materials: ["Grade A Mvule", "Natural Wax Finish"]
  },
  {
    id: "prod-4",
    categoryId: "cat-1",
    name: "Limuru Live Edge Table",
    slug: "limuru-live-edge-table",
    price: 185000,
    shortDescription: "One-of-a-kind live edge table crafted from fallen Mahogany.",
    description: "Named after the lush highlands where its wood was sourced, the Limuru Table celebrates the raw beauty of nature. Each table preserves the original edge of the tree, making every piece entirely unique.",
    images: [
      "/images/products/limuru_live_edge_table_1776198772706.png",
      "https://images.unsplash.com/photo-1549497538-301288c8549a?q=80&w=1200",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200"
    ],
    features: ["Single slab Mahogany", "Industrial steel base", "Unique grain patterns", "Matte protective coating"],
    dimensions: ["Length: 240cm", "Width: 110cm", "Height: 75cm"],
    materials: ["Salvaged Mahogany", "Powder-coated Steel"]
  },
  {
    id: "prod-5",
    categoryId: "cat-1",
    name: "Tana Round Pedestal",
    slug: "tana-round-pedestal",
    price: 95000,
    shortDescription: "Elegant circular dining for intimate spaces.",
    description: "Perfect for breakfast nooks or smaller dining rooms, the Tana Pedestal table features a sculpted base and a seamless top, handcrafted from premium Cypress wood.",
    images: [
      "/images/products/tana_round_pedestal_table_1776198883965.png",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200"
    ],
    features: ["Cypress Hardwood", "Sturdy pedestal base", "Compact design", "Smooth satin finish"],
    dimensions: ["Diameter: 120cm", "Height: 75cm"],
    materials: ["Kenyan Cypress", "Satin Polyurethane"]
  },

  // SOFAS
  {
    id: "prod-2",
    categoryId: "cat-2",
    name: "Safari Linen Sectional",
    slug: "safari-linen-sectional",
    price: 285000,
    shortDescription: "Expansive comfort with breathable local linen.",
    description: "Inspired by the sprawling landscapes of the Mara, the Safari Sectional offers deep-seated luxury. Upholstered in premium Kenyan linen, it stays cool and comfortable in the tropical climate.",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200"
    ],
    features: ["Modular design", "High-resilience foam", "Removable linen covers", "Solid wood internal frame"],
    dimensions: ["Width: 320cm", "Depth: 180cm (Chaise)", "Height: 80cm"],
    materials: ["Kenyan Linen Blend", "Kiln-dried Blue Gum"]
  },
  {
    id: "prod-6",
    categoryId: "cat-2",
    name: "Kilifi Leather Armchair",
    slug: "kilifi-leather-armchair",
    price: 75000,
    shortDescription: "Top-grain leather chair with a vintage coastal feel.",
    description: "The Kilifi Armchair combines structured elegance with aged leather that gets better with time. Hand-stitched in our Nairobi studio.",
    images: [
      "/images/products/kilifi_leather_armchair_1776198842317.png",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200"
    ],
    features: ["Kenyan Bovine Leather", "Exposed wood frame", "Ergonomic support", "Hand-applied finish"],
    dimensions: ["Width: 85cm", "Depth: 90cm", "Height: 95cm"],
    materials: ["Top-grain Leather", "Mvule Frame"]
  },
  {
    id: "prod-7",
    categoryId: "cat-2",
    name: "Nanyuki Loveseat",
    slug: "nanyuki-loveseat",
    price: 125000,
    shortDescription: "Cozy two-seater with woven fabric accents.",
    description: "A compact choice for urban living, featuring accents inspired by traditional woven patterns and a modern silhouette.",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200",
      "https://images.unsplash.com/photo-1519961655809-34fa156820ff?q=80&w=1200"
    ],
    features: ["Mid-century design", "Tapered legs", "Durability tested", "Comfort-first cushioning"],
    dimensions: ["Width: 160cm", "Depth: 85cm", "Height: 82cm"],
    materials: ["Woven Textile", "Walnut-stained Cypress"]
  },

  // BEDS
  {
    id: "prod-3",
    categoryId: "cat-3",
    name: "Rift Valley Canopy Bed",
    slug: "rift-valley-canopy-bed",
    price: 165000,
    shortDescription: "Stunning four-poster bed in dark Mahogany.",
    description: "Make a statement in the bedroom with the Rift Valley Canopy Bed. Its majestic frame is hand-turned by our master carpenters, designed to be the centerpiece of your sanctuary.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1200",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200"
    ],
    features: ["Solid Mahogany", "Removable canopy rails", "Integrated slat system", "Hidden hardware"],
    dimensions: ["Length: 215cm", "Width: 185cm", "Height: 220cm"],
    materials: ["Solid Mahogany", "Steel corner braces"]
  },
  {
    id: "prod-8",
    categoryId: "cat-3",
    name: "Watamu Floating Bed",
    slug: "watamu-floating-bed",
    price: 110000,
    shortDescription: "Minimalist platform bed with a 'floating' illusion.",
    description: "Clean lines and a hidden base give this bed a light, airy feel. Perfect for modern, uncluttered bedrooms.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200",
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1200",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200"
    ],
    features: ["Hidden recessed base", "Headboard included", "No box spring needed", "Sanded to perfection"],
    dimensions: ["Length: 210cm", "Width: 160cm", "Height: 35cm (Base)"],
    materials: ["Laminated Hardwood", "Solid Pine Slats"]
  },
  {
    id: "prod-9",
    categoryId: "cat-3",
    name: "Aberdare Storage Bed",
    slug: "aberdare-storage-bed",
    price: 195000,
    shortDescription: "Functional beauty with integrated under-bed drawers.",
    description: "Maximize your space with the Aberdare Bed. Featuring four deep drawers for linens and storage, without compromising on design.",
    images: [
      "/images/products/aberdare_storage_bed_1776198804835.png",
      "https://images.unsplash.com/photo-1582582621959-48d245c7cb78?q=80&w=1200"
    ],
    features: ["4 Storage drawers", "Solid Mvule drawer fronts", "Soft-close sliders", "Heavy-duty frame"],
    dimensions: ["Length: 215cm", "Width: 185cm", "Height: 110cm (Headboard)"],
    materials: ["Mvule & Engineered Wood", "Premium Wood Oil"]
  }
];

export const customizationOptions: CustomizationOptions = {
  woodTypes: ["Mvule", "Mahogany", "Cypress", "Blue Gum"],
  sizes: ["Standard", "King Size", "Super King", "Custom Dimensions"],
  legStyles: ["Tapered", "Square", "Turned", "Metal Frame"],
  finishes: ["Natural Oil", "Dark Stain", "Honey Wax", "Matte Clear"]
};
