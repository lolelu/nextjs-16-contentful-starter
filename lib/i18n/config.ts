import { locales, type UrlLocale } from "./routing";

// Re-export from routing
export { locales, type UrlLocale } from "./routing";

// Contentful locale codes - standard ISO format (language-REGION)
export type ContentfulLocale =
  | "de-AT"
  | "nl-BE"
  | "fr-BE"
  | "da-DK"
  | "fi-FI"
  | "fr-FR"
  | "de-DE"
  | "en-IE"
  | "it-IT"
  | "nl-NL"
  | "pt-PT"
  | "es-ES"
  | "sv-SE"
  | "fr-CH"
  | "de-CH"
  | "it-CH"
  | "en-GB"
  | "en-US"
  | "en-CA"
  | "fr-CA";

// Mapping from URL locale (lowercase) to Contentful locale (proper case)
export const localeMap: Record<UrlLocale, ContentfulLocale> = {
  "de-at": "de-AT",
  "nl-be": "nl-BE",
  "fr-be": "fr-BE",
  "da-dk": "da-DK",
  "fi-fi": "fi-FI",
  "fr-fr": "fr-FR",
  "de-de": "de-DE",
  "en-ie": "en-IE",
  "it-it": "it-IT",
  "nl-nl": "nl-NL",
  "pt-pt": "pt-PT",
  "es-es": "es-ES",
  "sv-se": "sv-SE",
  "fr-ch": "fr-CH",
  "de-ch": "de-CH",
  "it-ch": "it-CH",
  "en-gb": "en-GB",
  "en-us": "en-US",
  "en-ca": "en-CA",
  "fr-ca": "fr-CA",
};

// Reverse mapping: Contentful locale to URL locale
export const reverseLocaleMap: Record<ContentfulLocale, UrlLocale> = {
  "de-AT": "de-at",
  "nl-BE": "nl-be",
  "fr-BE": "fr-be",
  "da-DK": "da-dk",
  "fi-FI": "fi-fi",
  "fr-FR": "fr-fr",
  "de-DE": "de-de",
  "en-IE": "en-ie",
  "it-IT": "it-it",
  "nl-NL": "nl-nl",
  "pt-PT": "pt-pt",
  "es-ES": "es-es",
  "sv-SE": "sv-se",
  "fr-CH": "fr-ch",
  "de-CH": "de-ch",
  "it-CH": "it-ch",
  "en-GB": "en-gb",
  "en-US": "en-us",
  "en-CA": "en-ca",
  "fr-CA": "fr-ca",
};

// Default URL locale
export const defaultLocale: UrlLocale = "en-us";

// Check if a string is a valid URL locale
export function isValidLocale(locale: string): locale is UrlLocale {
  return locales.includes(locale as UrlLocale);
}

// Get Contentful locale from URL locale
export function getContentfulLocale(urlLocale: UrlLocale): ContentfulLocale {
  return localeMap[urlLocale];
}

// Get URL locale from Contentful locale
export function getUrlLocale(contentfulLocale: ContentfulLocale): UrlLocale {
  return reverseLocaleMap[contentfulLocale];
}
