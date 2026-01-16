// Re-export generated types for convenience
export * from "./generated-types.ts";

// Content type IDs enum for queries
export const CONTENT_TYPE_IDS = {
  GENERIC_PAGE: "genericPage",
  STANDARD_LABELS: "standardLabels",
} as const;

// Page type values for filtering GenericPage entries
export type GenericPageType =
  | "HomePage"
  | "Other"
  | "Landing"
  | "ProductRegistration"
  | "StoreFinder"
  | "DemoPage"
  | "CookiePage"
  | "ExternalLanding"
  | "SignUp"
  | "ForgotPassword"
  | "ResetPassword"
  | "EmailVerification";
