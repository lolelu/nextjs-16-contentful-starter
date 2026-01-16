import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeColorFields {
    internalName: EntryFieldTypes.Symbol;
    hexCode: EntryFieldTypes.Symbol;
    appliedToTypes: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Background" | "Border" | "Button" | "Text">>;
}

export type TypeColorSkeleton = EntrySkeletonType<TypeColorFields, "color">;
export type TypeColor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeColorSkeleton, Modifiers, Locales>;
