import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComparisonKeySkeleton } from "./TypeComparisonKey";

export interface TypeComparisonSectionFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    keys?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComparisonKeySkeleton>>;
}

export type TypeComparisonSectionSkeleton = EntrySkeletonType<TypeComparisonSectionFields, "comparisonSection">;
export type TypeComparisonSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComparisonSectionSkeleton, Modifiers, Locales>;
