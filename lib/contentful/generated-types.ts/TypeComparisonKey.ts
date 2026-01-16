import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComparisonKeyFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    isColor?: EntryFieldTypes.Boolean;
    icon?: EntryFieldTypes.AssetLink;
}

export type TypeComparisonKeySkeleton = EntrySkeletonType<TypeComparisonKeyFields, "comparisonKey">;
export type TypeComparisonKey<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComparisonKeySkeleton, Modifiers, Locales>;
