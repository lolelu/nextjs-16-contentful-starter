import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComparisonKeySkeleton } from "./TypeComparisonKey";
import type { TypeComparisonSectionSkeleton } from "./TypeComparisonSection";
import type { TypeProductComparisonSkeleton } from "./TypeProductComparison";

export interface TypeProductComparisonTableModuleFields {
    internalName: EntryFieldTypes.Symbol;
    anchorLinkId?: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Symbol<"Dynamic" | "Static">;
    productComparisons: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeProductComparisonSkeleton>>;
    comparisonSections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComparisonSectionSkeleton>>;
    comparisonKeys?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComparisonKeySkeleton>>;
    activeLabel: EntryFieldTypes.Symbol;
    addToCartLabel: EntryFieldTypes.Symbol;
    shopNowLabel: EntryFieldTypes.Symbol;
    priceFreeLabel: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    enableMarginReduction?: EntryFieldTypes.Boolean;
}

export type TypeProductComparisonTableModuleSkeleton = EntrySkeletonType<TypeProductComparisonTableModuleFields, "productComparisonTableModule">;
export type TypeProductComparisonTableModule<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProductComparisonTableModuleSkeleton, Modifiers, Locales>;
