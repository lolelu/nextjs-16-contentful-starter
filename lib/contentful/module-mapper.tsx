import { ReactNode } from "react";
import { ModuleData, ButtonInfo } from "./types";
import {
  NavigationLinkModule,
  RichTextModule,
  HeroBannerModule,
  HeroBannerOverflowingModule,
  HomeBannerModule,
  PromoHomeBannerModule,
  MediaModule,
  MediaSliderModule,
  NewsletterSubscriptionModule,
  ContactUsModule,
  DefaultModule,
} from "@/components/modules";

// Re-export types for convenience
export type { ModuleData, ButtonInfo };

/**
 * Module mapper - maps Contentful module types to React components
 */

/**
 * Get just the module name for simple display
 * @param module - The Contentful module entry
 * @returns The human-readable module name
 */
export function getModuleName(module: ModuleData): string {
  const moduleType = module?.sys?.contentType?.sys?.id;

  const moduleNames: Record<string, string> = {
    navigationLinkModule: "Navigation Links",
    richTextModule: "Rich Text",
    heroBannerModule: "Hero Banner",
    mediaModule: "Media",
    // Add more mappings as needed
  };

  return moduleNames[moduleType] || `${moduleType || "Unknown Module"}`;
}

/**
 * Maps a Contentful module to a React component
 * @param module - The Contentful module entry
 * @returns React component for the module
 */
export function mapModuleToComponent(module: ModuleData): ReactNode {
  const moduleType = module?.sys?.contentType?.sys?.id;

  switch (moduleType) {
    case "navigationLinkModule":
      return <NavigationLinkModule module={module} />;

    case "richTextModule":
      return <RichTextModule module={module} />;

    case "heroBannerModule":
      return <HeroBannerModule module={module} />;

    case "heroBannerOverflowingModule":
      return <HeroBannerOverflowingModule module={module} />;

    case "homeBannerModule":
      return <HomeBannerModule module={module} />;

    case "promoHomeBannerModule":
      return <PromoHomeBannerModule module={module} />;

    case "mediaModule":
      return <MediaModule module={module} />;

    case "mediaSliderModule":
      return <MediaSliderModule module={module} />;

    case "newsletterSubscriptionModule":
      return <NewsletterSubscriptionModule module={module} />;

    case "contactUsModule":
      return <ContactUsModule module={module} />;

    default:
      return <DefaultModule module={module} />;
  }
}
