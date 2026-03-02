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
          "url": "https://www.jishaowindows.com/favicon.ico",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+86-135-5333-8986",
          "contactType": "sales",
          "areaServed": "Global",
          "availableLanguage": ["English", "Chinese"]
        },
        "sameAs": [
          "https://wa.me/8613539314842"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.jishaowindows.com/#localbusiness",
        "name": "Foshan Jishao Doors And Windows",
        "image": "https://www.jishaowindows.com/slides/home1.jpg",
        "url": "https://www.jishaowindows.com",
        "telephone": "+86-135-5333-8986",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No. 8, Bo'ai East Road, Nanhai District",
          "addressLocality": "Foshan City",
          "addressRegion": "Guangdong Province",
          "postalCode": "528200",
          "addressCountry": "CN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.0215,
          "longitude": 113.1214
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        },
        "priceRange": "$$"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.jishaowindows.com/#website",
        "url": "https://www.jishaowindows.com",
        "name": "Foshan Jishao Doors And Windows",
        "description": "Premium Aluminum Doors and Windows Manufacturer in China.",
        "publisher": {
          "@id": "https://www.jishaowindows.com/#organization"
        },
        "inLanguage": "en"
      },
      {
        "@type": "Service",
        "@id": "https://www.jishaowindows.com/#service",
        "name": "Custom Aluminum Doors and Windows Manufacturing",
        "provider": {
          "@id": "https://www.jishaowindows.com/#organization"
        },
        "areaServed": "Global",
        "description": "Custom design and manufacturing of high-quality aluminum doors and windows for residential and commercial projects. OEM and ODM services available."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.jishaowindows.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is your factory located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our factory is located at No. 8, Bo'ai East Road, Nanhai District, Foshan City, Guangdong Province, China. We are in the heart of China's aluminum manufacturing hub."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer custom sizes for windows and doors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in custom manufacturing. All our aluminum windows and doors can be tailored to your specific dimensions, color preferences, and functional requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What is the lead time for production?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Production time typically ranges from 15 to 25 days depending on the order quantity and complexity. Please contact our sales team for a precise estimate for your project."
            }
          },
          {
            "@type": "Question",
            "name": "Do you export to other countries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we export our aluminum products globally. We have experience shipping to various countries and can assist with logistics."
            }
          },
          {
            "@type": "Question",
            "name": "What warranty do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a quality warranty on our products. Our aluminum profiles and hardware are sourced from reputable brands to ensure durability and longevity. Specific warranty terms depend on the product series."
            }
          }
        ]
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
            "name": product.name.en,
            "description": product.description.en,
            "image": `https://www.jishaowindows.com${product.image}`,
            "sku": product.id,
            "mpn": product.id,
            "brand": {
              "@type": "Brand",
              "name": "Jishao"
            },
            "manufacturer": {
              "@id": "https://www.jishaowindows.com/#organization"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://www.jishaowindows.com/#products`,
              "priceCurrency": "USD",
              "price": "0", // 0 indicates contact for price or variable
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
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
