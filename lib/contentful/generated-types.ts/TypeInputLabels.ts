import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeInputLabelsFields {
    internalName: EntryFieldTypes.Symbol;
    nameLabel: EntryFieldTypes.Symbol;
    placeholderLabel?: EntryFieldTypes.Symbol;
    optionalLabel: EntryFieldTypes.Symbol;
    helpTextLabel?: EntryFieldTypes.Symbol;
}

export type TypeInputLabelsSkeleton = EntrySkeletonType<TypeInputLabelsFields, "inputLabels">;
export type TypeInputLabels<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeInputLabelsSkeleton, Modifiers, Locales>;
