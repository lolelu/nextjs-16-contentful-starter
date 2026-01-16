import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeWarrantyPlanTextTooltipFields {
  // Stub - this content type may not exist in your Contentful space
  [key: string]: unknown;
}

export type TypeWarrantyPlanTextTooltipSkeleton = EntrySkeletonType<
  TypeWarrantyPlanTextTooltipFields,
  "warrantyPlanTextTooltip"
>;
export type TypeWarrantyPlanTextTooltip<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeWarrantyPlanTextTooltipSkeleton, Modifiers, Locales>;
