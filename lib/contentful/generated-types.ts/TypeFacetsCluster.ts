import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFacetsClusterFields {
    internalName: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.Symbol;
    key: EntryFieldTypes.Symbol<"Attachment" | "CookingTime" | "Course" | "Default" | "Difficulty" | "Inspiration" | "SeasonAndEvent" | "Specific" | "Tool">;
    expanded: EntryFieldTypes.Boolean;
    type: EntryFieldTypes.Symbol<"Checkbox" | "Icon">;
}

export type TypeFacetsClusterSkeleton = EntrySkeletonType<TypeFacetsClusterFields, "facetsCluster">;
export type TypeFacetsCluster<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFacetsClusterSkeleton, Modifiers, Locales>;
