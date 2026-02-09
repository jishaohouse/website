export const productNames = [
  "Aluminum Sliding Window System",
  "Thermal Break Casement Window",
  "Heavy Duty Aluminum Folding Door",
  "Modern Aluminum Sunroom",
  "Energy Efficient Double Glazed Window",
  "Soundproof Bedroom Window",
  "Commercial Storefront Door",
  "Residential Balcony Sliding Door",
  "Custom Villa Window Design",
  "High Performance System Window",
  "Aluminum Bathroom Door",
  "Insect Screen Window Integration",
  "Minimalist Frame Window",
  "Panorama Sliding Door",
  "Tilt and Turn Aluminum Window",
  "Security Aluminum Door"
];

export const products = productNames.map((name, index) => ({
  id: index + 1,
  name,
  image: `/products/${index + 1}.jpg`,
  description: `High quality ${name} from Foshan Jishao Doors And Windows. Custom aluminum solution for your project.`
}));
