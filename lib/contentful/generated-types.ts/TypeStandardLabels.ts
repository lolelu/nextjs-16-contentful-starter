import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeStandardLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    pageType: EntryFieldTypes.Symbol<"Main Website" | "Shared Homepage">;
    labels?: EntryFieldTypes.Object;
}

export type TypeStandardLabelsSkeleton = EntrySkeletonType<TypeStandardLabelsFields, "standardLabels">;
export type TypeStandardLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStandardLabelsSkeleton, Modifiers, Locales>;
