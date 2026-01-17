import { defineRouting, type DomainsConfig } from "next-intl/routing";

// All supported locales (URL format)
export const locales = [
  "de-at",
  "nl-be",
  "fr-be",
  "da-dk",
  "fi-fi",
  "fr-fr",
  "de-de",
  "en-ie",
  "it-it",
  "nl-nl",
  "pt-pt",
  "es-es",
  "sv-se",
  "fr-ch",
  "de-ch",
  "it-ch",
  "en-gb",
  "en-us",
  "fr-ca",
  "en-ca",
] as const;

export type UrlLocale = (typeof locales)[number];

// Production domains configuration
const productionDomains = [
  {
    domain: "example.com", // US site
    defaultLocale: "en-us",
    locales: ["en-us"],
  },
  {
    domain: "example.ca", // Canada site
    defaultLocale: "en-ca",
    locales: ["en-ca", "fr-ca"], // Both EN and FR Canada
  },
  {
    domain: "example.co.uk", // UK site
    defaultLocale: "en-gb",
    locales: ["en-gb"],
  },
  {
    domain: "example.de", // Germany
    defaultLocale: "de-de",
    locales: ["de-de"],
  },
  {
    domain: "example.fr", // France
    defaultLocale: "fr-fr",
    locales: ["fr-fr"],
  },
  {
    domain: "example.it", // Italy
    defaultLocale: "it-it",
    locales: ["it-it"],
  },
  {
    domain: "example.es", // Spain
    defaultLocale: "es-es",
    locales: ["es-es"],
  },
  {
    domain: "example.nl", // Netherlands
    defaultLocale: "nl-nl",
    locales: ["nl-nl"],
  },
  {
    domain: "example.be", // Belgium (multilingual)
    defaultLocale: "nl-be",
    locales: ["nl-be", "fr-be"],
  },
  {
    domain: "example.ch", // Switzerland (multilingual)
    defaultLocale: "de-ch",
    locales: ["de-ch", "fr-ch", "it-ch"],
  },
  {
    domain: "example.at", // Austria
    defaultLocale: "de-at",
    locales: ["de-at"],
  },
  {
    domain: "example.pt", // Portugal
    defaultLocale: "pt-pt",
    locales: ["pt-pt"],
  },
  {
    domain: "example.ie", // Ireland
    defaultLocale: "en-ie",
    locales: ["en-ie"],
  },
  {
    domain: "example.se", // Sweden
    defaultLocale: "sv-se",
    locales: ["sv-se"],
  },
  {
    domain: "example.dk", // Denmark
    defaultLocale: "da-dk",
    locales: ["da-dk"],
  },
  {
    domain: "example.fi", // Finland
    defaultLocale: "fi-fi",
    locales: ["fi-fi"],
  },
];

export const routing = defineRouting({
  locales,
  defaultLocale: "en-us",

  // Only show locale prefix when it's NOT the domain's default
  localePrefix: "as-needed",

  // Disable automatic locale detection from browser Accept-Language header
  localeDetection: false,

  // Domain-based routing configuration
  domains: [
    // Development - allows all locales for testing
    {
      domain: "localhost:3000",
      defaultLocale: "en-us",
      locales: [...locales], // All locales available on localhost
    },
    // Production domains (no locale overlap)
    ...(process.env.NODE_ENV === "production"
      ? (productionDomains as DomainsConfig<typeof locales>)
      : []),
  ],
});
