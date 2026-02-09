import { products } from "@/data/products";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.jishaowindows.com/#organization",
        "name": "Foshan Jishao Doors And Windows",
        "url": "https://www.jishaowindows.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.jishaowindows.com/favicon.ico"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+86-135-5333-8986",
          "contactType": "sales",
          "areaServed": "Global",
          "availableLanguage": ["English", "Chinese"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 8, Bo'ai East Road, Nanhai District",
          "addressLocality": "Foshan City",
          "addressRegion": "Guangdong Province",
          "postalCode": "528200",
          "addressCountry": "CN"
        },
        "email": "zengkaoyuanfs@gmail.com"
      },
      {
        "@type": "Manufacturer",
        "@id": "https://www.jishaowindows.com/#manufacturer",
        "name": "Foshan Jishao Doors And Windows",
        "url": "https://www.jishaowindows.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 8, Bo'ai East Road, Nanhai District",
          "addressLocality": "Foshan City",
          "addressRegion": "Guangdong Province",
          "postalCode": "528200",
          "addressCountry": "CN"
        },
        "image": "https://www.jishaowindows.com/slides/home1.jpg",
        "priceRange": "$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.jishaowindows.com/#website",
        "url": "https://www.jishaowindows.com",
        "name": "Foshan Jishao Doors And Windows",
        "publisher": {
          "@id": "https://www.jishaowindows.com/#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "ItemList",
        "@id": "https://www.jishaowindows.com/#products",
        "name": "Jishao Aluminum Products",
        "description": "High-quality aluminum doors and windows products from Foshan Jishao Factory.",
        "itemListElement": products.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "image": `https://www.jishaowindows.com${product.image}`,
            "brand": {
              "@type": "Brand",
              "name": "Jishao"
            },
            "manufacturer": {
              "@id": "https://www.jishaowindows.com/#manufacturer"
            }
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
