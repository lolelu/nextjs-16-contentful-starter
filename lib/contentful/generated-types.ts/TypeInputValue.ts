import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeInputValueFields {
    internalName: EntryFieldTypes.Symbol;
    value: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    icon?: EntryFieldTypes.AssetLink;
}

export type TypeInputValueSkeleton = EntrySkeletonType<TypeInputValueFields, "inputValue">;
export type TypeInputValue<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputValueSkeleton, Modifiers, Locales>;
