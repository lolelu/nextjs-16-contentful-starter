import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeNavigationAnchorBarModuleFields {
  // Stub - this content type may not exist in your Contentful space
  [key: string]: unknown;
}

export type TypeNavigationAnchorBarModuleSkeleton = EntrySkeletonType<
  TypeNavigationAnchorBarModuleFields,
  "navigationAnchorBarModule"
>;
export type TypeNavigationAnchorBarModule<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeNavigationAnchorBarModuleSkeleton, Modifiers, Locales>;
