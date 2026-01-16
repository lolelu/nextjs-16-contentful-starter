import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComparisonKeySkeleton } from "./TypeComparisonKey";

export interface TypeComparisonItemFields {
    internalName: EntryFieldTypes.Symbol;
    comparisonKey: EntryFieldTypes.EntryLink<TypeComparisonKeySkeleton>;
    text: EntryFieldTypes.RichText;
}

export type TypeComparisonItemSkeleton = EntrySkeletonType<TypeComparisonItemFields, "comparisonItem">;
export type TypeComparisonItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComparisonItemSkeleton, Modifiers, Locales>;
