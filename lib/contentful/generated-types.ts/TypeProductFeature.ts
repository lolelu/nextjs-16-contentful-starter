import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeTooltipSkeleton } from "./TypeTooltip";

export interface TypeProductFeatureFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
    type: EntryFieldTypes.Symbol<"Other" | "Personalisation">;
    tooltip?: EntryFieldTypes.EntryLink<TypeTooltipSkeleton>;
}

export type TypeProductFeatureSkeleton = EntrySkeletonType<TypeProductFeatureFields, "productFeature">;
export type TypeProductFeature<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductFeatureSkeleton, Modifiers, Locales>;
